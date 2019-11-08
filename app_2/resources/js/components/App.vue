<template>
    <div>
        <router-link :to="{name: 'home'}">
            <!-- header logo or something -->
            <div class="header" v-if="logoLink">
                <!-- left blank for now -->
                <img :src="logoLink" >
                <div>Online Bookstore</div>
            </div>
        </router-link>

        <router-view></router-view>
    </div>
</template>
<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                logoLink: null
            }
        },
        mounted() {
            /* once we begin using VUEX this will be moved. to keep all api calls centralized */
            axios.get('/vue-app/app_2/public/api/logo').then(response => {
                this.logoLink = response.data;
            });
        },
    }
</script>
<style>
    a {
        text-decoration: none;
    }
    .header {
        width: 100%;
        border: 1px solid #ccc;
        background: #ccc;
        height: 100px;
        display: flex;
        font-family: sans-serif;
    }
    .header img {
        width: 8%;
        height: 100px;
        object-fit: contain;
        text-align: left;
    }
    .header div {
        width: 91%;
        margin: 20px;
        font-size: 50px;
        font-weight: 600;
    }
</style>
