import axios from "axios";

/* this file will contain the store methods */
const state = {
	books: [],
	mostRecentBooks: [],
	booksViewed: [],
};

// mutations as passed state, payload
const mutations = {
	UPDATE_CURRENT_BOOK(state, payload) {
		state.booksViewed[payload.id] = payload;
	},
	UPDATE_BOOKS(state, payload) {
		state.books = payload;
	}
};

// actions are passed {{ commit }}, optional payload or context, payload
const actions = {
	viewedBook ({ commit }, bookId) {
		return new Promise((resolve, reject) => {
			// we added async and awaits so that it makes is async
			axios.get('/vue-app/app_3/public/api/book/' + bookId).then(response => {
				// commit
				commit('UPDATE_CURRENT_BOOK', response.data);

				resolve(response.data);
			});
		});
	},
	books({ commit }) {
		// pull the books
		axios.get('/vue-app/app_3/public/api/books').then(response => {
			commit('UPDATE_BOOKS', response.data);
		});
	}
};

const getters = {
	getBooks: state => state.books,
	getMostRecentBooks: state => state.mostRecentBooks,
	/* this method doesnt seem to work for me */
	getBookById: (state) => (id) => {
    	return state.booksViewed.find(book => {
    		book.id === id
    	});
  	}
	//book: state => state.current
};

const booksModule = {
	state,
	mutations,
	actions,
	getters
};
// make sure to export the module
export default booksModule;