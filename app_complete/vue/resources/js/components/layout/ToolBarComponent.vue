<template>
	<div class='container'>
		<a class='back' @click="goBack" v-if="showBackLink"><i class="fa fa-angle-left"></i> Home</a>

		<router-link v-if="!loggedIn" :to="{name: 'login'}" class="u-btn u-right u-login">Login</router-link>

		<router-link v-if="!loggedIn" :to="{name: 'register'}" class='u-btn u-right'>Register</router-link>
		<a v-else @click="logout" class="u-btn u-right u-logout back">Log Out</a>
	</div>
</template>
<script>	
	export default {
		computed: {
			showBackLink() {
				return (this.$route.name != 'home') ? true : false;
			},
			loggedIn() {
				return this.$store.getters.isLoggedIn
			}
		},
		methods: {
			goBack() {
				// will tap into the router instance
				this.$router.push('/');
			},
			logout() {
				this.$store.dispatch('logout');
			}
		},
		created() {
			this.$store.dispatch('isAuthenticated');
		}
	}
</script>
<style scoped>
	.container {
		font-family: sans-serif;
		width: 100%;
		margin: 10px auto;
	}
	.back {
		cursor: pointer;
		color: #006ba7;
		font-weight: 700;
	}
		.back i {
			font-weight: 700;
			color: #006ba7;
			margin-right: 5px;
		}
	.u-btn {
		margin-left: 10px;
	}
	.u-right {
		text-align: right;
		float:right;
	}
	.u-login {
		color: #006ba7;
	}
	.u-logout {
		color: red;
	}
</style>