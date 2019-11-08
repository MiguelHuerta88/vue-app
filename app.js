/* begin to set up vue */

var app = new Vue({
	el : "#app",
	data : {
		heading: "Welcome to the Book Store",
		books: [
			{
				title: "Harry Potter Chamber of Secrets",
				author: "J.K Rowling",
				published: "2008"
			},
			{
				title: "Bourne Supremacy",
				author: "Miguel Huerta",
				published: "2014"
			},
			{
				title: "James Bond",
				author: "Susan Espino",
				published: "2018"
			}
		]
	}
});