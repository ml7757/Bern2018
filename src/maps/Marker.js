import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Marker extends Component {
  static propTypes = {
    position: PropTypes.object,
    map: PropTypes.object
  }

  componentDidUpdate(prevProps) {
      if ((this.props.map !== prevProps.map) ||
        (this.props.position !== prevProps.position)) {
          // The relevant props have changed

        this.renderMarker()
      }
    }

  renderMarker() {
    let {
      map, google, mapCenter
    } = this.props


    let position = {lat: 46.953261, lng: 7.435668}

    let pos = position || mapCenter
    position = new google.maps.LatLng(pos.lat, pos.lng)

    const pref = {
        map: map,
        position: position
      }
      this.marker = new google.maps.Marker(pref)
  }


  render() {
    return null
  }
}

export default Marker
