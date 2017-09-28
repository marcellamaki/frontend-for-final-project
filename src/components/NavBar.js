import React, { Component } from 'react';

class NavBar extends React.Component {
    
  render(){
    return(
      <div className="ui inverted segment">
        <div className="ui inverted secondary menu">
          <a href="/"className="ui item">
            Home
          </a>
          <a href="/questions/edit" className="ui item">
            Edit Questions
          </a>
           <a href="/questions/new" className="ui item">
            Add Check-Ins and Reminders
          </a>
          <div className="right menu">
            <a href="/logout" className="ui item">
              Log Out
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default NavBar;
