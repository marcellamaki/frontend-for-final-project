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
            <Link to="/questions/edit" className="navLink">Edit Check-Ins</Link>
            •
            <Link to="/questions/new" className="navLink">Add Check-Ins and Reminders</Link>
            •
            <Link to="/intro" className="navLink">FAQ</Link>
            •
            <Link to="/logout" className="navLink">Log Out</Link>
          </p>
            :
            <p>
              <Link to="/login" className="navLink">Log In</Link>
              •
              <Link to="/signup" className="navLink">Sign Up</Link>
            </p>
          }
        </div>
    )
  }
}

export default NavBar;
