// src/container/Home.js

import React, { PureComponent } from "react";
import MapContainer from "./MapContainer";
import Header from "../components/Header";
import Story from "../components/Story";
import CountDown from "../components/CountDown";
import WhenWhere from "../components/WhenWhere";
import RSVP from "../guests/RSVP";
import PlanYourTrip from "../components/PlanYourTrip";
import Gifts from "../components/Gifts";
import Footer from "../components/Footer";

export class Home extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <Story />
        <CountDown />
        <WhenWhere />
        <RSVP />
        <PlanYourTrip />
        <Gifts />
        <MapContainer />
        <Footer />
      </div>
    );
  }
}

export default Home;
