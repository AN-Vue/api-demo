<template>
  <div>
    <h3>API Demo</h3>
    <Users/>
  </div>
</template>

<script>
  import Users from './Users.vue'

  export default {
    name: 'AppMain',
    components: {
      Users
    }
  }
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
