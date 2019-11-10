<template>
	<div class="container">
        <div class="carousel-holder" v-if="books">
            <h2> Top Sellers </h2>
            <CarouselComponent :books="books"></CarouselComponent>
        </div>

        <div class='inventory' v-if="mostRecent">
            <h2> Most Recent Books</h2>
            <ul class="book-list">
                <li v-for="book in mostRecent"><BookComponent :key="book.id" :book="book"></BookComponent></li>
            </ul>
        </div>
	</div>
</template>
<script>
	import axios from 'axios';
    import CarouselComponent from '../carousel/CarouselComponent';
    import BookComponent from './BookComponent';

	export default{
		data() {
			return {
				books: null,
                mostRecent: null,
			}
		},
        methods: {
        },
		created() {
			// make axios call to API
			// this url should be not hardcoded i think
            /* once we begin using VUEX this will be moved. to keep all api calls centralized */
            axios.get('/vue-app/app_3/public/api/books').then(response => {
                this.books = response.data;
            });

            axios.get('/vue-app/app_3/public/api/books/most-recent').then(response => {
                this.mostRecent = response.data;
            });

		},
        components: {
            CarouselComponent,
            BookComponent
        }
	}
</script>
<style scoped>
    .container {
        margin: 15px 20px;
        font-family: sans-serif;
    }
    .inventory .book-list {
        margin:0;
        padding: 0;
        list-style-type: none;
        list-style: none;
    }
        ul.book-list li {
            width: 100%;
            border: 2px solid lightcoral;
            margin-bottom: 30px;
            border-radius: 3px;
            -moz-border-radius: 3px;
            -webkit-border-radius: 3px;
            box-shadow:5px 10px #888888;
            margin-bottom: 20px;
        }
</style>
