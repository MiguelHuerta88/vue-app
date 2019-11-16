<template>
	<div class="content">
        <div class="carousel-holder" v-if="books">
            <h2> <span class="badge badge-secondary">Top Sellers</span> </h2>
            <CarouselComponent :books="books"></CarouselComponent>
        </div>

        <div class='inventory' v-if="mostRecent">
            <h2> <span class="badge badge-secondary">Most Recent Books</span></h2>
            <ul class="book-list">
                <li v-for="book in mostRecent"><BookComponent :key="book.id" :book="book"></BookComponent></li>
            </ul>
        </div>
	</div>
</template>
<script>
	import axios from 'axios';
    import { mapGetters } from 'vuex';
    import CarouselComponent from '../carousel/CarouselComponent';
    import BookComponent from './BookComponent';

	export default{
        methods: {
        },
		created() {
            if (!this.books.length) {
                this.$store.dispatch('books');
            }

            if (!this.mostRecent.length) {
                this.$store.dispatch('mostRecent');
            }
		},
        components: {
            CarouselComponent,
            BookComponent
        },
        computed: {
            ...mapGetters(['books', 'mostRecent'])
        }
	}
</script>
<style scoped>
    .content{
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
