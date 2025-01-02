<template>
  <div>
    <h1>Posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'FacebookPostsUsingAxios',
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    this.getFacebookPosts();
  },
  methods: {
    async getFacebookPosts() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        this.posts = response.data;
      } catch (error) {
        console.error('Error getting facebook posts:', error);
      }
    },
  },
};
</script>