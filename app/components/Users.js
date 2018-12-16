import React, { Component } from 'react'
// import fetch from 'isomorphic-unfetch'
import axios from 'axios'

class Users extends Component {

    componentWillMount() {
        // console.log(users)
        console.log("component mounted")
        axios.get('/api/users')
            .then(res => {
                console.log("Data: ", res.data)
            })
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