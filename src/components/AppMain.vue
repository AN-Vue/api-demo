<template>
  <div>
    <h3>API Demo</h3>
    <Users/>
    <FacebookPostsUsingAxios/>
    <FacebookPostsUsingFetch/>
  </div>
</template>

<script>
  import Users from './Users.vue'
  import FacebookPostsUsingAxios from './Facebook/FacebookPostsUsingAxios.vue'
  import FacebookPostsUsingFetch from './Facebook/FacebookPostsUsingFetch.vue';

  export default {
    name: 'AppMain',
    components: {
      Users,
      FacebookPostsUsingAxios,
      FacebookPostsUsingFetch
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
