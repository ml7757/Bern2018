import React, { PureComponent } from 'react'
import ReactTable from 'react-table'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import FaEdit from 'react-icons/lib/fa/edit'
import fetchGuests from '../actions/guests/fetch'
import 'react-table/react-table.css'

export class AdminTable extends PureComponent {

  componentWillMount() {
    this.props.fetchGuests()
  }


  makeDataFromGuests() {
    const { guests } = this.props
    const guestsData = guests.map(g  =>  ({
      "firstName": g.firstName,
      "lastName": g.lastName,
      "email": g.email,
      "attending": g.attending.toString(),
      "event1": g.event1.toString(),
      "event2": g.event2.toString(),
      "event3": g.event3.toString(),
      "transport": g.transport.toString(),
      "diet": g.diet,
      "songs": g.songs,
      "plusOnes": g.plusOnes.length,
      "buttons": <div><Link to={`/guests/${g._id}`}><FaEdit /></Link></div>
    }))
    return guestsData
  }


  render() {
    if (!this.props.guests) return null

    const columns = [{
      Header: <h2>Wedding Guests</h2>,
      columns: [
      {
        Header: 'First Name',
        id: 'firstName',
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
      },
      {
        Header: 'Plus one(s)',
        accessor: 'plusOnes'
      },
      {
        Header: "",
        accessor: "buttons"
      }
      ]
    }]



    const { guests } = this.props

    return(

      <div className="admin-table">
        <ReactTable
          data={ this.makeDataFromGuests(guests) }
          columns={columns}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ guests }) => ({ guests })

export default connect(mapStateToProps, { fetchGuests })(AdminTable)
