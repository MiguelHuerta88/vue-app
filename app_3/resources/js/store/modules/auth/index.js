import axios from 'axios';
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
			axios.post('/vue-app/app_3/public/api/login', fields).then(response => {
				if (!Object.keys(response.data.errors).length) {
					commit('UPDATE_IS_LOGGED_IN', true);
				}
				commit('LOADING_COMPLETE');
				resolve(response.data);
			});
		});
	},
	async isAuthenticated( { commit } ) {
		axios.get('/vue-app/app_3/public/api/check/user').then(response => {
			commit('UPDATE_IS_LOGGED_IN', response.data);
		});
	},
	logout({commit}) {
		axios.get('/vue-app/app_3/public/api/logout').then(response => {
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