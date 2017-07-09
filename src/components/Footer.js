import React, { PureComponent } from "react";
import shield from "../assets/imgs/shield.png";
import mail from "../assets/imgs/mail.png";
import heart from "../assets/imgs/heart.png";
import codaisseur from "../assets/imgs/codaisseur.png";
import "./Footer.css";

export class Footer extends PureComponent {
  render() {
    return (
      <div className="footer">
        <div className="couple">
          <p className="newlyweds">Julia Wieser</p>
          <img className="footer-shield" src={shield} />
          <p className="newlyweds">Matthew LaPorte</p>
        </div>
        <div className="email-contact">
          <img className="footer-mail" src={mail} />
          <a className="contact-link" href="/contact">
            Contact Us
          </a>
        </div>
        <div>
          <p className="footer-made">Made with<span>
          <img className="footer-heart" src={heart} />
          </span>by graduates from
          <a href="https://www.codaisseur.com/">
            <img className="footer-codaisseur" src={codaisseur} />
          </a></p>
        </div>
      </div>
    );
  }
}

export default Footer;
