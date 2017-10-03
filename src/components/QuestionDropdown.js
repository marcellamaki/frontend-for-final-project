import React from 'react'

const QuestionDropdown = (props) => {
	console.log(props)
	return <option value={props.question}>{props.question}</option>

}

export default QuestionDropdown
