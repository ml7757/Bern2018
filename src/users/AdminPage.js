import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { replace } from 'react-router-redux'
import AdminNavigation from './AdminNavigation'
import AdminTable from './AdminTable'
import PoiForm from './PoiForm'
import GuestItem from './GuestItem'
import fetchGuests from '../actions/guests/fetch'
import fetchPois from '../actions/points/fetch-pois'

export class AdminPage extends PureComponent {
  static propTypes = {
    guests: PropTypes.array.isRequired,
    fetchGuests: PropTypes.func.isRequired,
  }


  render() {
    const { signedIn } = this.props
      if (signedIn === false) {
        return null
      } else {
        return (
          <div className="guests wrapper">
            <AdminNavigation />
            <AdminTable />
            <PoiForm />
          </div>
        )
      }
    }
  }

  const mapStateToProps = ({ guests, currentUser }) => ({ signedIn: !!currentUser && !!currentUser._id, guests })

  export default connect(mapStateToProps, { fetchGuests, replace, fetchPois })(AdminPage)
