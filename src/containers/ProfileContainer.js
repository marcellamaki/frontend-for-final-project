import React from 'react'
import UserProfileCheckIn from '../components/UserProfileCheckIn'
import { connect } from 'react-redux';


class ProfileContainer extends React.Component {
  constructor(props){
    super(props)

  }

  render(){
    return (
      <div>

        { !!this.props.currentUser ? <div> <h2>Hi, {this.props.currentUser.username}!</h2><h4>You have not checked in yet today. Would you like to do that now?</h4></div>  :  <div></div>}

      <UserProfileCheckIn currentUser={this.props.currentUser} questions={this.props.questions} reminders={this.props.reminders}/>
      </div>
    )
  }

}

function mapStatetoProps(state) {
  console.log(state)
  return {
    currentUser: state.users.currentUser,
    questions: state.users.userQuestions,
    reminders: state.users.userReminders

  }
}

export default connect(mapStatetoProps)(ProfileContainer);
