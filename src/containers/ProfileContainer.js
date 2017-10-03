import React from 'react'
import UserProfileCheckIn from '../components/UserProfileCheckIn'
import { connect } from 'react-redux';


class ProfileContainer extends React.Component {
  constructor(props){
    super(props)

  }

  render(){
    console.log("questions", this.props.questions)
    return (

      <div>

        { !!this.props.currentUser ? <div> <h2>Hi, {this.props.currentUser.username}!</h2></div>  :  <div></div>}
        { this.props.questions === undefined || this.props.questions.length == 0 ? <h4>You don't have any check-ins ready. <br></br><br></br><br></br>
        <center><a href="/questions/new">Click here to get started. </a></center></h4> :
        <UserProfileCheckIn currentUser={this.props.currentUser} questions={this.props.questions} reminders={this.props.reminders}/>}
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
