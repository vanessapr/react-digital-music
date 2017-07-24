import React from 'react';

const UpdateProfile = () => {
  let fullName, email, password, birthdate, doc;

  return (
    <div>
      <h2 className="margin-bottom-2">My Profile</h2>
      <form onSubmit={ e => {
        e.preventDefault();
      }}>
        <div className="grid-x">
          <div className="cell small-3">
            <label htmlFor="txt_fullname" className="required">Full Name</label>
          </div>
          <div className="cell small-9">
            <input type="text"
              id="txt_fullname"
              ref={ node => fullName = node }
              placeholder="Enter your full name" required />
          </div>
        </div>
        <div className="grid-x">
          <div className="cell small-3">
            <label htmlFor="txt_email" className="required">Email</label>
          </div>
          <div className="cell small-9">
            <input type="email"
              id="txt_email"
              ref={ node => email = node } placeholder="Enter your email" required />
          </div>
        </div>
        <div className="grid-x">
          <div className="cell small-3">
            <label htmlFor="txt_doc">Doc.</label>
          </div>
          <div className="cell small-9">
            <input type="text"
              id="txt_doc"
              ref={ node => doc = node } placeholder="Enter your identification document" />
          </div>
        </div>
        <div className="grid-x">
          <div className="cell small-3">
            <label htmlFor="txt_birthdate">Birthdate</label>
          </div>
          <div className="cell small-9">
            <input type="date"
              id="txt_birthdate"
              ref={ node => birthdate = node } placeholder="Enter your birthdate" />
          </div>
        </div>
        <div className="grid-x">
          <div className="cell small-3">
            <label htmlFor="txt_password">Password</label>
          </div>
          <div className="cell small-9">
            <input type="password"
              id="txt_password"
              ref={ node => password = node } placeholder="Enter your password" />
          </div>
        </div>
        <div className="grid-x">
          <div className="cell small-9 small-offset-3">
            <button type="submit" className="button">Update</button>
          </div>
        </div>

      </form>
    </div>
  );

};

export default UpdateProfile;
