// src/container/Home.js

import React, { PureComponent } from 'react'
import Banner from '../components/Banner'
import Navigation from '../components/Navigation'
// import MapContainer from './MapContainer'
import RSVP from '../guests/RSVP'

export class Home extends PureComponent {
  render() {
    return (
      <div>
        <Banner />
        <Navigation />
        {/* <MapContainer /> */}
        <RSVP />
      </div>
    )
  }
}

export default Home
