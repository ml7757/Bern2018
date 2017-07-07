
import React, { PureComponent } from 'react'
import GoogleApiComponent from '../GoogleApiComponent'
import Map from '../maps/Map'
import Marker from '../maps/Marker'


const GOOGLE_API_KEY = "AIzaSyB9uQA-pNW8mAPrU9bsZWQUkCW5AvAqzrw"

class MapContainer extends PureComponent {
  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <Map google={this.props.google} />
      </div>
    )
  }
}

export default GoogleApiComponent({
  apiKey: GOOGLE_API_KEY
})(MapContainer)
