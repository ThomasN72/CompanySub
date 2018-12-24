import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import UserAPI from "./utils/usersApi";

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

    handleFormSubmit = event =>{
      event.preventDefault();
      UserAPI.createUser({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      })
    }

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
            <Button secondary onClick={this.handleFormSubmit}>Sign Up</Button>
            </Form>
          </div>;
    }
}

export default SignUp;