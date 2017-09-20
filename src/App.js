import React, { Component } from 'react';
import './App.css';
import Welcome from './components/welcome.js'
import SignUpForm from './components/SignUpForm.js'

class App extends Component {
  render() {
    return (
      <div className="welcome">
        <p>Hello World!</p>
        <Welcome />
        <SignUpForm />
      </div>
    );
  }
}

export default App;
