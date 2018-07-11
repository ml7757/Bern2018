import React, { PureComponent } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import isabelle from "../assets/imgs/isabelle.jpg";
import matt from "../assets/imgs/matt-bw.jpg";
import maple from "../assets/imgs/maple.png";
import cross from "../assets/imgs/cross.gif";
import couple from "../assets/imgs/story.jpg";
import "./Contact.css";

export class Contact extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <div className="contact-section">
          <div className="intro">
            <h2 className="title-contact">Rules of Engagement</h2>
            <p className="subtitle-contact">
              Reach out to us...we dare you.
            </p>
          </div>
          <div className="contacts">
            <div className="contact-person">
              <img src={isabelle} alt="contact for Swiss guests" className="contact-person-img" data-pin-nopin="true"/>
              <img src={cross} alt="swiss cross" className="background-cross" data-pin-nopin="true"/>
              <p><span>Isabelle Schorer</span></p>
              <p><span>Mobile: </span>+41 76 448 62 74</p>
              <p><span>Can help with:</span></p>
              <ul>
                <li><p>Answering questions that you want to ask the bride</p></li>
                <li><p>Deflecting you away from the bride in times of stress</p></li>
                <li><p>Tips on where to go in Bern</p></li>
                <li><p>Football banter</p></li>
              </ul>
            </div>
            <div className="contact-person">
              <img src={matt} alt="contact for Canadian guests" className="contact-person-img" data-pin-nopin="true"/>
              <img src={maple} alt="canadian maple leaf" className="background-maple" data-pin-nopin="true"/>
              <p><span>Matthew LaPorte</span></p>
              <p><span>Mobile: </span>+31 6 38 70 00 27</p>
              <p><span>Can help with:</span></p>
              <ul>
                <li><p>Providing generic answers to your important questions</p></li>
                <li><p>Deflecting you away from the bride in times of stress</p></li>
                <li><p>Making questionable choices</p></li>
              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contact;
