import React from 'react'
import Select from 'react-select';

class QuestionDropdown extends React.Component {
	constructor(props){
		super(props)
	}

	render(){
		console.log(this.props.questions)
	const currentUserQuestions = this.props.questions.map((question, index) => <option key={index} value={question.id}>{question.text}</option>)
	return (
		<div>
			
		</div>
	)}
}


export default QuestionDropdown
