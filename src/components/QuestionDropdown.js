import React from 'react'

const QuestionDropdown = (props) => {
	return <option value={props.question.id}>{props.question.text}</option>

}

export default QuestionDropdown
