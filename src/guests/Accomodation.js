import React, { PureComponent } from "react";
import Banner from "../components/Banner";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export class Accomodation extends PureComponent {
  render() {
    return (
      <div>
        <Banner />
        <Navigation />
        <div>
          <h2 className="title">Accomodation</h2>
          <p>
            There is no denying it and given the fact that it will also be hight
            season, it will become very apparent that
            Switzerland is darn expensive. In order to minimise cost as much as
            possible, we have negotiated competitive fixed rates (reflected in
            the table below) for a number of room categories at the
            Hotel Allegro Kursaal Bern. Of course this is only a suggestion and
            not matter what the situation,
            you should always book early to avoid disappointment…but please do
            bare in mind that:
          </p>
          <ul>
            <li>
              <p>Organised transport to and from certain events will operate from the Hotel Allegro</p>
            </li>
            <li>
              <p>The bride and groom will also be staying a the hotel</p>
            </li>
            <li>
              <p>There is a chance that the Gurten Music Festival will be held on the same weekend in
            2018. This means that cheaper accommodation options, such as Airbnb, will be just as or
            even more expensive.</p>
            </li>
          </ul>
        </div>
        <div className="hotel-rooms">
        
        </div>
        <Footer />
      </div>
    );
  }
}

export default Accomodation;
