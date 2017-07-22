import React, { Component } from 'react';

class Login extends Component {
  render() {

    return (
      <div className="grid-x">
        <div className="cell medium-6 medium-offset-3">
          <h3>Login <small>React Music</small></h3>
          <form>
            <label>
              Username
              <input type="text" placeholder="Enter your username" required />
            </label>
            <label>
              Password
              <input type="password" placeholder="Enter your password" required />
            </label>
            <button type="submit" className="button">Sign In</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Login;
