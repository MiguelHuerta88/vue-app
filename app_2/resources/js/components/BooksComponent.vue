<template>
	<div class="container">
        <div class="carousel-holder" v-if="books">
            <h2> Top Sellers </h2>
            <div class="carousel">
                <!-- controls components here -->

                <!-- end of control components -->
                <div class="carousel-items">
                    <BookComponent v-for="book in books" :key="book.id" :book="book"></BookComponent>
                </div>
            </div>
        </div>
	</div>
</template>
<script>
	import axios from 'axios';
	import BookComponent from './BookComponent.vue';

	export default{
		data() {
			return {
				books: null
			}
		},
		mounted() {
			// make axios call to API
			// this url should be not hardcoded i think
            /* once we begin using VUEX this will be moved. to keep all api calls centralized */
            axios.get('/vue-app/app_2/public/api/books').then(response => this.books = response.data);
		},
        components: {
		    BookComponent
        }
	}
</script>
<style scoped>
    .container {
        margin: 15px 20px;
        font-family: sans-serif;
    }
    .carousel-items {
        overflow-x: hidden;
        display: flex;
    }
    .item {
        border: 2px solid lightcoral;
        display: flex;
        /*padding: 15px 10px;*/
        /*display: inline-block;*/
        margin-bottom: 30px;
        border-radius: 3px;
        -moz-border-radius: 3px;
        -webkit-border-radius: 3px;
        box-shadow:5px 10px #888888;
        width: 48%;
        /*width: 568px;*/
        margin-right: 2%;
    }
</style>
