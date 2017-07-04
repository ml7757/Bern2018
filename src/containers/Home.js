// src/container/Home.js

import React, { PureComponent } from 'react'
import MapContainer from './MapContainer'
import Banner from '../components/Banner'
import RSVP from '../guests/RSVP'

export class Home extends PureComponent {
  render() {
    return (
      <div>
        <Banner />
        <RSVP />
        <MapContainer />
      </div>
    )
  }
}

export default Home
