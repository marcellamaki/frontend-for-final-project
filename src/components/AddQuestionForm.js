
import React from 'react'

const AddQuestionForm = (props) => {

    return (
      <div>
        <form onSubmit={props.handleSubmit}>
            <div onChange={props.handleChange}>
              <label>Add A Check-In</label>
              <input type="text" name="name" placeholder="Check-In" />
            </div>
            <button className="ui button" type="submit">Add</button>
        </form>
      </div>
    )
  }

export default AddQuestionForm
