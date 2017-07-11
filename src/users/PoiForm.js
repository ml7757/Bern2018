import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { replace } from 'react-router-redux'
import createPoi from '../actions/points/create-poi'
import { showError } from '../actions/loading'
import './poiform.css'


class PoiEditor extends PureComponent {
  constructor(props) {
    super()

    const { title, latitude, longitude, description, link } = props

    this.state = {
      title,
      latitude,
      longitude,
      description,
      link,
      errors: {},
    }
  }

  componentWillReceiveProps(newProps) {
    const { replace, signedIn, showError } = newProps
    if (!signedIn) {
      showError('You need to be signed up to create points of interest!')
      replace('/sign-in')
    }
  }

  updateTitle(event) {
    this.setState({
      title: this.refs.title.value
    })
  }

  updateLatitude(event) {
    this.setState({
      latitude: this.refs.latitude.value
    })
  }

  updateLongitude(event) {
    this.setState({
      longitude: this.refs.longitude.value
    })
  }

  updateDescription(event) {
    this.setState({
      description: this.refs.description.value
    })
  }

  updateLink(event) {
    this.setState({
      link: this.refs.link.value
    })
  }

  validate(poi) {
    const { title, latitude, longitude, description, link } = poi

    let errors = {}

    if (!title || title === '') errors.title = 'Please provide a Title'
    if (!latitude || latitude === '') errors.latitude = 'Please provide a Latitude'
    if (!longitude || longitude === '') errors.longitude = 'Please provide a Longitude'
    if (!description || description === '') errors.description = 'Please provide a Description!'
    if (!link || link === '') errors.link = 'Please provide a link!'

    this.setState({
      errors,
    })

    return Object.keys(errors).length === 0
  }

  savePoi() {
    const {
      title,
      latitude,
      longitude,
      description,
      link,
    } = this.state

    const poi = {
      title,
      latitude,
      longitude,
      description,
      link,
    }

    if (this.validate(poi)) {
      this.props.createPoi(poi)
    }
  }

  render() {
    const { errors } = this.state

    return (

      <div className="poieditor">
      <br />
      <br />
      <h3> Add a point of interest to the Brides Guide to Bern</h3>
        <input
          type="text"
          ref="title"
          className="poititle"
          placeholder="Title of the point of interest"
          defaultValue={this.state.title}
          onChange={this.updateTitle.bind(this)}
          onKeyDown={this.updateTitle.bind(this)} /><br />

        { errors.title && <p className="error">{ errors.title }</p> }

        <input
          type="text"
          ref="latitude"
          className="latitude"
          placeholder="Latitude"
          defaultValue={this.state.latitude}
          onChange={this.updateLatitude.bind(this)}
          onKeyDown={this.updateLatitude.bind(this)} />

        { errors.latitude && <p className="error">{ errors.latitude }</p> }

        <input
          type="text"
          ref="longitude"
          className="longitude"
          placeholder="Longitude"
          defaultValue={this.state.longitude}
          onChange={this.updateLongitude.bind(this)}
          onKeyDown={this.updateLongitude.bind(this)} /><br />

        { errors.longitude && <p className="error">{ errors.longitude }</p> }

        <textarea
          type="text"
          ref="description"
          className="description"
          placeholder="Description of the point of interest"
          defaultValue={this.state.description}
          onChange={this.updateDescription.bind(this)}
          onKeyDown={this.updateDescription.bind(this)} /><br />

        { errors.description && <p className="error">{ errors.description }</p> }

        <input
          type="text"
          ref="link"
          className="link"
          placeholder="Link to more information"
          defaultValue={this.state.link}
          onChange={this.updateLink.bind(this)}
          onKeyDown={this.updateLink.bind(this)} /><br />

        { errors.link && <p className="error">{ errors.link }</p> }

        <div className="actions"><br />
          <button className="primary" onClick={this.savePoi.bind(this)}>Save</button>
        </div><br />
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: !!currentUser && !!currentUser._id,
})
export default connect(mapStateToProps, { createPoi, replace, showError })(PoiEditor)
