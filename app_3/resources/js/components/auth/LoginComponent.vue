<template>
	<div class="form">
		<h2>Login</h2>
		<form method="post" action="/login">
		  <input type="hidden" name="_token" :value="csrf_token">
		  <div class="form-group">
		    <label for="exampleInputEmail1">Username</label>
		    <input v-model="username" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
		  </div>
		  <div class="form-group">
		    <label for="exampleInputPassword1">Password</label>
		    <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
		  </div>
		  <button type="submit" class="btn btn-primary">Submit</button>
		</form>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				csrf_token: window.csrf_token,
				username: null,
				password: null
			}
		},
	}
</script>
<style scoped>
	.form {
		width: 80%;
		margin: 20px auto;
	}
</style>