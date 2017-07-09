import React, { PureComponent } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Contact.css";

export class Contact extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <div className="contact-section">
          <div className="intro">
            <h2>Rules of Engagement</h2>
            <p>
              We’ve created this website in the hope that it will answer most,
              if not all of your questons. Having said that, we realise and
              understand that there will be questions from time-to-time. Should
              you have a question regarding the wedding, we politely ask that
              you to contact one of the respective person(s) listed below based
              on their area of responsibility.
            </p>
            <p>
              Are we deflecting? <span>Yes</span>. But it’s not because we don’t
              love you, it’s because we couldn’t possibly do all of this without
              the help of two very important people, Isabelle and Rafael. We owe
              them a serious debt of gratitude for being on call to help you,
              whilst giving us the flexibility to focus on the administrative
              aspects of the wedding.
            </p>
          </div>
          <div className="contacts">
            <div className="contact-person">
              <img src={isabelle} alt="contact for Swiss guests" />
              <p><span>Isabelle Schorer</span></p>
              <p><span>Email:</span>isabelleschorer@hotmail.com</p>
              <p>Can help with:</p>
              <ul>
                <li><p>Questions from guests on the{" bride's "}side</p></li>
                <li><p>Questions from guests regarding Bern</p></li>
              </ul>
            </div>
            <div className="contact-person">
              <img src={rafael} alt="contact for Canadian guests" />
              <p><span>Rafael Reis</span></p>
              <p><span>Email:</span>rafael@changedirection.io</p>
              <p>Can help with:</p>
              <ul>
                <li><p>Questions from guests on the{" groom's "}side</p></li>
                <li><p>Masterclasses on making sandwiches</p></li>
              </ul>
            </div>
          </div>
          <div className="newly-weds">
            <div className="contact-person">
              <img src={couple} alt="contact for RSVP enquiries" />
              <p><span>Bride/Groom</span></p>
              <p><span>Email:</span>julesandmatt2018@gmail.com</p>
              <p><span>Only for:</span></p>
              <ul>
                <li><p>RSVP enquiries/changes</p></li>
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
