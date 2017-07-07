import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Marker extends Component {
  static propTypes = {
    position: PropTypes.object
  }

  componentDidUpdate(prevProps) {
    if ((this.props.map !== prevProps.map) ||
      (this.props.position !== prevProps.position)) {
    }
    this.renderMarker()
  }

  renderMarker() {
    let {
      map, google, position, mapCenter
    } = this.props

    let pos = position || mapCenter
    position = new google.maps.LatLng(pos.lat, pos.lng)

    const pref = {
        position: position,
        map: map
      }
    this.marker = new google.maps.Marker(pref)
  }


  render() {
    return (
      <div>
        {this.renderMarker()}
      </div>
    )
  }
}

export default Marker
