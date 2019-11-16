import axios from "axios";
import { API_URL } from "../../../config";

/* this file will contain the store methods */
const state = {
	logo: null,
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
	},
	UPDATE_MOST_RECENT(state, payload) {
		state.mostRecentBooks = payload;
	},
	UPDATE_LOGO(state, payload) {
		state.logo = payload;
	}
};

// actions are passed {{ commit }}, optional payload or context, payload
const actions = {
	viewedBook ({ commit }, bookId) {
		return new Promise((resolve, reject) => {
			// we added async and awaits so that it makes is async
			axios.get(API_URL + '/api/book/' + bookId).then(response => {
				// commit
				commit('UPDATE_CURRENT_BOOK', response.data);

				resolve(response.data);
			});
		});
	},
	books({ commit }) {
		// pull the books
		axios.get(API_URL + '/api/books').then(response => {
			commit('UPDATE_BOOKS', response.data);
		});
	},
	mostRecent({ commit }) {
		axios.get(API_URL + '/api/books/most-recent').then(response => {
			commit('UPDATE_MOST_RECENT', response.data);
		});
	},
	async logo({ commit }) {
		await axios.get('/api/logo').then(response => {
			commit('UPDATE_LOGO', response.data);
        });
	}
};

const getters = {
	books: state => state.books,
	mostRecent: state => state.mostRecentBooks,
	/* this method doesnt seem to work for me */
	getBookById: (state) => (id) => {
    	return state.booksViewed.find(book => {
    		book.id === id
    	});
  	},
  	getLogo: (state) => state.logo
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