import axios from "axios";

/* this file will contain the store methods */
const state = {
	books: [],
	mostRecentBooks: []

};

// mutations as passed state, payload
const mutations = {

};

// actions are passed {{ commit }}, optional payload or context, payload
const actions = {

};

const getters = {
	getBooks: state => state.books,
	getMostRecentBooks: state => state.mostRecentBooks,
	/*getBook(state) {
		return id => state.find(book => id === book.id);
	}*/
	getBook: state => {
		return id => state.find(book => id === book.id)
	}
};

const booksModule = {
	state,
	mutations,
	actions,
	getters
};
// make sure to export the module
export default booksModule;