//make this just a functional component

import React from 'react';
import { Route, Link } from 'react-router-dom';

class Welcome extends React.Component {

  render(){
    return(
      <div>
      
      <div className="container">
        <div className="site-title">
          <h2>Welcome to Level </h2>
        </div>
        <p>
          Level is an app that helps you take care of yourself when it's hard to remember how or why it's important. It helps you stay independent and keep yourself on track when you may not have or want someone else in your support system keeping an eye on how things are going day-to-day.</p>
          <hr></hr>
        <p>
          Using Level is easy: setup is straight-forward and customizable. Start by setting up a series of check-ins that are important and helpful for you. A checkin can be anything that you struggle with remembering to do when you're not doing so well, whether it's leaving the house, eating healthy meals, exercise, spending time with others, taking medication, or even basic things like showering and leaving for work or school on time. </p>
          <hr></hr>
          <p>
          Once you've added your check-ins, set reminders to go along with them. Each reminder consists of a message that gets texted to you from Level, and a time of day that it makes sense to receive. For example, if you often forget to have lunch, you can set a message for 12:30, reminding you to get something to eat.
        </p>
      </div>
    </div>
    )
  }

}

export default Welcome;
