<template>
    <router-link :to="{name: 'book', params: {book: book.id}}" class="item">
        <div class="container">
            <div class="img"><img v-if="book.images" :src="book.images.url"></div>
            <div class="content">
                <div class="title"> {{ book.title }} </div>
                <div class="author"> Author: {{ book.author }} </div>
                <div class="published"> Published On: {{ book.published_on }} </div>
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
        color: #000;
    }
    .container {
        font-family: sans-serif;
        height: 200px;
        width: 100%;
        display: flex;
    }
    .img img {
        height: 200px;
        width: 200px;
        object-fit: cover;
    }
    .content {
        width: 350px;
        margin: 10px 10px;
        font-weight: 800;
    }
    .title {
        font-style: italic;
        text-transform: uppercase;
        font-size: 18px;
        margin-bottom: 40px;
    }
    .author, .published {
        font-size: 10px;
    }

</style>
