import React, { Component } from 'react'
import API from './utils/usersApi';
class Users extends Component {

    componentWillMount() {
        // console.log(users)
        console.log("component mounted")
        API.getUsers().then(res => {
          console.log(`Got user data: ${res.data}`);
        });
    }

    render() {
        return (
            <div>
                <h1>Users:</h1>
            </div>
        )
    }
}

export default Users;