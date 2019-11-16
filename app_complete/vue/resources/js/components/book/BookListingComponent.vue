<template>
	<div class="container-holder">
		<div class="img">
			<img :src="book.images.url" v-if="book && book.images">
		</div>
		<div class="content" v-if="book">
			<div class="title"> {{ book.title }} </div>
			<div class="author"> <i class="fa fa-user"></i> {{ book.author }}</div>
			<div class="published"> Published On: {{ readablePublished }} </div>
			<div class="description-label">Decription:</div>
			<div class="description"> {{ book.description }} </div>
		</div>
	</div>
</template>
<script>
	import axios from 'axios';
    import { mapGetters } from 'vuex';

    export default {
    	data() {
    		return {
    			// this pulls the id from the route for us
    			id : this.$route.params.book,
                book: null
    		}
    	},
        methods: {
        },
        created() {
            // ping the API pull this book for us. return the book to save and use
            this.$store.dispatch('viewedBook',this.id).then((response) => {
                this.book = response;
            });
        },
        computed: {
        	readablePublished() {
        		return new Date(this.book.published_on).toDateString();
        	}
        }
    }
</script>
<style scoped>
	.container-holder {
		width: 100%;
		margin: 20px;
		font-family: sans-serif;
	}
	.img {
		width: 97%;
		height: 500px;
		margin-bottom: 20px;
	}
		.img img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
    .title {
        font-style: italic;
        text-transform: uppercase;
        font-size: 25px;
        font-weight: 800;
        margin-bottom: 40px;
    }
    .author, .published, .description-label {
        font-size: 15px;
        font-weight: 700;
    }
    .description-label {
    	margin-top: 20px;
    }
    .description {
    	font-size: 15px;
    	margin-top: 10px;
    }

</style>
