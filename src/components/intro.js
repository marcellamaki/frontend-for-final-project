import React from 'react'
import { withRouter, Link } from 'react-router-dom'

const Intro = () => {
  console.log("Intro renders!")
  return (
        <div>

        <div className="container">
          <div className="site-title">
            <h2>Welcome to level </h2>
          </div>
          <p>
            Level is an app that helps you take care of yourself when it's hard to remember how or why it's important. It helps you stay independent and keep yourself on track when you may not have or want someone else in your support system keeping an eye on how things are going day-to-day.</p>
            <br></br>
            <hr></hr>
            <br></br>
          <p>
            Using level is easy: setup is straight-forward and customizable. Start by setting up a series of check-ins that are important and helpful for you. A checkin can be anything that you struggle with remembering to do when you're not doing so well, whether it's leaving the house, eating healthy meals, exercising, spending time with others, taking medication, or even basic things like showering and leaving for work or school on time. </p>
            <br></br>
            <hr></hr>
            <br></br>
            <p>
            Once you've added your check-ins, set reminders to go along with them. Each reminder consists of a message that gets texted to you from level, and a time of day that it makes sense to receive. For example, if you often forget to have lunch, you can set a message for 12:30, reminding you to get something to eat.
            </p>
            <br></br>
            <hr></hr>
            <br></br>
            <p>
            When your check-ins and reminders are set, check in every day by visiting your profile page! Answer your questions and when you save your responses, any reminders for the day will be set. It can be tricky to remember to check in. If you use your computer daily anyway, a great way to remember is to set your profile page as your homepage when you start your internet or open a new tab.
            <br></br>
            <br></br>
            <center><Link to='/questions/new'>Build My Profile</Link> • <Link to='/profile'>I Have a Profile, Let Me Check In</Link></center>
          </p>
        </div>
      </div>
      )
}

export default Intro;
