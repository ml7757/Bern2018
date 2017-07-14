import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { replace } from 'react-router-redux'
import AdminNavigation from './AdminNavigation'
import AdminTable from './AdminTable'
import PoiForm from './PoiForm'
import GuestItem from './GuestItem'
import fetchGuests from '../actions/guests/fetch'

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

  export default connect(mapStateToProps, { fetchGuests, replace })(AdminPage)
