<template>
	<div class="form">
		<h2>Login</h2>
		<span class='error' v-if="loginFailed">Username/Password not matching</span>
		<form method="post" action="/login" @submit="submitEvent">
		  <input type="hidden" name="_token" :value="csrf_token">
		  <div class="form-group">
		    <label for="exampleInputUsername1">Username</label>
		    <input v-model="fields.username" type="text" class="form-control" id="exampleInputUsername1">
		    <span class='error'>{{ fieldErrors.username }} </span>
		  </div>
		  <div class="form-group">
		    <label for="exampleInputPassword1">Password</label>
		    <input v-model="fields.password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
		    <span class='error'>{{ fieldErrors.password }} </span>
		  </div>
		  <button type="submit" class="btn btn-primary">Submit</button>
		</form>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				csrf_token: window.document.head.querySelector('meta[name="csrf-token"]').content,
				fields: {
					username: null,
					password: null,
				},
				// these will be where we will store any errors
				fieldErrors: {
					username: undefined,
					password: undefined,
				},
				loginFailed: false
			}
		},
		methods: {
			submitEvent(evt) {
				evt.preventDefault();

				// validate
				this.fieldErrors = this.validateForm(this.fields);

				// check if we have any errors
				if (Object.keys(this.fieldErrors).length) return;

				// otherwise continue and send the request to backend
				this.$store.dispatch('login', this.fields).then(response => {
					if (Object.keys(response.errors).length) {
						// not successful login
						this.loginFailed =true;
						return;
					} else {
						// send them home
						this.$router.push('/vue-app/app_3/public/');
					}

				});


			},
			validateForm(fields) {
				// check that fields are not empty
				const errors = {};

				if (!fields.username) errors.username = "username required";
				if (!fields.password) errors.password = "password required";

				return errors;
			}
		}
	}
</script>
<style scoped>
	.form {
		width: 80%;
		margin: 20px auto;
	}
	.error {
		color: red;
	}
</style>