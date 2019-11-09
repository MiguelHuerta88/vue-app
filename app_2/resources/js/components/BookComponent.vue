<template>
    <router-link :to="{name: 'book', params: {book: book.id}}">
        <div class="container">
            <div class="book-img">
                <!-- we dont use :src since we dont need to bind it to anything -->
                <img v-if="book.images" :src="book.images.url">
            </div>
            <div class="book-content">
                <div class="info">
                    <p> Title: {{ book.title }}
                    <p>Author: <i class="fa fa-user"></i> {{ book.author }}
                    <p> Published On: {{ book.published_on }} </p>
                    <div> {{ book.description }}</div>
                </div>
            </div>
        </div>
    </router-link>
</template>
<script>
    export default {
        props: ['book'],

    }
</script>
<style scoped>
    a {
        text-decoration: none;
        cursor: pointer;
        color: #000;
    }
    .container {
        display: flex;
    }
    .book-content {
        width: 80%;
    }
    .book-img {
        width: 120px;
        height: 120px;
        margin-right: 10px;
    }
    .book-img i {
        width: 100%;
        height: 100%;
        font-size: 100px;
    }
    .book-img img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
</style>
