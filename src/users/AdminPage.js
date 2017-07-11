// src/users/AdminPage.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { history } from '../store'
import { replace } from 'react-router-redux'
import AdminNavigation from './AdminNavigation'
import AdminTable from './AdminTable'
import PoiForm from './PoiForm'
import GuestItem from './GuestItem'
import fetchGuests from '../actions/guests/fetch'
import signInForm from './SignIn'

export class AdminPage extends PureComponent {
  static propTypes = {
    guests: PropTypes.array.isRequired,
    fetchGuests: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.fetchGuests()
  }

  renderGuest(guest, index) {
    return <GuestItem key={index} { ...guest }  />
  }

  render() {
    const { replace, signedIn } = this.props
      if (signedIn === false) {
        return null
      } else {
        return (
          <div className="guests wrapper">
            <AdminNavigation />
            <AdminTable />


            <main>
              <PoiForm />
            </main>
          </div>
        )
      }
    }
  }

  const mapStateToProps = ({ guests, currentUser }) => ({ signedIn: !!currentUser && !!currentUser._id, guests })

  export default connect(mapStateToProps, { fetchGuests, replace })(AdminPage)
