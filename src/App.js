import React, { Component } from 'react';
import './App.css';
import Welcome from './components/welcome.js'
import CreateUserForm from './components/CreateUserForm.js'

class App extends Component {

  render() {
    return (
      <div className="welcome">
        <p>Hello World!</p>
        <Welcome />
        <CreateUserForm />
      </div>
    );
  }
}

export default App;
