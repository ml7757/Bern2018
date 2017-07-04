// src/container/Home.js

import React, { PureComponent } from 'react'
import Banner from '../components/Banner'
// import MapContainer from './MapContainer'
import RSVP from '../guests/RSVP'

export class Home extends PureComponent {
  render() {
    return (
      <div>
      <Banner />
        {/* <MapContainer /> */}
        <RSVP />
      </div>
    )
  }
}

export default Home
