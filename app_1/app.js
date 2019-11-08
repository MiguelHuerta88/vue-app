/* begin to set up vue */

var app = new Vue({
	el : "#app",
	data : {
		heading: "Welcome to the Book Store",
		books: books // this is being loaded in from data.js
	}
});