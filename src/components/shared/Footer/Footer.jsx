import React from "react";
import FbIcon from "../../../assets/img/facebook.svg";
import InstaIcon from "../../../assets/img/instagram.svg";
import YoutubeIcon from "../../../assets/img/youtube.svg";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-signature">
        <p>Made with 😥 by Sami</p>
      </div>

      <div className="footer-icons">
        <a href="https://www.facebook.com/laneuronera/">
          <img
            src={FbIcon}
            alt="Facebook de la neuronera"
            className="footer-icon"
          />
        </a>
        <a href="https://www.instagram.com/laneuronera/">
          <img
            src={InstaIcon}
            alt="Instagram de la neuronera"
            className="footer-icon"
          />
        </a>
        <a href="https://www.instagram.com/laneuronera/">
          <img
            src={YoutubeIcon}
            alt="Youtube de la neuronera"
            className="footer-icon"
          />
        </a>
      </div>
    </div>
  );
}
