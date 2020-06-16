import React from 'react';

export default class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password1: '',
      password2: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    }).then((res) => {
      console.log('back', res);
    });
  };

  render() {
    const { firstName, lastName, email, password1, password2 } = this.state;

    const isInvalid =
      password1 !== password2 || password1 === '' || email === '';

    return (
      <div>
        <span>Tester form for sign up</span>
        <form>
          <div>
            <input
              name='firstName'
              value={firstName}
              onChange={this.handleChange}
              placeholder='First Name'
            ></input>
            <input
              name='lastName'
              value={lastName}
              onChange={this.handleChange}
              placeholder='Last Name'
            ></input>
          </div>
          <div>
            <input
              name='email'
              value={email}
              onChange={this.handleChange}
              placeholder='Email'
              type='email'
            ></input>
          </div>
          <div>
            <input
              name='password1'
              value={password1}
              onChange={this.handleChange}
              placeholder='Password'
              type='password'
            ></input>
            <input
              name='password2'
              value={password2}
              onChange={this.handleChange}
              placeholder='confirm password'
              type='password'
            ></input>
          </div>
          <button disabled={isInvalid} type='submit' onClick={this.onSubmit}>
            Create Account
          </button>
        </form>
      </div>
    );
  }
}
