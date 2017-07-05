import React, { PureComponent } from "react";
import shield from "../assets/imgs/shield.png";
import "./Footer.css";

export class Footer extends PureComponent {
  render() {
    return (
      <div className="footer">
        <div>
          <p>Julia Wieser</p>
          <img className="footer-shield"src={shield} />
          <p>Matthew LaPorte</p>
        </div>

        <div>
        </div>
        <div>
        </div>
      </div>
    );
  }
}

export default Footer;
