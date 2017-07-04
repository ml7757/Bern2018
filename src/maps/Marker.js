import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Marker extends Component {
  Marker.propTypes = {
    position: React.PropTypes.object,
    map: React.PropTypes.object
  }

  componentDidUpdate(prevProps) {
      if ((this.props.map !== prevProps.map) ||
        (this.props.position !== prevProps.position)) {
          // The relevant props have changed
      }
    }

  renderMarker() {
    let {
      map, google, position, mapCenter
    } = this.props

    let pos = position || mapCenter
    position = new google.maps.LatLng(pos.lat, pos.lng)

    const pref = {
        map: map,
        position: position
      }
      this.marker = new google.maps.Marker(pref)
  }
}

  render() {
    return null
  }
}
