import axios from 'axios';

const api = axios.create({
  baseURL: 'https://doctortestbackend.herokuapp.com/'
})

export default api;