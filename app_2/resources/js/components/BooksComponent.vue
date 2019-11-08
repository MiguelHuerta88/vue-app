<template>
	<div class="container">
		<h2>{{ heading }} </h2>
		<div class="books-list" v-if="books">
			<ul class="items">
				<li v-for="book in books">
					<BookComponent :key="book.id" :book="book"></BookComponent>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	import axios from 'axios';
	import BookComponent from './BookComponent.vue';

	export default{
		data() {
			return {
				heading: "Current Inventory",
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
    .books-list {
        position: relative;
        width: 100%;
    }
        ul.items {
            list-style-type: none;
            padding: 0;
            margin: 0;
        }
            .items li {
                border: 2px solid lightcoral;
                padding: 15px 10px;
                display: flex;
                margin-bottom: 30px;
                border-radius: 3px;
                -moz-border-radius: 3px;
                -webkit-border-radius: 3px;
                box-shadow:5px 10px #888888
            }
            .items li:last-child {
                margin-bottom: 0;
            }
</style>
