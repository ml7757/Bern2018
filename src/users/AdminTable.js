import React, { PureComponent } from 'react'
import ReactTable from 'react-table'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { push } from 'react-router-redux'
import fetchGuests from '../actions/guests/fetch'
import GuestItem from '../guests/GuestItem'
import 'react-table/react-table.css'

export class AdminTable extends PureComponent {

  componentWillMount() {
    this.props.fetchGuests()
  }

  renderGuest(guest, index) {
    return <GuestItem key={index} { ...guest }  />
    console.log(guest);
    // debugger
  }

  // makeData(renderGuest()) {
  //   const { fullName, lastName } = guest
  //   return (
  //     {
  //       "fullName": fullName,
  //       "lastName": lastName
  //     }
  //   )
  // }

  renderGuests(guest) {}

  render() {
    if (!this.props.guests) return null

    const columns = [{
      Header: 'Wedding Guests',
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
      }, {
        Header: 'Diet',
        accessor: 'diet'
      }, {
        Header: 'Songs',
        accessor: 'songs'
      }
      // , {
      //   Header: 'Plus One(s)',
      //   // if (plusOnes.length > 0) return "Yes"
      //   accessor: 'plusOnes'
      // }
      ]
    }]

    console.log("Hello" + this.props);
    // debugger
    const data = [{
      "firstName": "hello",
      "lastName": "hello",
      "email": "hello@hello.nl",
      "attending": "hello",
      "event1": "hello",
      "event2": "hello",
      "event3": "hello",
      "transport": "hello",
      "diet": "hello",
      "songs": "hello"
    }]

    return(

      <div className="admin-table">
        <ReactTable
          data={ this.props.guests.map(this.renderGuest).bind(this) }
          // data={data}
          columns={columns}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ guests }) => ({ guests })

export default connect(mapStateToProps, { fetchGuests })(AdminTable)


// export default AdminTable

//
// const columns = [{
//   Header: 'Wedding guests',
//   columns: [{
//     Header: 'First Name',
//     accessor: 'firstName'
//   }, {
//     Header: 'Last Name',
//     id: 'lastName',
//     accessor: d => d.lastName
//   }]
// }, {
//   Header: 'Info',
//   columns: [{
//     Header: 'Age',
//     accessor: 'age'
//   }]
// }]
//
// const MyTable = (props) => {
// 	return (
// 		<div>
// 			<h1>React-Table - Basic Example</h1>
// 			<ReactTable
// 				data={makeData()}
// 				columns={columns}
//    />
// 			<br />
// 			<br />
// 			<h1>For more examples, <a href="https://react-table.js.org" target="_blank">see our react storybook</a></h1>
// 		</div>
// 	)
// }
//
// ReactDOM.render(<MyTable />, document.getElementById('root'))
//
//
// function makeData () {
// 	return [
// 		{
// 			"firstName": "judge",
// 			"lastName": "babies",
// 			"age": 16
// 		},
// 		{
// 			"firstName": "quarter",
// 			"lastName": "driving",
// 			"age": 17
// 		},
// 		{
// 			"firstName": "division",
// 			"lastName": "society",
// 			"age": 3
// 		}
// 	]
// }
//
// const columns = [{
//     Header: 'Name',
//     accessor: 'name' // String-based value accessors!
//   }, {
//     Header: 'Age',
//     accessor: 'age',
//     Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
//   }, {
//     id: 'friendName', // Required because our accessor is not a string
//     Header: 'Friend Name',
//     accessor: d => d.friend.name // Custom value accessors!
//   }, {
//     Header: props => <span>Friend Age</span>, // Custom header components!
//     accessor: 'friend.age'
//   }]
//
//   <ReactTable
//     data={data}
//     columns={columns}
//   />
// }
