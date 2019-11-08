<template>
    <router-link :to="{name: 'book', params: {book: book.id}}">
        <div class="container">
            <div class="book-img">
                <!--<i class="fa fa-book"></i>-->
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
        background: lightblue;
        width: 120px;
        height: 120px;
        margin-right: 10px;
    }
    .book-img i {
        width: 100%;
        height: 100%;
        font-size: 100px;
    }
</style>
