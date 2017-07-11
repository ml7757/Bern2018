
import React, { PureComponent } from 'react'
import GoogleApiComponent from '../GoogleApiComponent'
import Map from '../maps/Map'
import PoiInfo from '../maps/PoiInfo'
import fetchPois from '../actions/points/fetch-pois'
import './MapContainer.css'


const GOOGLE_API_KEY = "AIzaSyB9uQA-pNW8mAPrU9bsZWQUkCW5AvAqzrw"

class MapContainer extends PureComponent {

  componentWillMount() {
    fetchPois()
  }

  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    return (
      <div id="brideGuide" className="map-container">
        <h2 className="titleguide">{"Bride's Guide to Bern"}</h2>
        <div className="map-box">
        <Map google={this.props.google} />
        </div>
        <PoiInfo />
      </div>
    )
  }
}

export default GoogleApiComponent({
  apiKey: GOOGLE_API_KEY
})(MapContainer)
