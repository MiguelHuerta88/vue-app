<template>
	<div class="carousel">
	    <!-- controls components here -->
	    <!-- we use :book when its a dynamic binding, this case were not doing dynamic binding for dir="left" -->
	    <CarouselControlsComponent dir="left" @change-image="change" :style="leftArrowStyle"></CarouselControlsComponent>
	    <CarouselControlsComponent :style="rightArrowStyle" dir="right" @change-image="change"></CarouselControlsComponent>
	    <!-- end of control components -->
	    <div class="wrapper">
	        <div class="carousel-items" :style="style">
	            <BookComponent v-for="book in books" :key="book.id" :book="book"></BookComponent>
	        </div>
	    </div>
	</div>
</template>
<script>
	import CarouselControlsComponent from './CarouselControlsComponent';
	import BookComponent from '../book/BookComponent';

	const sliderWidth = 560;
    const rowSize = 2;

	export default {
		data() {
			return {
				offset: 0
			}
		},
		methods: {
            change(val) {
                // right will return 1 left -1
                let newVal = this.offset + parseInt(val);
                if (newVal >= 0 && newVal <= this.books.length - rowSize) {
                    this.offset = newVal;
                }
            }
        },
        computed: {
             leftArrowStyle() {
                return {visibility: (this.offset > 0 ? 'visible' : 'hidden')}
            },
            rightArrowStyle() {
                return {visibility: (this.offset < (this.books.length - rowSize) ? 'visible' : 'hidden')}
            },
            style() {
                return {transform: `translateX(${this.offset * -sliderWidth}px)`}
            }

        },
		components: {
			CarouselControlsComponent,
			BookComponent
		},
		props: ['books']
	}
</script>
<style scoped>
	.wrapper {
        overflow: hidden;
    }
	.carousel {
        position: relative;
    }
    .carousel-items {
        display: flex;
        flex-direction: row;
        width: 95%;
        margin: 0 auto;
        transition: transform 0.5s;
    }
    .item {
        border: 2px solid lightcoral;
        display: flex;
        margin-bottom: 30px;
        border-radius: 3px;
        -moz-border-radius: 3px;
        -webkit-border-radius: 3px;
        box-shadow:5px 10px #888888;
        width: 48%;
        margin-right: 2%;
    }
    .carousel-control {
        position: absolute;
        color: #006ba7;
        display: flex;
    }
        .carousel-control.fa-chevron-left {
            left: -10px;
            top: 36%;
        }
        .carousel-control.fa-chevron-right {
            right: -10px;
            top: 36%;
        }
</style>