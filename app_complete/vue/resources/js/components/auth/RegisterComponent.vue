<template>
	<div class="container">
		<h2><span class="badge badge-secondary">Register</span></h2>
		<form>
			<div class="form-row">
				<div class="form-group col-md-6">
					<label for="first_name">First Name</label>
					<input name="first_name" type="text" class="form-control" placeholder="First Name" required v-model="firstName">
				</div>
				<div class="form-group col-md-6">
					<label for="last_name">First Name</label>
					<input name="last_name" type="text" class="form-control" placeholder="Last Name" required v-model="lastName">
				</div>
			</div>
			<div class="form-group">
				<label for="email">Email</label>
				<input name="email" type="email" class="form-control" placeholder="example@example.com" v-mode="email" required>
			</div>
			<div class="form-row">
				<div class="form-group col-md-6">
					<label for="username">Username</label>
					<input name="username" type="text" class="form-control" v-model="username" placeholder="Username" required>
				</div>
				<div class="form-group col-md-6">
					<label for="password">Password</label>
					<input type="password" class="form-control" name="password" v-mode="password" required placeholder="Password">
				</div>
			</div>
			<div class="form-group">
				<label for="address">Address</label>
				<input type="text" name="address" class="form-control" placeholder="123 Apple St." required v-mode="address">
			</div>
			<div class="form-row">
				<div class="form-group col-md-4">
					<label for="city">City</label>
					<input type="text" class="form-control" name="city" required placeholder="Los Angeles" v-model="address">
				</div>
				<div class="form-group col-md-4">
					<label for="state">State</label>
					<input type="text" class="form-control" name="state" required placeholder="CA" v-model="address" maxlength="2">
				</div>
				<div class="form-group col-md-4">
					<label for="zipcode">Zipcode</label>
					<input type="text" class="form-control" name="zipcode" required placeholder="90023" v-model="zipcode" maxlength="7">
				</div>
			</div>

			<button type="submit" class="btn btn-primary">Submit</button>
		</form>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				fields: {
					firstName: null,
					lastName: null,
					email: null,
					username: null,
					password: null,
					address: null,
					city: null,
					state: null,
					zipcode: null
				}
			}
		}
	}
</script>
<style scoped>
	.container {
		margin-bottom: 20px;
	}
</style>