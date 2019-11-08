<template>
	<div>
		<h2>{{ heading }} </h2>
		<div class="books-list" v-if="books">
			<ul class="items">
				<li v-for="book in books">
					<div class="book-img">
						<i class="fa fa-book"></i>
					</div>
					<div class="book-content">
						<div class="info">
							<p> Title: {{ book.title }}
							<p>Author: <i class="fa fa-user"></i> {{ book.author }}
							<p> Published On: {{ book.published_on }} </p>
							<div> {{ book.description }}</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	import axios from 'axios';

	export default{
		data() {
			return {
				heading: "Welcome, All Our Book Inventory",
				books: null
			}
		},
		mounted() {
			// make axios call to API
			// this url should be not hardcoded i think
            /* once we begin using VUEX this will be moved. to keep all api calls centralized */
            axios.get('/vue-app/app_2/public/api/books').then(response => this.books = response.data);
		}
	}
</script>
<style scoped>
.books-list {
	display: relative;
	width: 100%;
}
	ul.items {
		list-style-type: none;
	}
		.items li {
			border: 1px solid #000;
			padding: 15px 10px;
			display: flex;
			margin-bottom: 10px;
		}
		.items li:last-child {
			margin-bottom: 0;
		}
		.book-img {
			width: 120px;
			height: 120px;
			margin-right: 10px;
		}
			.book-img i {
				width: 100%;
				height: 100%;
				font-size: 100px;
			}
</style>
