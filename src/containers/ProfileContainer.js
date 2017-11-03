import React from 'react'
import UserProfileCheckIn from '../components/UserProfileCheckIn'
import { connect } from 'react-redux';
import {withRouter, Link} from 'react-router-dom'


class ProfileContainer extends React.Component {
  constructor(props){
    super(props)

  }

  componentWillUpdate() {
    this.render
  }

  render(){
    console.log("questions", this.props.questions)
    return (

      <div>

        { !!this.props.currentUser ? <div> <h2>Hi, {this.props.currentUser.username}!</h2></div>  :  <div></div>}
        { !this.props.questions || this.props.questions.length == 0 ? <h4><center><Link to="/questions/new">Click here to get started. </Link></center></h4> :
          <UserProfileCheckIn history={this.props.history} currentUser={this.props.currentUser} questions={this.props.questions} reminders={this.props.reminders}/>}
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
