<template>
	<div class="container">
		<h2><span class="badge badge-secondary">Register</span></h2>
		<form @submit="submit">
			<input type="hidden" name="_token" :value="csrf_token"/>
			<div class="form-row">
				<div class="form-group col-md-6">
					<label for="first_name">First Name</label>
					<input name="first_name" type="text" class="form-control" placeholder="First Name" :class="{'is-invalid' : fieldErrors.first_name }" v-model="fields.first_name">
					<div v-if="fieldErrors.first_name" class="invalid-feedback">
						{{ fieldErrors.first_name }}
					</div>
				</div>
				<div class="form-group col-md-6">
					<label for="last_name">Last Name</label>
					<input name="last_name" type="text" class="form-control" placeholder="Last Name" :class="{'is-invalid' : fieldErrors.lastName }" v-model="fields.last_name">
					<div v-if="fieldErrors.last_name" class="invalid-feedback">
						{{ fieldErrors.last_name }}
					</div>
				</div>
			</div>
			<div class="form-group">
				<label for="email">Email</label>
				<input name="email" type="email" class="form-control" placeholder="example@example.com" v-model="fields.email" :class="{'is-invalid' : fieldErrors.email }">
				<div v-if="fieldErrors.email" class="invalid-feedback">
						{{ fieldErrors.email }}
				</div>
			</div>
			<div class="form-row">
				<div class="form-group col-md-6">
					<label for="username">Username</label>
					<input name="username" type="text" class="form-control" v-model="fields.username" placeholder="Username" :class="{'is-invalid' : fieldErrors.username }" >
					<div v-if="fieldErrors.username" class="invalid-feedback">
						{{ fieldErrors.username }}
					</div>
				</div>
				<div class="form-group col-md-6">
					<label for="password">Password</label>
					<input type="password" class="form-control" name="password" v-model="fields.password" :class="{'is-invalid' : fieldErrors.password }" placeholder="Password">
					<div v-if="fieldErrors.password" class="invalid-feedback">
						{{ fieldErrors.password }}
					</div>
				</div>
			</div>
			<div class="form-group">
				<label for="address">Address</label>
				<input type="text" name="address" class="form-control" placeholder="123 Apple St." :class="{'is-invalid' : fieldErrors.address }" v-model="fields.address">
				<div v-if="fieldErrors.address" class="invalid-feedback">
						{{ fieldErrors.address }}
				</div>
			</div>
			<div class="form-row">
				<div class="form-group col-md-4">
					<label for="city">City</label>
					<input type="text" class="form-control" name="city" :class="{'is-invalid' : fieldErrors.city }" placeholder="Los Angeles" v-model="fields.city">
					<div v-if="fieldErrors.city" class="invalid-feedback">
						{{ fieldErrors.city }}
					</div>
				</div>
				<div class="form-group col-md-4">
					<label for="state">State</label>
					<!--<input type="text" class="form-control" name="state" required placeholder="CA" v-model="address" maxlength="2">-->
					<select class="form-control" name="state" :class="{'is-invalid' : fieldErrors.state }" v-model="fields.state">
						<option v-for="s in states" :value="s.abbreviation">{{ s.name }}</option>
					</select>
					<div v-if="fieldErrors.state" class="invalid-feedback">
						{{ fieldErrors.state }}
					</div>
				</div>
				<div class="form-group col-md-4">
					<label for="zipcode">Zipcode</label>
					<input type="text" class="form-control" name="zipcode" :class="{'is-invalid' : fieldErrors.zipcode }" placeholder="90023" v-model="fields.zipcode" maxlength="7">
					<div v-if="fieldErrors.zipcode" class="invalid-feedback">
						{{ fieldErrors.zipcode }}
					</div>
				</div>
			</div>

			<button type="submit" class="btn btn-primary" :disabled="disableBtn">Submit</button>
		</form>
	</div>
</template>
<script>
	import { STATES_LIST } from "../../config/states.js"
	export default {
		data() {
			return {
				csrf_token: window.document.head.querySelector('meta[name="csrf-token"]').content,
				fields: {
					first_name: null,
					last_name: null,
					email: null,
					username: null,
					password: null,
					address: null,
					city: null,
					state: null,
					zipcode: null
				},
				fieldErrors: {
					first_name: undefined,
					last_name: undefined,
					email: undefined,
					username: undefined,
					password: undefined,
					address: undefined,
					city: undefined,
					state: undefined,
					zipcode: undefined
				},
				states: STATES_LIST,
				disableBtn: false
			}
		},
		methods: {
			submit(evt) {
				this.disableBtn = true;
				evt.preventDefault();
				this.fieldErrors = this.validate(this.fields);

				// next check for errors
				if (Object.keys(this.fieldErrors).length) {
					// turn the button on again
					this.disableBtn = false;
					return;
				}

				// otherwise dispatch the call to vuex
				this.$store.dispatch('register', this.fields).then(response => {
					// at this point everything should be successful
					this.$router.push('/thank-you');
				}).catch(error => {
					this.processErrors(error.errors);
					this.disableBtn = false;
				});

			},
			processErrors(errors) {
				Object.keys(errors).forEach(item => {
					this.fieldErrors[item] = errors[item].pop();
				});
			},
			validate(fields) {
				/* validation should really be better. Unless the response from API will contain the array of errors from backend */
				const errors = {};

				// begin checking all the fields
				if (!fields.first_name) errors.first_name = "First Name Required!";
				if (!fields.last_name) errors.last_name = "Last Name Required!";
				if (!fields.email) errors.email = "Email Required!";
				if (!fields.username) errors.username = "Username Required!";
				if (!fields.password) errors.password = "Password Required!";
				if (!fields.address) errors.address = "Address Required!";
				if (!fields.city) errors.city = "City Required!";
				if (!fields.state) errors.state = "State Required!";
				if (!fields.zipcode) errors.zipcode = "Zipcode Required!";

				return errors;
			}
		}
	}
	
</script>
<style scoped>
	.container {
		margin-bottom: 20px;
	}
</style>