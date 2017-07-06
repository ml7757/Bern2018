
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
    // debugger

    // const pos = {lat: 37.759703, lng: -122.428093}
    const pos = {lat: 46.953261, lng: 7.435668}

    return (
      <div>
        <Map google={this.props.google}>
          <Marker />
          <Marker position={{lat: 46.953261, lng: 7.435668}}/>
        </Map>
        
      </div>
    )
  }
}

export default
// new
GoogleApiComponent({
  apiKey: GOOGLE_API_KEY
})(MapContainer)
