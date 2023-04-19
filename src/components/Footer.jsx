import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";
import "../components/general.css";
import tiktok from "../assets/372102780_TIKTOK_ICON_1080.png";
import inst from "../assets/768px-Instagram_icon.png";
import git from "../assets/25231.png";
import twiter from "../assets/pngtree-twitter-social-media-round-icon-png-image_6315985.png";

const Footer = () => {
  return (
    <div>
      <MDBFooter id="footer" className="bg-dark text-center text-white">
        <MDBContainer className="p-4 pb-0">
          <section className="mb-4">
            <a target="_blank" href="https://github.com/">
              {" "}
              <img className="icons" src={git} alt="git" />
            </a>
            <a target="_blank" href="https://www.instagram.com/">
              <img className="icons" src={inst} alt="tiktok" />
            </a>
            <a target="_blank" href="https://twitter.com/?lang=ru">
              <img className="icons" src={twiter} alt="twiter" />
            </a>
            <a target="_blank" href="https://www.tiktok.com/">
              <img className="icons" src={tiktok} alt="twiter" />
            </a>
          </section>
        </MDBContainer>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </MDBFooter>
    </div>
  );
};

export default Footer;
