import axios from 'axios';
/* SIMPLE CLASS to try to show how we would create a RESTFUL class to be used */

// this is the base uri and we pass in the remaining url
const uri = "/vue-app/app_3/public/api/";

class BookApi {
	constructor() {
		// silence is golden
	}

	/**
	 * get route wrapper for axios
	 * 
	 * @param path => string
	 * @return Promise
	 */
	get(path) {
		// use axios to pull the data
		return axios.get(uri + path);
	}
}

export default BookApi