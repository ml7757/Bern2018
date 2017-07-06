import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import fetchPois from '../actions/points/fetch-pois'

export class PoiInfo extends PureComponent {

  componentWillMount() {
    this.props.fetchPois()
  }

  renderPois(poi, index) {
    return (
      <div className="point-of-interest">
        <div key="index" className="number-of-point">
          <span>{ index+1 }</span>
        </div>
        <div>
          <h4>{poi.title}</h4>
          {poi.description}
        </div>
        <div>
          <a href={poi.link} className="more-button" >More</a>
        </div>
      </div>
    )
  }

  render() {
    const {points} = this.props
    return (
      <div className="poi-info-container">
      {points.map(this.renderPois.bind(this))}

      </div>
    )
  }
}

const mapStateToProps = ({ points }) => ({ points })

export default connect(mapStateToProps, { fetchPois })(PoiInfo)
