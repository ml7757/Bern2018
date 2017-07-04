// src/containers/BatchItem.js
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { push } from 'react-router-redux'
import IconButton from 'material-ui/IconButton'
import EditIcon from 'react-icons/lib/fa/edit'
import DeleteIcon from 'react-icons/lib/md/highlight-remove'
import removeGuest from '../actions/guests/guest'
import { showError } from '../actions/loading'

class GuestItem extends PureComponent {

  render() {
    const {
      _id,
      firstName,
      lastName,
      email,
      attending,
      event1,
      event2,
      event3,
      transport,
      diet,
      songs,
      fullName,
      value,
    } = this.props

    return (
      <div>
        Name: {firstName}
      </div>
      //
      // <article className="guest">
      //   <IconButton
      //     iconClassName="material-icons"
      //     tooltip="Delete Guest"
      //     {/* #FIXME  */}
      //     onTouchTap={() => {if(confirm('Delete guest?')) {this.props.removeGuest(this.props._id, remove: true)}}}>
      //     <DeleteIcon />
      //   </IconButton>
      //   <Link to={`/guests/${_id}`}>
      //     <p>{ firstName } { lastName }</p>
      //   </Link>
      //   <div>
      //     <Link
      //       to={{pathname: `/create-guest`,
      //         state: {
      //           firstName: this.props.firstName,
      //           lastName: this.props.lastName,
      //         }
      //       }}>
      //       <IconButton
      //         iconClassName="material-icons"
      //         tooltip="Edit Guest"
      //       >
      //         <EditIcon />
      //       </IconButton>
      //     </Link>
      //   </div>
      //
      // </article>
    )
  }
}



const mapStateToProps = ({ StudentId }) => ({
  StudentId
})

export default connect(mapStateToProps, { removeGuest, showError, push })(GuestItem)