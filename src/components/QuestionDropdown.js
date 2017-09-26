import React from 'react'

const QuestionDropdown = (props) => {

		return <option value={props.question.id}>{props.question.name}</option>
}

export default QuestionDropdown
