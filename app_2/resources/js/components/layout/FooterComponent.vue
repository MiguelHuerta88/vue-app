<template>
	<footer class="footer">
		<ul>
			<li class="name"><router-link :to="{name: 'home'}">Mister Bookman</router-link></li>
			<li><router-link :to="{name: 'about'}">About</router-link></li>
			<li><router-link :to="{name: 'contact'}">Contact Us</router-link></li>
		</ul>
		<div class="copyright">
			&copy;{{ year }} Mister Bookman. All Rights Reserved
		</div>
	</footer>
</template>
<script>
	export default {
		computed: {
			year() {
				return new Date().getFullYear();
			}
		}
	}
</script>
<style scoped>
	.footer {
		position: relative;
		background: #566573;
		color: #fff;
		height: 200px;
		font-family: sans-serif;
		font-weight: 600;
	}
	.copyright {
		position: absolute;
		bottom: 10px;
		font-size: 11px;
		margin: 0 10px;
	}

	ul {
		list-style-type: none;
		padding: 50px 0 0 0;
		margin: 0;
	}
		li {
			width: 33%;
			display: inline-block;
			font-size: 18px;
			text-align: center;
		}
		li a {
			color: #fff;
			text-decoration: none;
			text-transform: uppercase;
			cursor: pointer;
		}
		li.name a{
			color: #E82F3A;
		}
</style>