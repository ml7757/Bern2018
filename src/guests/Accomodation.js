import React, { PureComponent } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Accomodation.css";

export class Accomodation extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <div className="accomodation-container">
          <h2 className="titleacc">Accomodation</h2>
          <p>
            There is no denying it and given the fact that it will also be hight
            season, it will become very apparent that
            Switzerland is darn expensive. In order to minimise cost as much as
            possible, we have negotiated competitive fixed rates (reflected in
            the table below) for a number of room categories at the <a href="http://www.kursaal-bern.ch/Hotel">Hotel Allegro Kursaal Bern</a>. Of course this is only a suggestion and
            not matter what the situation,
            you should always book early to avoid disappointment…but please do
            bare in mind that:
          </p>
          <ul>
            <li>
              <p>
                Organised transport to and from certain events will operate from
                the Hotel Allegro
              </p>
            </li>
            <li>
              <p>The bride and groom will also be staying a the hotel</p>
            </li>
            <li>
              <p>
                There is a chance that the Gurten Music Festival will be held on
                the same weekend in
                2018. This means that cheaper accommodation options, such as
                Airbnb, will be just as or
                even more expensive.
              </p>
            </li>
          </ul>
        </div>
        <div className="hotel-rooms">
          <div className="table-header">
            <div>
              <p className="table-cell">Room Category</p>
            </div>
            <div>
              <p className="table-cell no-left">
                Discounted rate incl. breakfast
              </p>
            </div>
            <div>
              <p className="table-cell no-left">
                Discounted rate excl. breakfast
              </p>
            </div>
          </div>
          <div className="table-row">
            <div>
              <p className="table-cell"><span className="allegro-room-links"><a href="http://www.kursaal-bern.ch/Hotel/Rooms/Economy-Room">Economy Room</a></span></p>
            </div>
            <div>
              <p className="table-cell no-left">CHF 170 per night</p>
            </div>
            <div>
              <p className="table-cell no-left">CHF 130 per night</p>
            </div>
          </div>
          <div className="table-row dark">
            <div>
              <p className="table-cell"><span className="allegro-room-links"><a href="http://www.kursaal-bern.ch/Hotel/Rooms/Comfort-Double-Room-with-balcony">Comfort Double Room with balcony</a></span></p>
            </div>
            <div>
              <p className="table-cell no-left">CHF 190 per night</p>
            </div>
            <div>
              <p className="table-cell no-left">CHF 150 per night</p>
            </div>
          </div>
          <div className="table-row">
            <div>
              <p className="table-cell"><span className="allegro-room-links"><a href="http://www.kursaal-bern.ch/Hotel/Rooms/Panorama-Double-Room-with-view">Panorama Double Room with view</a></span></p>
            </div>
            <div>
              <p className="table-cell no-left">CHF 220 per night</p>
            </div>
            <div>
              <p className="table-cell no-left">CHF 180 per night</p>
            </div>
          </div>
        </div>
        <div className="accomodation-container">
          <div>
            <p className="tabletext">
              These prices above include free admission to the in-house casino,
              the fitness center and most
              importantly, a Bern Mobility Ticket, covering all travel by public
              transport within Bern during your
              stay. Prices exclude an additional city tax of CHF 5.30 per adult
              per night.
            </p>
          </div>
          <div className="booking-process">
            <h5>Booking Process</h5>
            <p>
              Should you choose to stay at this hotel, it is advisable not to
              wait with your reservation. In order to take advantage of these
              rates, reservations need to be made directly with the hotel
              reservations team via phone or email, <span>NOT</span> via their
              website. This will also guarantee a refundable booking where
              cancellation is possible up until 24 hours prior to your stay.
              When you RSVP “Yes” for the wedding, you will be sent a promotion
              code that needs to be quoted when booking with the hotel.
            </p>
          </div>
          <div className="booking-process">
            <p><span>Email: </span><a href="mailto:reservation@kursaal-bern.ch">reservation@kursaal-bern.ch</a></p>
            <p><span>Phone number:</span> +41 31 339 55 00</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Accomodation;
