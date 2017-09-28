import React from 'react'
import UserProfileCheckIn from '../components/UserProfileCheckIn'
import { connect } from 'react-redux';


class ProfileContainer extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    console.log(this.props)
    return (
      <UserProfileCheckIn />
    )
  }

}

function mapStatetoProps(state) {
  return {
    questions: state.questions
  }
}

export default connect(mapStatetoProps)(ProfileContainer);
