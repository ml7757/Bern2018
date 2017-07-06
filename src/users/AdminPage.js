// src/users/AdminPage.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AdminNavigation from './AdminNavigation'
import AdminTable from './AdminTable'
import PoiForm from './PoiForm'
import GuestItem from '../guests/GuestItem'
import fetchGuests from '../actions/guests/fetch'
// If JS webpack
// import 'react-table/react-table.css'

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
      return(

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

  const mapStateToProps = ({ guests }) => ({ guests })

  export default connect(mapStateToProps, { fetchGuests })(AdminPage)
