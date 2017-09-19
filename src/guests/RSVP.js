import React, { PureComponent } from 'react'
import './RSVP.css'


class RSVP extends PureComponent {
  render() {
    return (
      <div className="rsvp-section" id="trip-planning">
        <h2 className="rsvp-title">RSVP</h2>
        <div className="rsvp-text">
          <p>Joining us in Switzerland? Wish you could but can't make it?</p>
          <p>In either case, please let us know via the RSVP form.</p>
          <p className="submit-by">*RSVP submissions are requested no later than 31 January 2018</p>
          <div className="rsvp-cta">
            <a href="https://julesandmatt2018-rsvp.herokuapp.com/" className="rsvp-button">RSVP Here</a>
          </div>
        </div>
      </div>
    );
  }
}

export default RSVP;
