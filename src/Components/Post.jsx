import React from "react";
import { Card, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaExpandAlt } from "react-icons/fa";

export default function Post(props) {
  let { postData: post } = props;
  let { id, title, body } = post;
  let navigate = useNavigate();

  let goToPost = () => {
    console.log("post: " + id);
    navigate(`/home/details/${id}`);
  };
  return (
    <>
      <Card
        className="alert"
        style={{ backgroundColor: "#9fcdfc96", color: "#001021", width: "23%" }}
      >
        <img
          src="https://cutewallpaper.org/24/profile-png/profile-male-png-png-all.png"
          className="card-img-top"
          alt="..."
        />
        <Card.Body className="d-flex flex-column justify-content-between text-center">
          <Card.Title>{title}</Card.Title>
          {/* <Card.Text>{body}</Card.Text> */}
          <Container className="d-flex justify-content-center">
            <Button variant="success" className="mx-1" onClick={goToPost}>
              <FaExpandAlt className="mx-1" /> View Details
            </Button>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
}
