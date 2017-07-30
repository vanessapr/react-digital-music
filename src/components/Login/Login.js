import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { isLoggedIn, history } = this.props;
    if (isLoggedIn) {
      history.push('/');
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signIn(this.email.value.trim(), this.password.value.trim());
  }

  render() {
    const { isLoggedIn, isLoading } = this.props;

    return (
      isLoggedIn && !isLoading?
        <Redirect to="/" />
      :
      <div className="grid-x login">
        <div className="cell medium-6 medium-offset-3">
          <h3>Sign In <small>React Digital Music</small></h3>
          <form onSubmit={this.handleSubmit}>
            <label>
              Email
              <input type="text" ref={ node => this.email = node } placeholder="Enter your email" required />
            </label>
            <label>
              Password
              <input type="password" ref={ node => this.password = node } placeholder="Enter your password" required />
            </label>
            <button type="submit" className="button small success rounded expanded">Sign In</button>
            <div className="text-center login-links">
              <Link to="/recover_password">Recover password</Link>
              <Link to="/signup">Sign up here!</Link>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Login;
