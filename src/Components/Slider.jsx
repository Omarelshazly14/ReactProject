import React from "react";
import { Carousel } from "react-bootstrap";

export default function Slider() {
  return (
    <>
      {/* <section className="py-xxl-10 pb-0" id="home">
        <div
          className="bg-holder bg-size"
          style={{
            backgroundImage:
              "url(https://technext.github.io/live-doc/v1.0.0/assets/img/gallery/hero-bg.png)",
            backgroundPosition: "top center",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="container">
          <div className="row min-vh-xl-100 min-vh-xxl-25">
            <div className="col-md-5 col-xl-6 col-xxl-7 order-0 order-md-1 text-end">
              <img
                className="pt-7 pt-md-0 w-100"
                src="https://technext.github.io/live-doc/v1.0.0/assets/img/gallery/hero.png"
                alt="hero-header"
              />
            </div>
            <div className="col-md-75 col-xl-6 col-xxl-5 text-md-start text-center py-6">
              <h1 className="fw-light font-base fs-6 fs-xxl-7">
                We're <strong>determined </strong>for
                <br />
                your&nbsp;<strong>better life.</strong>
              </h1>
              <p className="fs-1 mb-5">
                You can get the care you need 24/7 – be it online or in <br />
                person. You will be treated by caring specialist doctors.{" "}
              </p>
              <a
                className="btn btn-lg btn-primary rounded-pill"
                href="#!"
                role="button"
              >
                Make an Appointment
              </a>
            </div>
          </div>
        </div>
      </section> */}
      <Carousel style={{ height: "500px" }}>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://c4.wallpaperflare.com/wallpaper/908/707/699/technology-facebook-wallpaper-preview.jpg"
            alt="First slide"
            style={{ height: "500px" }}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://c4.wallpaperflare.com/wallpaper/230/482/325/facebook-likes-hd-facebook-logo-wallpaper-preview.jpg"
            alt="Second slide"
            style={{ height: "500px" }}
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://c4.wallpaperflare.com/wallpaper/904/174/518/girl-city-light-google-wallpaper-preview.jpg"
            alt="Third slide"
            style={{ height: "500px" }}
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
