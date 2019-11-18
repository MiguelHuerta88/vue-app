<template>
	<div class="container">
		<h3>We are activating your user</h3>

		<ul class="steps">
			<li>
				<span class="dot active" id="step1"></span><span class="text">Searching for user record with token: <div class="token">{{ token }}</div></span>
			</li>
			<li>
				<span class="dot" id="step2"></span><span class="text">Activating user</span>
			</li>
			<li>
				<span class="dot" id="step3"></span><span class="text">Redirecting to homepage</span>
			</li>
		</ul>
	</div>
</template>
<script>
	const MAX_STEPS = 3;
	export default {
		data() {
			return {
				step: 1,
				next: 2,
				token: this.$route.params.token // pull this from router
			}
		},
		created() {
			// first fire the request to find the user record
			this.$store.dispatch('find', this.token).then(response => {
				this.process(this.step, this.next);
			}).catch(response => {
				alert('We were not able to locate your user record. Redirecting in 5 sec');
				setTimeout(() => {
					this.$router.push('/');
				}, 5000);
			});
		},
		methods: {
			process(current, next) {
				// make sure we dont go past the steps
				if (current <= MAX_STEPS) {
					// we need to first mark current step as complete
					let currentStep = "step" + current;
					let nextStep = "step" + next;
					let currentActive = document.getElementById(currentStep);
					currentActive.classList.add('complete');
					currentActive.classList.remove('active');

					// we need to mark the next elem as acive
					let nextActive = document.getElementById(nextStep);
					nextActive.classList.add('active');

					// update the step and next
					this.step = next ;
					this.next = (next + 1);

					// trigger next step
					this.processStep(this.step);
				}
			},
			processStep(step) {
				switch(step) {
					case 2:
						return this.processStep2();
					break;
					case 3:
						return this.processStep3();
					break;
				}
			},
			processStep2() {
				console.log('inside step 2');
				// step 2 requires removing the email_token from user record.
				this.$store.dispatch('activateUser').then(response => {
					this.process(this.step, this.next);
				});

			},
			processStep3() {
				setTimeout(() => {
					this.$router.push('/');
				}, 1000);
			}
		}
	}
</script>
<style scoped>
	.token {
		overflow-wrap: break-word;
	}
	.active{
		animation-name: color_change;
		animation-duration: 0.5s;
		animation-iteration-count: infinite;
		animation-direction: alternate;
	}
	.dot {
		height: 25px;
	    width: 25px;
	    background-color: #bbb;
	    border-radius: 50%;
	    display: inline-block;
	    margin-right: 10px;
	}
	.complete {
		background-color: red;
	}
	.container {
		margin-bottom: 50px;
	}
	.steps {
		list-style-type: none;
		margin: 0;
		padding: 0
	}
		.steps li {
			margin: 10px 15px;

		}
		.steps li .text {
			vertical-align: super;
		}

	@-webkit-keyframes color_change {
		from { background-color: #bbb; }
		to { background-color: red; }
	}
	@-moz-keyframes color_change {
		from { background-color: #bbb; }
		to { background-color: red; }
	}
	@-ms-keyframes color_change {
		from { background-color: #bbb; }
		to { background-color: red; }
	}
	@-o-keyframes color_change {
		from { background-color: #bbb; }
		to { background-color: red; }
	}
	@keyframes color_change {
		from { background-color: #bbb; }
		to { background-color: red; }
	}
</style>