<template>
	<div class="container">
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
    import BookApi from '../../api/BookApi';

    const api = new BookApi();
    export default {
    	data() {
    		return {
    			// this pulls the id from the route for us
    			id : this.$route.params.book,
    			book: null,
    			//images: null
    		}
    	},
        created() {
            api.get('book/' + this.id).then(response => this.book = response.data);
        	/*axios.get("/vue-app/app_3/public/api/book/" + this.id).then(response =>
        	 this.book = response.data);*/
        },
        computed: {
        	readablePublished() {
        		return new Date(this.book.published_on).toDateString();
        	}
        }
    }
</script>
<style scoped>
	.container {
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
