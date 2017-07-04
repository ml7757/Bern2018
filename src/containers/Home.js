// src/container/Home.js

import React, { PureComponent } from 'react'
import MapContainer from './MapContainer'
import Banner from '../components/Banner'
import Navigation from '../components/Navigation'
import RSVP from '../guests/RSVP'

export class Home extends PureComponent {
  render() {
    return (
      <div>
        <Banner />
        <Navigation />
        <RSVP />
        <MapContainer />
      </div>
    )
  }
}

export default Home
