
import React, { PureComponent } from 'react'
import GoogleApiComponent from '../GoogleApiComponent'
import Map from '../maps/Map'
import PoiInfo from '../maps/PoiInfo'
import './MapContainer.css'


const GOOGLE_API_KEY = "AIzaSyB9uQA-pNW8mAPrU9bsZWQUkCW5AvAqzrw"

class MapContainer extends PureComponent {
  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    return (
      <div id="brideGuide" className="map-container">
        <Map google={this.props.google} />
        <PoiInfo />
      </div>
    )
  }
}

export default GoogleApiComponent({
  apiKey: GOOGLE_API_KEY
})(MapContainer)
