<template>
    <div>
      <h1>Posts</h1>
      <ul>
        <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
      </ul>
    </div>
</template>
  
<script>
  export default {
    name: 'PostList',
    data() {
      return {
        posts: [],
      };
    },
    mounted() {
      this.fetchPosts();
    },
    methods: {
      async fetchPosts() {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/posts');
          const data = await response.json();
          this.posts = data;
        } catch (error) {
          console.error('Error fetching posts:', error);
        }
      },
    },
  };
</script>
  