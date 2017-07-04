
import React, { PureComponent } from 'react'
import Map from '../maps/Map'
import Marker from '../maps/Marker'

const GOOGLE_API_KEY = "AIzaSyB9uQA-pNW8mAPrU9bsZWQUkCW5AvAqzrw"

export class MapContainer extends PureComponent {
  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    const style = {
      width: '40vw',
      height: '100vh'
    }
    return (
      <div style={style}>
        <Map google={this.props.google}>
          <Marker />
          <Marker position={pos}/>
        </Map>
      </div>
    )
  }
}

export default GoogleApiComponent({
  apiKey: GOOGLE_API_KEY
})(MapContainer)
