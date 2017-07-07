import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import fetchPois from '../actions/points/fetch-pois'
import icon from '../assets/imgs/green-circle-md.png'

export class Map extends PureComponent {
  static propTypes = {
    google: PropTypes.object,
    zoom: PropTypes.number,
    initialCenter: PropTypes.object,
    onMove: React.PropTypes.func,
  }

  static defaultProps = {
    onMove: function() {},
    zoom: 14,
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
    this.props.fetchPois()
  }

  componentDidMount() {
    this.loadMap()
  }

  loadMap() {

    const {google} = this.props
    const maps = google.maps
    const {points} = this.props

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
    }
  )

     this.map = new maps.Map(node, mapConfig)

     const pos = {lat: 46.953261, lng: 7.435668}

     points.map((p) => {
       new google.maps.Marker({
            position: {lat: p.latitude, lng: p.longitude},
            map: this.map
        })
      })

     let marker = new google.maps.Marker({
          position: pos,
          map: this.map,
          icon: icon
      })
  }

  renderChildren() {
    const {children} = this.props

    if (!children) return null

    return React.Children.map(children, c =>
      React.cloneElement(c, {
        map: this.map,
        google: this.props.google,
        mapCenter: this.state.currentLocation
      })
    )
  }

  render() {
    const style = {
      height: '500px',
      width: '850px'
    }

    return (
      <div ref='map' style={style}>
        Loading map...
        {this.renderChildren()}
      </div>
    )
  }
}

const mapStateToProps = ({ points }) => ({
points })

export default connect(mapStateToProps, { fetchPois })(Map)
