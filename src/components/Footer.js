import React, { PureComponent } from "react";
import shield from "../assets/imgs/shield.png";
import mail from "../assets/imgs/mail.png";
import "./Footer.css";

export class Footer extends PureComponent {
  render() {
    return (
      <div className="footer">
        <div>
          <p className="newlyweds">Julia Wieser</p>
          <img className="footer-shield"src={shield} />
          <p className="newlyweds">Matthew LaPorte</p>
        </div>
          <img className="footer-mail"src={mail} />
          <a href="#" />
        <div>
        </div>
        <div>
        </div>
      </div>
    );
  }
}

export default Footer;
