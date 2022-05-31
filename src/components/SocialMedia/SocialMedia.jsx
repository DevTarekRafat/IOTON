import React from "react";
import { ReactComponent as Linkedin } from "../../icons/Linkedin.svg";
import { ReactComponent as Facebook } from "../../icons/Facebook.svg";
import { ReactComponent as Twitter } from "../../icons/Twitter.svg";
import { ReactComponent as Instagram } from "../../icons/instagram.svg";

import "./SocialMedia.css";

const SocialMedia = () => {
  return (
    <div className="fg-between">
      <a className="social-media-container" href="https://instagram.com/ioton.io">
        <Instagram />
      </a>
      <a className="social-media-container" href="https://www.facebook.com/ioton.io.uk/">
        <Facebook />
      </a>
      <a className="social-media-container" href="https://twitter.com/ioton_io">
        <Twitter />
      </a>
      <a className="social-media-container" href="https://www.linkedin.com/company/iotonio/">
        <Linkedin />
      </a>
    </div>
  );
};

export default SocialMedia;
