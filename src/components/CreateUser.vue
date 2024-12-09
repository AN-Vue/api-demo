<template>
    <div class="create-user">
        <h3>Create New User (Post API Demo)</h3>
        <label for="userName">Name</label>
        <input type="text" name="name" v-model="userName" placeholder="username"> <br>
        <label for="job">Job</label>
        <input type="text" name="job" v-model="userJob" placeholder="job"> <br><br>
        <button @click="createUser">Submit</button>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'CreateUser',
        data() {
            return {
                userName: '',
                userJob: ''
            }
        },
        methods: {
            async createUser() {
                console.log('userName: '+ this.userName + '\nuserJob: ' + this.userJob)
                await axios.post('https://reqres.in/api/users', {
                    email: this.userName,
                    job: this.userJob
                }).then((result) => {
                    console.log("result", result.data);
                    alert("User successfully created!")
                },
                (err) => {
                    console.log("opps, there was an error", err)
                });
                console.log("later part")
            }
        }
    }
</script>

<style scoped>
    .create-user {
        background-color: beige;
        border: 1px dotted gainsboro;
    }
</style>