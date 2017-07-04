// src/container/Home.js

import React, { PureComponent } from 'react'
import MapContainer from './MapContainer'
import Banner from '../components/Banner'
import Navigation from '../components/Navigation'
import Story from '../components/Story'
import CountDown from '../components/CountDown'
import RSVP from '../guests/RSVP'

export class Home extends PureComponent {
  render() {
    return (
      <div>
        <Banner />
        <Navigation />
        <Story />
        <CountDown />
        <RSVP />
        <MapContainer />
      </div>
    )
  }
}

export default Home
