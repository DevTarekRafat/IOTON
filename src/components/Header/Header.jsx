import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../icons/logo.svg";
import "./Header.css";

const Header = () => {
  const [showMobHeader, setShowMobHeader] = useState(false);
  const [animClass, setAnimClass] = useState("");

  const toggleHeaderHandler = () => {
    if (showMobHeader) {
      hideMobHeaderHandler();
    } else {
      showMobHeaderHandler();
    }
  };

  const hideMobHeaderHandler = () => {
    setAnimClass("nav-hide-anim");
    setTimeout(() => {
      setShowMobHeader(!showMobHeader);
      setAnimClass("");
    }, 450);
  };

  const showMobHeaderHandler = () => {
    setAnimClass("nav-show-anim");
    setShowMobHeader(!showMobHeader);
  };

  return (
    <>
      <nav>
        <div className="container">
          <div className="f-between">
            <div id="logo">
              <Logo />
            </div>

            <div className="links-container">
              <ul className="links">
                <li className="link-item">
                  <Link className="link" to="/">
                    Home
                  </Link>
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
                      <Link className="dropdown-item" to="/about">
                        About us
                      </Link>
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
                  <Link className="link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
              <div className="group-btn fg-between">
                <button className="support-btn">Support</button>
                <button className="login-btn">login</button>
              </div>
            </div>

            <div className="burger" onClick={toggleHeaderHandler}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </nav>

      {showMobHeader && (
        <div className={`mob-header ${animClass}`}>
          {/* <div className="close" onClick={toggleHeaderHandler}>
            <i className="fas fa-times"></i>
          </div> */}
          <div className="mobile-nav-links">
            <ul>
              <li>
                <Link className="nav-link text-center" to="/">
                  Home
                </Link>
                {/* <div className="line"></div> */}
              </li>

              <li>
                <Link className="nav-link text-center" to="/">
                  Solutions
                </Link>
                {/* <div className="line"></div> */}
              </li>
              <li>
                <Link className="nav-link text-center" to="/">
                  About
                </Link>
                {/* <div className="line"></div> */}
              </li>
              <li>
                <Link className="nav-link text-center" to="/">
                  Blog
                </Link>
                {/* <div className="line"></div> */}
              </li>
              <li>
                <Link className="nav-link text-center" to="/">
                  Contact
                </Link>
                {/* <div className="line"></div> */}
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
