// services/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export const fetchPosts = () => API.get('/posts');
export const fetchPostById = (id) => API.get(`/posts/${id}`);