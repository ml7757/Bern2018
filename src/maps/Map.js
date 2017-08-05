import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import fetchPois from '../actions/points/fetch-pois'
import mapDot from '../assets/imgs/map_dot.png'

export class Map extends PureComponent {
  static propTypes = {
    google: PropTypes.object,
    zoom: PropTypes.number,
    initialCenter: PropTypes.object,
    onMove: React.PropTypes.func,
  }

  static defaultProps = {
    onMove: function() {},
    zoom: 16,
    initialCenter: {
      lat: 46.947999,
      lng: 7.448148
    }
  }

  constructor(props) {
    super(props);

    const {lat, lng} = this.props.initialCenter
    this.state = {
      currentLocation: {
        lat: lat,
        lng: lng
      }
    }
  }
  componentWillMount() {
    fetchPois()
  }

  componentDidUpdate() {

    const points = [
      [46.948197, 7.443694, 1],
      [46.947236, 7.451318, 2],
      [46.952021, 7.460419, 3],
      [46.942411, 7.445291, 4],
      [46.949048, 7.445432, 5],
      [46.947865, 7.448763, 6]
    ]

    const { google } = this.props

    points.map((p) => {
       return new google.maps.Marker({
          position: {lat: p[0], lng: p[1]},
          map: this.map,
          icon: mapDot,
          label: {
            color: 'white',
            fontWeight: 'bold',
            fontSize: 'large',
            fontFamily: 'Raleway,sans-serif',
            text: `${p[2]}`,
          }
        })
      })

  }

  componentDidMount() {
    this.loadMap()
  }

  loadMap = () => {

    const {google} = this.props
    const maps = google.maps

    const mapRef = this.refs.map
    const node = ReactDOM.findDOMNode(mapRef)

    const {lat, lng} = this.state.currentLocation

    let {initialCenter, zoom} = this.props
    const center = new maps.LatLng(lat, lng)
    const mapConfig = Object.assign({}, {
      center: center,
      disableDefaultUI: true,
      scrollwheel: false,
      zoomControl: true,
      zoom: zoom,
      styles: [
        {
          "featureType": "all",
          "elementType": "all",
          "stylers": [
            {
              "saturation": "-100"
            }
          ]
        }
      ]

    })

  this.map = new maps.Map(node, mapConfig)

  }

  render() {
    const style = {
      height: '800px',
      width: '100%'
    }

    return (
      <div ref='map' style={style}>
        Loading map...
      </div>
    )
  }
}

const mapStateToProps = ({ points }) => ({
points })

export default connect(mapStateToProps)(Map)
