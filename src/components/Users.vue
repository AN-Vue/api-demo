<template>
    <div>
        <!-- Create user component make post api call -->
        <CreateUser/>

        <br><br>
        <!-- make a get api call and show the data on the ui -->
        <h3>Users Data</h3>
        <!-- <p v-for="item in userList" :key="item.id"> {{ item.id }} ---- {{ item.email }} ---- {{ item.first_name }} {{ item.last_name }}</p> -->
        
        <ul class="user-item" v-for="item in userList" :key="item.id">
            <li> {{ item.id }}</li>
            <li> {{ item.first_name }} {{ item.last_name }} </li>
            <li> {{ item.email }}</li>
            <li> <img :src="item.avatar" alt=""></li>
        </ul>
    </div>
</template>
  
<script>
    import axios from 'axios'
    import CreateUser from './CreateUser.vue'

    export default {
        name: 'Users',
        components: {
            CreateUser
        },
        data() {
            return {
                userList: []
            }
        },
        async mounted() {
            let result = await axios.get('https://reqres.in/api/users?page=1');
            console.warn("result", result.data.data);
            this.userList = result.data.data;
        }
    }
</script>

<style>
    .user-item {
        display: flex;
    }
    .user-item li {
        display: inline-block;
        width: 180px;
        border: 1px solid;
        text-align: center;
        padding: 5px;
    }
    .user-item img {
        width: 50px;
    }
</style>