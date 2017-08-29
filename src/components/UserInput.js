import React, { Component } from 'react';

class UserInput extends Component {

  state = {
    username: '',
    hometown: ''
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handleHometownChange = (event) => {
    this.setState({
      hometown: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: {
        username: this.state.username,
        hometown: this.state.hometown
      }
    })
  }


  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type='text' onChange={this.handleUsernameChange} />
        <input type='text' onChange={this.handleHometownChange} />
        <input type='submit' />
      </form>
    );
  }
};

export default UserInput;
