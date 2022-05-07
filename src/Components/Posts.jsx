import React, { useEffect, useState } from "react";
import Post from "./Post";
import { PostAPI } from "../API/PostsAPI";
import AddPost from "./AddPost";
import { FaPlus } from "react-icons/fa";

export default function Posts() {
  let [posts, setPosts] = useState([]);
  let [wantNewPost, setWantNewPost] = useState(false);

  useEffect(() => {
    getAllPosts();
  }, []);

  let getAllPosts = async () => {
    try {
      let response = await PostAPI.get();
      setPosts(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  let showForm = () => {
    setWantNewPost(!wantNewPost);
  };

  return (
    <div className="my-5">
      <h1 className="text-center mb-3">
        Explore Your Timeline
        <button className="btn btn-outline-primary mx-3" onClick={showForm}>
          <FaPlus /> New Post
        </button>
      </h1>
      <div className="d-flex justify-content-center mb-5"></div>
      {wantNewPost ? <AddPost></AddPost> : null}
      <div
        className="d-flex flex-wrap justify-content-evenly m-auto p-3"
        style={{ width: "90%" }}
      >
        {posts &&
          posts.map((post, index) => {
            return <Post postData={post} key={index}></Post>;
          })}
      </div>
    </div>
  );
}
