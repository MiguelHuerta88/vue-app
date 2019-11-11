const state = {
	isLoggedIn: false,
	loading: false
};

const mutators = {

};

const actions = {

};

const getters = {
	isLoggedIn: state => state.isLoggedIn,
};

const authModule = {
	state,
	mutators,
	actions,
	getters
}

export default authModule;