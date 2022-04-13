import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              atque ea quis molestias. Fugiat pariatur maxime quis culpa
              corporis vitae repudiandae aliquam voluptatem veniam, est atque
              cumque eum delectus sint!
            </p>
          </div>

          <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Company</h5>

            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="footer-link">
                  About Us
                </a>
              </li>
              <li>
                <a href="#!" className="footer-link">
                  Services
                </a>
              </li>
              <li>
                <a href="#!" className="footer-link">
                  Our Pricing
                </a>
              </li>
              <li>
                <a href="#!" className="footer-link">
                  Latest News
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-0">Support</h5>

            <ul className="list-unstyled">
              <li>
                <a href="#!" className="footer-link">
                  FAQ's
                </a>
              </li>
              <li>
                <a href="#!" className="footer-link">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#!" className="footer-link">
                  Terms & Condition
                </a>
              </li>
              <li>
                <a href="#!" className="footer-link">
                  Team
                </a>
              </li>
              <li>
                <a href="#!" className="footer-link">
                  Team
                </a>
              </li>
              <li>
                <a href="#!" className="footer-link">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-0">Support</h5>

            <ul className="list-unstyled">
              <li>
                <a href="#!" className="footer-link">
                  27 Division St, New York,
                </a>
              </li>
              <li>
                <a href="#!" className="footer-link">
                  NY 10002, USA
                </a>
              </li>
              <li>
                <a href="#!" className="footer-link">
                  Phone:+ (321) 984 754
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center p-3">
        © 2020 Copyright:
        <a className="footer-link">IOTON</a>
      </div>
    </footer>
  );
};
