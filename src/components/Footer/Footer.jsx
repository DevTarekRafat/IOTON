import React from "react";
import "./Footer.css";
import { ReactComponent as Logo } from "../../icons/logo.svg";
import { ReactComponent as Facebook } from "../../icons/Facebook.svg";
import { ReactComponent as Twitter } from "../../icons/Twitter.svg";
import { ReactComponent as Linkedin } from "../../icons/Linkedin.svg";
import { ReactComponent as Instagram } from "../../icons/instagram.svg";
import { ReactComponent as Location } from "../../icons/location.svg";
import { ReactComponent as Email } from "../../icons/email.svg";

export const Footer = () => {
  return (
    <footer className="text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-5 col-md-12 mb-4 mb-md-0">
            <div id="logo">
              <Logo />
            </div>
            <br />
            <p>
              We create highly-sophisticates software integrated systems through
              customized IOT devices, process datas with advanced algorithms and
              present these datas simplified through modern user friendly
              dashboard’s.
            </p>
          </div>

          <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Company</h5>
            <br />

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
            <br />

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

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-0">Address</h5>
            <br />

            <ul className="list-unstyled">
              <li className="fg-between">
                <Location />
                <a href="#!" className="footer-link">
                  Kemp House, 160 City Road <br />
                  London, EC1V 2NX
                </a>
              </li>
              <li className="fg-between">
                <Email />
                <a href="#!" className="footer-link">
                  Email: hello@ioton.io
                </a>
              </li>
              <li className="social-media">
                <a href="#">
                  <Facebook />
                </a>
                <a href="#">
                  <Twitter />
                </a>
                <a href="#">
                  <Instagram />
                </a>
                <a href="#">
                  <Linkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center p-3">
        © 2022 Copyright:
        <a className="footer-link">IOTON</a>
      </div>
    </footer>
  );
};
