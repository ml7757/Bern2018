// src/users/AdminPage.js
import React, { PureComponent } from 'react'
import ReactTable from 'react-table'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AdminNavigation from './AdminNavigation'
import GuestItem from '../guests/GuestItem'
import fetchGuests from '../actions/guests/fetch'
// If JS webpack
// import 'react-table/react-table.css'
// import './AdminPage.css'

const columns = [{
  Header: 'Wedding Guests',
  columns: [
  {
    Header: 'First Name',
    accessor: 'firstName'
  }, {
    Header: 'Last Name',
    id: 'lastName',
    accessor: d => d.lastName
  }, {
    Header: 'Email Address',
    id: 'email',
    accessor: e => e.email
  }, {
    Header: 'Attending',
    accessor: 'attending'
  }, {
    Header: 'Meet & Greet',
    accessor: 'event1'
  }, {
    Header: 'Celebration',
    accessor: 'event2'
  }, {
    Header: 'Farewell',
    accessor: 'event3'
  }, {
    Header: 'Transport',
    accessor: 'transport'
  }, {
    Header: 'Diet',
    accessor: 'diet'
  }, {
    Header: 'Songs',
    accessor: 'songs'
  }, {
    Header: 'Plus One(s)',
    // if (plusOnes.length > 0) return "Yes"
    accessor: plusOnes()
  }
    email,
    attending,
    event1,
    event2,
    event3,
    transport,
    diet,
    songs,
    fullName,
    child,
  ]
}]


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

          <main>
            { this.props.guests.map(this.renderGuest.bind(this)) }
          </main>
        </div>
      )
    }
  }

  const mapStateToProps = ({ guests }) => ({ guests })

  export default connect(mapStateToProps, { fetchGuests })(AdminPage)
