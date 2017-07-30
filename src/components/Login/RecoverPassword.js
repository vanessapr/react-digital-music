import React from 'react';
import { Link } from 'react-router-dom';
import notie from 'notie';
import 'notie/dist/notie.css';
import { User } from '../../utils/firebase';

const RecoverPassword = (props) => {
  let email;

  return (
    <div className="grid-x">
      <div className="cell medium-6 medium-offset-3">
        <h3 className="margin-bottom-1">Recover Password</h3>

        <form onSubmit={ e => {
          e.preventDefault();
          User.recoverPassword(email.value.trim()).then(() => {
            notie.alert({ type: 'success', text: 'An email has been sent' });
            props.history.push('/login');
          }).catch( err => {
            notie.alert({ type: 'error', text: err.message });
          });
        }}>
          <label>
            Email
            <input type="text" ref={ node => email = node } placeholder="Enter your email" required />
          </label>
          <button type="submit" className="button small rounded expanded">To Send</button>
          <div className="text-center login-links">
            <Link to="/login">Sign In</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RecoverPassword;
