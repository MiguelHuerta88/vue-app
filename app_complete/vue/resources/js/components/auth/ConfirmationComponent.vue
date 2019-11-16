<template>
	<div class="container">
		<h2>Thank you for registering with <div class="badge badge-secondary">Mister Bookman</div></h2>

		<div class="text">
			We have sent an email to: <span class="font-weight-bold font-italic">{{ user.email }}</span> with an activation link. Please click link in order to activate your account. Failure to do so will result in not being able to log into the site.
		</div>
		<div class="thank-you">
			Thank you,
			Mister Bookman
		</div>
	</div>
</template>
<script>
	import { mapGetters } from 'vuex';
	export default {
		data() {
			return {
				user: null
			}
		},
		created() {
			this.user = this.$store.getters.user;
		},
		methods: {
			
		}
	}
</script>
<style scoped>
	.text {
		margin: 20px 0 50px 0;
	}
	.thank-you {
		float: right
	}
</style>