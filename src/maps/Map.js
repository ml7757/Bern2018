import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export class Map extends PureComponent {
  constructor(props) {
    super(props);

    const {lat, lng} = this.props.initialCenter;
    this.state = {
      currentLocation: {
        lat: lat,
        lng: lng
      }
    }
  }

  static propTypes = {
    google: PropTypes.object,
    zoom: PropTypes.number,
    initialCenter: PropTypes.object,
  }
  static defaultProps = {
    zoom: 15,
    // Bern, by default
    initialCenter: {
      lat: 46.947999,
      lng: 7.448148
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
    }
    if (prevState.currentLocation !== this.state.currentLocation) {
      this.recenterMap();
    }
    this.loadMap();
  }

  componentDidMount() {
    this.loadMap();
    this.renderChildren()
  }

  loadMap() {
    if (this.props && this.props.google) {
      // google is available
      const {google} = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      const {lat, lng} = this.state.currentLocation;

      let {initialCenter, zoom} = this.props;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center: center,
        disableDefaultUI: true,
        scrollwheel: false,
        zoomControl: true,
        zoom: zoom
        // ,
        // styles: [
        //   {
        //     "featureType": "all",
        //     "elementType": "all",
        //     "stylers": [
        //       {
        //         "saturation": "-100"
        //       }
        //     ]
        //   }
        // ]
      })

     this.map = new maps.Map(node, mapConfig);
    }
    // this.renderChildren()
// debugger
  }

  renderChildren() {
    const {children} = this.props;

    if (!children) return;

    return React.Children.map(children, c => {
      return React.cloneElement(c, {
        map: this.map,
        google: this.props.google,
        mapCenter: this.state.currentLocation
        // position: this.props.position
      });
    })
  }

  render() {
    const style = {
      height: '500px',
      width: '850px'
    }

    return (
      <div ref='map' className="map-style" style={style}>
        Loading map...
        {/* {this.renderChildren()} */}
      </div>
    )
  }
}

export default Map
