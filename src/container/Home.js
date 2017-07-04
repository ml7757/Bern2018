// src/container/Home.js

import React, { PureComponent } from 'react'
// import MapContainer from './MapContainer'
import RSVP from '../guests/RSVP'

export class Home extends PureComponent {
  render() {
    return (
      <div>
        <RSVP />
      </div>
    )
  }
}

export default Home
