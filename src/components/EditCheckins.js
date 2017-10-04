import React from 'react'
import { connect } from 'react-redux';
import { saveUserQuestions} from '../actions/users.js'
import EditQuestion from './EditQuestion.js'
import { deleteQuestion } from '../actions/questions.js'

class EditCheckins extends React.Component {
  constructor(props){
    super(props)
    //
    // this.state = {
    //   currentUser: this.props.currentUser,
    //   questions: this.props.questions,
    // }
  }

  handleDelete = (event) => {
    console.log(this.props)
    let questionId = event.target.id
    console.log("reached handleDelete")
    this.props.deleteQuestion(questionId)
  }

  render(){
    console.log(this.props.questions)
    if (this.props.questions === undefined) {
      return <div>Loading...</div> }
      else {
        const questions = this.props.questions.map((question, index) => <EditQuestion key={index} question={question} handleDelete={this.handleDelete}/>)
        return(
          <div>
          {questions}
          </div>
        )
      }
    }
  }

  function mapStatetoProps(state) {
    console.log(state)
    return {
      currentUser: state.users.currentUser,
      questions: state.users.userQuestions,
      reminders: state.users.userReminders, 

    }
  }

function mapDispatchToProps(dispatch) {
  return {
    deleteQuestion: (question) => {
      dispatch(deleteQuestion(question))
    }
  }
}


export default connect(mapStatetoProps, mapDispatchToProps)(EditCheckins)
