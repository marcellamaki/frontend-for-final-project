import React from 'react'
import Auth from '../adapters/auth'
import { findUser } from '../actions/users'
import { connect } from 'react-redux'


class LoginForm extends React.Component {

  state = {
    usernameInput: "",
    passwordInput: ""
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.props.history)

    const userParams = {
      username: this.state.usernameInput,
      password: this.state.passwordInput
    }
    this.props.findUser(userParams, this.props.history)
        this.setState({
          usernameInput: "",
          passwordInput: ""
        })
        // this.props.history.replace("/home")
  }

  handleUsernameChange = (event) => {

    this.setState({
      usernameInput: event.target.value
    })
  }

  handlePasswordChange = (event) => {
    this.setState({
      passwordInput: event.target.value
    })
  }
  render() {
    // console.log(this.props)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleUsernameChange} value={this.state.usernameInput}/><br></br>
          <input type="password" onChange={this.handlePasswordChange} value={this.state.passwordInput} /><br></br>
          <input type="submit" value="Login"/>
        </form>
      </div>
    )
  }
};

function mapStatetoProps(state) {

    return {
      user: state.user
    }
}

function mapDispatchToProps(dispatch) {
  return {
    findUser: (user, history) => {
      dispatch(findUser(user, history))
    }
  }

}

export default connect(mapStatetoProps, mapDispatchToProps)(LoginForm)
