import React from 'react'

const EditQuestion = (props) => {
	// console.log(props)
	return <div><p><button id={props.question.id} className="button" onClick={props.handleDelete}>Delete</button>{props.question.text}</p></div>

}

export default EditQuestion
