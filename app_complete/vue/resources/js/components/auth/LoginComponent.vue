<template>
	<div class="form">
		<h2><span class="badge badge-secondary">Login</span></h2>
		<span class='error' v-if="loginFailed">Username/Password not matching</span>
		<form method="post" action="/login" @submit="submitEvent">
		  <input type="hidden" name="_token" :value="csrf_token">
		  <div class="form-group">
		    <label for="exampleInputUsername1">Username</label>
		    <input v-model="fields.username" type="text" class="form-control" id="exampleInputUsername1" placeholder="Username">
		    <span class='error'>{{ fieldErrors.username }} </span>
		  </div>
		  <div class="form-group">
		    <label for="exampleInputPassword1">Password</label>
		    <input v-model="fields.password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
		    <span class='error'>{{ fieldErrors.password }} </span>
		  </div>
		  <button type="submit" class="btn btn-primary" :disable="disableBtn">Submit</button>
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
				loginFailed: false,
				disableBtn: false
			}
		},
		methods: {
			submitEvent(evt) {
				evt.preventDefault();
				this.disableBtn = true;

				// validate
				this.fieldErrors = this.validateForm(this.fields);

				// check if we have any errors
				if (Object.keys(this.fieldErrors).length) {
					this.disableBtn = false;
					return;
				}

				// otherwise continue and send the request to backend
				this.$store.dispatch('login', this.fields).then(response => {
					let obj = response;
					//if (Object.keys(response.errors).length) {
					if (obj.hasOwnProperty('errors')) {
						// not successful login
						this.loginFailed =true;
						this.disableBtn = false;
						return;
					} else {
						// send them home
						this.$router.push('/');
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