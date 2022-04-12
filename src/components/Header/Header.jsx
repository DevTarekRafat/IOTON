import React from "react";
import { ReactComponent as Logo } from "../../icons/logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <nav>
      <div className="container">
        <div className="f-between">
          <div id="logo">
            <Logo />
          </div>
          <div className="links-container">
            <ul className="links">
              <li className="link-item">
                <a className="link" href="">
                  Home
                </a>
              </li>

              <li className="link-item">
                <a
                  className="link dropdown-toggle"
                  href="#"
                  id="navbarScrollingDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Solutions
                </a>

                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarScrollingDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>

              <li className="link-item">
                <a
                  className="link dropdown-toggle"
                  href="#"
                  id="navbarScrollingDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About
                </a>

                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarScrollingDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>

              <li className="link-item">
                <a className="link" href="">
                  Blog
                </a>
              </li>

              <li className="link-item">
                <a className="link" href="">
                  Contact
                </a>
              </li>
            </ul>
            <div className="group-btn fg-between">
              <button className="support-btn">Support</button>
              <button className="login-btn">login</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
