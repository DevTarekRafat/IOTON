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
      <nav className="sticky-top">
        <div className="container">
          <div className="f-between">
            <Link to="/" id="logo">
              <Logo />
            </Link>

            <div className="links-container">
              <ul className="links">
                <li className="link-item">
                  <Link className="link" to="/">
                    Home
                  </Link>
                </li>

                <li className="link-item">
                  <Link
                    className="link dropdown-toggle"
                    to="/"
                    id="navbarScrollingDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Solutions
                  </Link>

                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarScrollingDropdown"
                  >
                    <div id="solution-dropdown">
                      <li className="solution-li">
                        <Link className="dropdown-item" to="/thermoton">
                          Thermoton
                        </Link>
                        <span>
                          Management of cantering industry revolution begins
                          with us.
                        </span>
                      </li>
                      <li className="solution-li">
                        <Link className="dropdown-item" to="/anemoton">
                          Anemoton
                        </Link>
                        <span>
                          Management of cantering industry revolution begins
                          with us.
                        </span>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                    </div>
                  </ul>
                </li>

                <li className="link-item">
                  <Link
                    className="link"
                    to="/about">
                    About
                  </Link>

                </li>

                <li className="link-item">
                  <Link className="link" to="/blogs">
                    Blog
                  </Link>
                </li>

                <li className="link-item">
                  <Link className="link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
              <div className="group-btn fg-between">
                {/* <button className="support-btn">Support</button>
                <button className="login-btn">login</button> */}
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
