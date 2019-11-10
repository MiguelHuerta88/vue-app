<template>
	<i :class="classes" @click="clicked"></i>
</template>
<script>
	export default {
		props: ['dir'],
		computed: {
			classes(){
				return 'carousel-control fa fa-2x fa-chevron-' + this.dir;
			}
		},
		methods: {
			clicked() {
				// we emit the event to fire it up to the parent. @TODO refactor to use EventBus later
				this.$emit('change-image', this.dir === 'left' ? -1 : 1);
			}
		},
	}
</script>
<style scoped>
	i {
		cursor: pointer;
		z-index: 999;
	}
</style>