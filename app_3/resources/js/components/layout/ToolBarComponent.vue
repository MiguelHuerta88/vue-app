<template>
	<div class='container'>
		<a class='back' @click="goBack" v-if="showBackLink"><i class="fa fa-angle-left"></i> Home</a>
	</div>
</template>
<script>
	export default {
		computed: {
			showBackLink() {
				return (this.$route.name != 'home') ? true : false;
			}
		},
		methods: {
			goBack() {
				// will tap into the router instance
				this.$router.push('/vue-app/app_3/public/');
			}
		}
	}
</script>
<style scoped>
	.container {
		font-family: sans-serif;
		width: 100%;
		margin: 10px 0;
	}
	.back {
		cursor: pointer;
		color: #006ba7;
		font-weight: 700;
	}
		.back i {
			font-weight: 700;
			color: #006ba7;
			margin-rigth: 5px;
		}
</style>