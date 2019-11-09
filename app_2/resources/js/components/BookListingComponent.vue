<template>
<h2>{{ id }}</h2>
</template>
<script>
	import axios from 'axios';
    export default {
    	data() {
    		return {
    			book: null
    		}
    	},
        mounted() {
        	axios.get("/vue-app/app_2/public/api/book", {params: {ID: id}}).then(response => this.book = response.data);
        },
        props: ['id']
    }
</script>
<style scoped>

</style>
