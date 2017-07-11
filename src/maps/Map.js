import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import fetchPois from '../actions/points/fetch-pois'
import icon from '../assets/imgs/circletiny.png'

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

    const { points } = this.props

    const { google } = this.props

    points.map((p, i) => {
       return new google.maps.Marker({
          position: {lat: p.latitude, lng: p.longitude},
          map: this.map,
          icon: icon,
          label: {
            color: 'white',
            fontWeight: 'bold',
            fontSize: 'x-large',
            fontFamily: 'Raleway,sans-serif',
            text: `${i+1}`,
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
