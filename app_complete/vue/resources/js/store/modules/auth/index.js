import axios from 'axios';
import { API_URL } from "../../../config/";

axios.defaults.headers.common = {
  'X-Requested-With': 'XMLHttpRequest',
  'X-CSRF-TOKEN': window.document.head.querySelector('meta[name="csrf-token"]').content
};

const state = {
	isLoggedIn: false,
	loading: false,
	user: {}
};

const mutations = {
	UPDATE_IS_LOGGED_IN (state, payload) {
		state.isLoggedIn = payload;
	},
	LOADING_PENDING (state) {
		state.loading = true
	},
	LOADING_COMPLETE (state) {
		state.loading = false;
	},
	UPDATE_USER (state, payload) {
		state.user = payload;
	}
};

const actions = {
	login({ commit, getters }, fields) {
		commit('LOADING_PENDING');
		/* how this currently stands it can break. For example if we remove the 
		   frontend validation and sned empty fields. Laravel will return 
		   422 response */
		return new Promise((resolve, reject) => {
			axios.post(API_URL + '/api/login', fields).then(response => {
				//if (!Object.keys(response.data.data.errors).length) {
				let obj = response.data.data;
				if (!obj.hasOwnProperty('errors')) {
					commit('UPDATE_IS_LOGGED_IN', true);
					if (!Object.keys(getters.user).length) {
						commit('UPDATE_USER', obj);
					}
				}
				commit('LOADING_COMPLETE');
				resolve(response.data.data);
			});
		});
	},
	async isAuthenticated( { commit } ) {
		axios.get(API_URL + '/api/check/user').then(response => {
			commit('UPDATE_IS_LOGGED_IN', response.data.data.isLoggedIn);
		});
	},
	logout({commit}) {
		axios.get(API_URL + '/api/logout').then(response => {
			commit('UPDATE_IS_LOGGED_IN', false);
			commit('UPDATE_USER', {});
		});
	},
	register({ commit }, fields) {
		return new Promise((resolve, reject) => {
			axios.post(API_URL + '/api/register', fields).then(response => {
				// sucess. update user but dont update is logged in since user has to verify
				commit('UPDATE_USER', response.data.data);
				return resolve(true);
			}).catch(error => {
				return reject(error.response.data);
			});
		});
	},
	find({ commit }, token) {
		return new Promise((resolve, reject) => {
			axios.get(API_URL + "/api/user/" + token).then(response => {
				commit('UPDATE_USER', response.data.data);
				return resolve(true);
			}).catch(error => {
				// error means user could not be found based on token
				return reject(false);
			});
		});
	},
	async activateUser({ commit, getters }) {
		// we should activate whatever user we have in state
		let user = getters.user;
		axios.get(API_URL + "/api/activate/" + user.email_token).then(response => {
			commit('UPDATE_USER', response.data.data);
		}).catch(error => {
			// this means we didnt find the user for some reason
		});
	}
};

const getters = {
	isLoggedIn: state => state.isLoggedIn,
	user: state => state.user,
};

const authModule = {
	state,
	mutations,
	actions,
	getters
}

export default authModule;