import React from "react";
import {
  FaSearchLocation,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer
        className="text-center text-lg-start text-white"
        style={{ backgroundColor: "#001021" }}
      >
        <div className="container p-4 pb-0">
          <section className="">
            <div className="row">
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Company name
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Products
                </h6>
                <p>
                  <a className="text-white">MDBootstrap</a>
                </p>
                <p>
                  <a className="text-white">MDWordPress</a>
                </p>
                <p>
                  <a className="text-white">BrandFlow</a>
                </p>
                <p>
                  <a className="text-white">Bootstrap Angular</a>
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Useful links
                </h6>
                <p>
                  <a className="text-white">Your Account</a>
                </p>
                <p>
                  <a className="text-white">Become an Affiliate</a>
                </p>
                <p>
                  <a className="text-white">Shipping Rates</a>
                </p>
                <p>
                  <a className="text-white">Help</a>
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Contact
                </h6>
                <p>
                  <FaSearchLocation /> New York, NY 10012, US
                </p>
                <p>
                  <FaEnvelope /> info@gmail.com
                </p>
                <p>
                  <FaPhoneAlt /> + 01 234 567 88
                </p>
                <p>
                  <FaPhoneAlt /> + 01 234 567 89
                </p>
              </div>
            </div>
          </section>

          <section className="p-3 pt-0">
            <div className="row d-flex align-items-center">
              <div className="col-md-7 col-lg-8 text-center text-md-start">
                <div className="p-3">
                  © 2020 Copyright:
                  <a className="text-white" href="https://mdbootstrap.com/">
                    MDBootstrap.com
                  </a>
                </div>
              </div>

              <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                <a
                  className="btn btn-outline-info btn-floating m-1 text-white"
                  role="button"
                >
                  <FaFacebookF />
                </a>

                <a
                  className="btn btn-outline-info btn-floating m-1 text-white"
                  role="button"
                >
                  <FaTwitter />
                </a>

                <a
                  className="btn btn-outline-info btn-floating m-1 text-white"
                  role="button"
                >
                  <FaGoogle />
                </a>

                <a
                  className="btn btn-outline-info btn-floating m-1 text-white"
                  role="button"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </>
  );
}
