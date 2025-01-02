<template>
    <div>
      <h1>Posts</h1>
      <ul>
        <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
      </ul>
    </div>
</template>

<script>
    import { fetchPosts } from '../services/api';

    export default {
        name: 'PostList',
        data() {
            return {
            posts: [],
            };
        },
        mounted() {
            this.getPosts();
        },
        methods: {
            async getPosts() {
            try {
                const response = await fetchPosts();
                this.posts = response.data;
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
            },
        },
    };
</script>  