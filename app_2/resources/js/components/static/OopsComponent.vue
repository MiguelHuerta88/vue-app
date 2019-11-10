<template>
	<div class="oops">
		<div class="icon">
			<i class="fa fa-exclamation-circle" aria-hidden="true"></i>
		</div>
		<div class="message">
			Oops! Something Went Wrong.
		</div>
		<div class="subtext">
			The page seems to be missing. We are sending the team to take a look.
		</div>
	</div>
</template>
<script >
	
</script>
<style scoped>
	.oops {
		width: 100%;
		height: 400px;
		background:#C0C5CA;
		font-family: sans-serif;
	}
	.icon, .message {
		text-align: center;
    	padding: 30px 0 0 0;
    	font-size: 60px;
	}
	.subtext {
		font-size: 20px;
		text-align: center;
		padding: 30px 0 0 0;
	}
</style>