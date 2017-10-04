import React from 'react'

const EditQuestion = (props) => {
	// console.log(props)
	return <div><p>{props.question.text}<button id={props.question.id} onClick={props.handleDelete}>Delete</button></p></div>

}

export default EditQuestion
