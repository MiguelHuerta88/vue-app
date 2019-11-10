import Vuex from 'vuex';
import Vue from 'vue';

// if you are going to import modules do it below
import booksModule from "./modules/books";

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		booksModule
	}
});