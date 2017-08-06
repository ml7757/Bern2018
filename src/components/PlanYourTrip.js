import React, { PureComponent } from "react";
import accomodation from "../assets/imgs/accomodation.jpg";
import flight from "../assets/imgs/flight.jpg";
import "./PlanYourTrip.css";

export class PlanYourTrip extends PureComponent {
  render() {
    return (
      <div className="plan-your-trip">
        <h2 className="titleplan">Plan Your Trip</h2>
        <div className="block">
          <div className="accomodation">
            <div>
              <img src= {accomodation} className="tripPhoto" data-pin-nopin="true" alt="the hotel" />
            </div>
            <div className="text-info">
              <h5>Accommodation</h5>
              <p>{"We have negotiated rates and have reserved a number of rooms at the Hotel Allegro Kursaal Bern. This hotel was selected based on its central location, standard of rooms and competitive pricing. To find out more, please click on the button below. "}</p>
              <a href="/accomodation" className="learn-more button">Learn more</a>
            </div>
          </div>
          <div className="flights">
            <div>
              <img src= {flight} className="tripPhoto" data-pin-nopin="true" alt="inside of an airport" />
            </div>
            <div className="text-info" id="gifts">
                <h5>Flights</h5>
                <p>If you know that you will be attending, book your flight as
                  soon as possible. It will be high season and deals are few and
                  far between.
                </p>
                <p>It is possible for guests to travel in an out of the following
                  airports (in order of convenience):
                </p>
                <p>Bern-Belp {"("}<span>BRN</span>{")"}</p>
                <p>Zurich {"("}<span>ZRH</span>{")"}</p>
                <p>Basel {"("}<span>BSL</span>{")"}</p>
                <p>Geneva {"("}<span>GVA</span>{")"}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PlanYourTrip;
