import axios from "axios";

let BaseURL = "https://jsonplaceholder.typicode.com";
// let BaseURL = "http://localhost:3001";

let get = () => axios.get(`${BaseURL}/posts`);
let getById = (postID) => axios.get(`${BaseURL}/posts/${postID}`);
let post = (post) => axios.post(`${BaseURL}/posts`, post);
let edit = (post, postID) => axios.put(`${BaseURL}/posts/${postID}`, post);
let remove = (postID) => axios.delete(`${BaseURL}/posts/${postID}`);

export let PostAPI = {
  get,
  getById,
  post,
  edit,
  remove,
};
