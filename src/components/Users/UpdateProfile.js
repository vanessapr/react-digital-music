import React, { Component } from 'react';

class UpdateProfile extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getProfile();
  }

  componentWillReceiveProps(nextProps) {
    if (Object.keys(nextProps.data).length) {
      this.fullName.value = nextProps.data.displayName;
      this.email.value = nextProps.data.email;
      this.doc.value = nextProps.data.doc;
      this.birthdate.value = nextProps.data.birthdate;
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let data = {
      fullName: this.fullName.value.trim(),
      email: this.email.value.trim(),
      password: this.password.value.trim(),
      passwordOld: this.passwordOld.value.trim(),
      birthdate: this.birthdate.value,
      doc: this.doc.value.trim()
    };

    this.props.saveProfile(data);
  }

  render() {
    const { data } = this.props;

    return (
      <div>
        <h2 className="margin-bottom-2">My Profile</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="grid-x">
            <div className="cell small-3">
              <label htmlFor="txt_fullname" className="required">Full Name</label>
            </div>
            <div className="cell small-9">
              <input type="text"
                id="txt_fullname"
                ref={ node => this.fullName = node }
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
                ref={ node => this.email = node } placeholder="Enter your email" required />
            </div>
          </div>
          <div className="grid-x">
            <div className="cell small-3">
              <label htmlFor="txt_doc">Doc.</label>
            </div>
            <div className="cell small-9">
              <input type="text"
                id="txt_doc"
                value={data.doc}
                ref={ node => this.doc = node } placeholder="Enter your identification document" />
            </div>
          </div>
          <div className="grid-x">
            <div className="cell small-3">
              <label htmlFor="txt_birthdate">Birthdate</label>
            </div>
            <div className="cell small-9">
              <input type="date"
                id="txt_birthdate"
                ref={ node => this.birthdate = node } placeholder="Enter your birthdate" />
            </div>
          </div>
          <div className="grid-x">
            <div className="cell small-3">
              <label htmlFor="txt_password_old" className="required">Password Old</label>
            </div>
            <div className="cell small-9">
              <input type="password"
                id="txt_password_old"
                ref={ node => this.passwordOld = node }
                required
                minLength="6"
                placeholder="Your password is neccessary" />
            </div>
          </div>
          <div className="grid-x">
            <div className="cell small-3">
              <label htmlFor="txt_password">Password</label>
            </div>
            <div className="cell small-9">
              <input type="password"
                id="txt_password"
                ref={ node => this.password = node } placeholder="Enter your password" />
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
  }

}


export default UpdateProfile;
