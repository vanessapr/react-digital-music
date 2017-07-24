import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import User from '../../utils/user';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let email = this.email.value.trim();
    let password = this.password.value.trim();
    User.create(email, password).then(response => {
      console.log('response', response);
    })
    .catch(err => {
      console.log('err', err);
    });
  }

  render() {
    return (
      <div className="grid-x">
        <div className="cell medium-6 medium-offset-3">
          <h3>Sign Up <small>React Music</small></h3>
          <Link to="/login">Login</Link>
          <form onSubmit={this.handleSubmit}>
            <label>
              Email
              <input type="email" ref={ node => this.email = node } placeholder="Enter your email" required />
            </label>
            <label>
              Password
              <input type="password" ref={ node => this.password = node } placeholder="Enter your password" required />
            </label>
            <button type="submit" className="button">Save</button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
