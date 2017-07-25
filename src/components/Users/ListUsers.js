import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading, Message } from '../Helpers';

class ListUsers extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const { users, isLoading, errorMessage } = this.props;
    let keys = Object.keys(users);

    return (
      <div>
        <h2 className="margin-bottom-1">Users</h2>
        {
          isLoading?
            <Loading height="100%" />
          :
          (
            errorMessage?
              <Message title="Error!" type="alert">
                <p>{ errorMessage }</p>
              </Message>
            :
            <table className="hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Doc.</th>
                  <th>Birthdate</th>
                  <th colSpan="2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  keys?
                    keys.map((item, index) =>
                      <tr key={item}>
                        <td>{index + 1}</td>
                        <td>{ users[item].fullName }</td>
                        <td>{ users[item].email }</td>
                        <td>{ users[item].doc }</td>
                        <td>{ users[item].birthdate }</td>
                        <td><Link to="/profile"><i className="zmdi zmdi-edit zmdi-hc-fw"></i> Edit</Link></td>
                        <td><a><i className="zmdi zmdi-edit zmdi-hc-fw"></i> Remove </a></td>
                      </tr>
                    )
                  :
                  <tr>
                    <td colSpan="7" className="text-center">No records</td>
                  </tr>
                }

              </tbody>
            </table>
          )
        }
      </div>
    );
  }
}

export default ListUsers;
