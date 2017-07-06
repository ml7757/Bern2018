// src/users/PoiEditor.js
import React, { PureComponent } from 'react'
import Editor from 'react-medium-editor'
import { connect } from 'react-redux'
import { replace } from 'react-router-redux'
import createPoi from '../actions/points/create-poi'
import { showError } from '../actions/loading'
import 'medium-editor/dist/css/medium-editor.css'
import 'medium-editor/dist/css/themes/default.css'
import './PoiEditor.css'


class PoiEditor extends PureComponent {
  constructor(props) {
    super()

    const { title, latitude, longitude, description } = props

    this.state = {
      title,
      latitude,
      longitude,
      description,
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
    if (event.keyCode === 13) {
      event.preventDefault()
      this.refs.summary.medium.elements[0].focus()
    }
    this.setState({
      title: this.refs.title.value
    })
  }

  updateLatitude(event) {
    this.setState({
      photo: this.refs.latitude.value
    })
  }

  updateLongitude(event) {
    this.setState({
      photo: this.refs.longitude.value
    })
  }

  updateDescription(text, medium) {
    this.setState({
      description: text
    })
  }

  validate(poi) {
    const { title, latitude, longitude, description } = poi

    let errors = {}

    if (!title || title === '') errors.title = 'Title please...'
    if (!latitude || latitude === '') errors.latitude = 'Latitude please...'
    if (!longitude || longitude === '') errors.longitude = 'Longitude please...'
    if (!description || description === '') errors.description = 'Description please...!'

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
    } = this.state

    const poi = {
      title,
      latitude,
      longitude,
      description: toMarkdown(summary || ''),
    }

    if (this.validate(poi)) {
      this.props.createPoi(poi)
    }
  }

  render() {
    const { errors } = this.state

    return (
      <div className="editor">
        <input
          type="text"
          ref="title"
          className="title"
          placeholder="Title"
          defaultValue={this.state.title}
          onChange={this.updateTitle.bind(this)}
          onKeyDown={this.updateTitle.bind(this)} />

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
          onKeyDown={this.updateLongitude.bind(this)} />

        { errors.longitude && <p className="error">{ errors.longitude }</p> }

        <Editor
          ref="summary"
          options={{
            placeholder: {text: 'Decription...'}
          }}
          onChange={this.updateDescription.bind(this)}
          text={this.state.description} />

        <div className="actions">
          <button className="primary" onClick={this.savePoi.bind(this)}>Save</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: !!currentUser && !!currentUser._id,
})
export default connect(mapStateToProps, { createPoi, replace, showError })(PoiEditor)
