import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

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
    const { isLoggedIn } = this.props;

    return (
      isLoggedIn?
        <Redirect to="/" />
      :
      <div className="grid-x">
        <div className="cell medium-6 medium-offset-3">
          <h3>Login <small>React Music</small></h3>
          <form onSubmit={this.handleSubmit}>
            <label>
              Email
              <input type="text" ref={ node => this.email = node } placeholder="Enter your email" required />
            </label>
            <label>
              Password
              <input type="password" ref={ node => this.password = node } placeholder="Enter your password" required />
            </label>
            <button type="submit" className="button">Sign In</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Login;
