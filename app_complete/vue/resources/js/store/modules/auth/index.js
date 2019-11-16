import axios from 'axios';
import { API_URL } from "../../../config";

axios.defaults.headers.common = {
  'X-Requested-With': 'XMLHttpRequest',
  'X-CSRF-TOKEN': window.document.head.querySelector('meta[name="csrf-token"]').content
};

const state = {
	isLoggedIn: false,
	loading: false
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
	}
};

const actions = {
	login({ commit }, fields) {
		commit('LOADING_PENDING');
		/* how this currently stands it can break. For example if we remove the 
		   frontend validation and sned empty fields. Laravel will return 
		   422 response */
		return new Promise((resolve, reject) => {
			axios.post(API_URL + '/api/login', fields).then(response => {
				if (!Object.keys(response.data.data.errors).length) {
					commit('UPDATE_IS_LOGGED_IN', true);
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
		});
	}
};

const getters = {
	isLoggedIn: state => state.isLoggedIn,
};

const authModule = {
	state,
	mutations,
	actions,
	getters
}

export default authModule;