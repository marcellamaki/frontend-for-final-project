import React from 'react'
import { connect } from 'react-redux';

class UserProfileCheckIn extends React.Component {
  constructor(props){
    super(props)
  }


  render(){
    console.log(this.props)
    return(
      <div>
        Hello World
        All of the checkin questions are gonna go here! :)
      </div>
    )
  }

}

function mapStatetoProps(state) {
  console.log(state)
  return {
    currentUser: state.users.currentUser,
    questions: state.question
  }
}

export default connect(mapStatetoProps)(UserProfileCheckIn)
