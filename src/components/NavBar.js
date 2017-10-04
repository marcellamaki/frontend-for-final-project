import { Link } from 'react-router-dom'
import React, { Component } from 'react';

class NavBar extends React.Component {

  render(){
    return(
        <div className="nav">
          { localStorage.getItem("token") ?
          <p>
            <Link to="/profile" className="navLink">Profile</Link>
            •
            <a href="/questions/edit" className="navLink">Edit Check-Ins</a>
            •
            <a href="/questions/new" className="navLink">Add Check-Ins and Reminders</a>
            •
            <a href="/logout" className="navLink">Log Out</a>
          </p>
            :
            <p>
              <a href="/login" className="navLink">Log In</a>
              •
              <a href="/signup" className="navLink">Sign Up</a>
            </p>
          }
        </div>
    )
  }
}

export default NavBar;
