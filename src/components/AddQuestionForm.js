
import React from 'react'

const AddQuestionForm = (props) => {
    console.log("question form props", props)
    return (
      <div>
        <br></br>
        <form onSubmit={props.handleSubmit}>
            <div onChange={props.handleChange}>
              <h2>Create a check-in.</h2>
              <h4>A check-in should be a short, true/false statement based on how yesterday went. When you're doing well, you typically answer true. When you're struggling, you're more likely to answer false.</h4>
              <p>For example: <br></br>I slept 6+ hours last night, I went to work, I ate all of my meals yesterday, etc.</p>
              <p>Choose anything that works for you! If you're not sure where to start, you can also work on this with someone you trust who might have some perspective to offer.</p>
              <label>Add A Check-In</label>
              <input className="input" type="text" name="name" placeholder="Check-In" required/> <button className="button" type="submit">Add</button>
            </div>
        </form>
      </div>
    )
  }

export default AddQuestionForm
