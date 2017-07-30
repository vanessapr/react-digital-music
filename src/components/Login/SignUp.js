import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let email = this.email.value.trim();
    let password = this.password.value.trim();
    let fullName = this.fullName.value.trim();
    const { signUp, history } = this.props;
    signUp({
      email,
      password,
      fullName
    }, history);
  }

  render() {

    return (
      <div className="grid-x">
        <div className="cell medium-6 medium-offset-3">
          <h3 className="margin-bottom-1">Sign Up <small>React Music</small></h3>

          <form onSubmit={this.handleSubmit}>
            <label>
              <span className="required">Full Name</span>
              <input type="text"
                ref={ node => this.fullName = node }
                placeholder="Enter your full name" required />
            </label>
            <label>
              <span className="required">Email</span>
              <input type="email" ref={ node => this.email = node } placeholder="Enter your email" required />
            </label>
            <label>
              <span className="required">Password</span>
              <input type="password" ref={ node => this.password = node } placeholder="Enter your password" required />
            </label>
            <button type="submit" className="button small rounded expanded">Save</button>
            <div className="text-center login-links">
              <Link to="/login">Sign In</Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
