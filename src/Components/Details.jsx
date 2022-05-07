import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Container, Card } from "react-bootstrap";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css";
import { PostAPI } from "../API/PostsAPI";
import { FaTrashAlt, FaArrowLeft } from "react-icons/fa";

export default function Details() {
  let { id } = useParams();
  let [post, setPost] = useState({});
  let navigate = useNavigate();

  useEffect(() => {
    getPost(id);
  }, [id]);

  let getPost = async (id) => {
    try {
      let response = await PostAPI.getById(id);
      setPost(response.data);
      // setPost(response.data[0]);
    } catch (err) {
      console.log(err);
    }
  };

  let goToHome = () => {
    navigate("/home");
  };

  let deletePost = async (id) => {
    confirmAlert({
      title: "Warning",
      message: "Are you sure to delete this post?",
      buttons: [
        {
          label: "Yes",
          onClick: async (id) => {
            await PostAPI.remove(id);
            navigate("/home");
          },
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  };

  return (
    <>
      <Card
        className="alert m-auto my-4"
        style={{ backgroundColor: "#9fcdfc96", color: "#001021", width: "20%" }}
      >
        <img
          src="https://cutewallpaper.org/24/profile-png/profile-male-png-png-all.png"
          className="card-img-top"
          alt="..."
        />
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.body}</Card.Text>
          <Container className="d-flex justify-content-end">
            <Button variant="danger" className="mx-1" onClick={deletePost}>
              <FaTrashAlt /> Delete
            </Button>
            <Button variant="warning" className="mx-1" onClick={goToHome}>
              <FaArrowLeft /> Back Home
            </Button>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
}
