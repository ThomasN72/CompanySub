import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from 'axios'
class SignUp extends Component {

    state = {
        name : '', 
        email : '', 
        password : ''
    }

    saveToState = e => {
        this.setState({ [e.target.name]: e.target.value });
        console.log("AFTER SET STATE...", this.state);        
    }

    createUser = event => {
      let user = this.state;
      console.log("user..", user)
      axios.post('/api/users/create', user)
        .then(res => {
          console.log("Response: ", res)
        })
        .catch(err => {
          console.log("Error creating user ", err)
        })
    };

    render() {
        return <div>

          
            <Form>
            <Form.Field>
              <label htmlFor="name">
                Name
                  <input  name="name" placeholder="name" value={this.state.name} onChange={this.saveToState} />
              </label>
            </Form.Field>
              <Form.Field>
                <label htmlFor="email">
                  Email
                  <input type="email" name="email" placeholder="email" value={this.state.email} onChange={this.saveToState} />
                </label>
              </Form.Field>
              <Form.Field>
                <label htmlFor="password">
                  Password
                  <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.saveToState} />
                </label>
              </Form.Field>
            <Button secondary onClick={this.createUser}>Sign Up</Button>
            </Form>

          </div>;
    }

}

export default SignUp;