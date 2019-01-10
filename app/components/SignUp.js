import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import UserAPI from "./utils/usersApi";

class SignUp extends Component {

    state = {
        firstName : '', 
        lastName : '', 
        email : '', 
        phoneNumber : '',
        password : '',
        isRegistered: false
    }

    saveToState = e => {
        this.setState({ [e.target.name]: e.target.value });
        console.log("AFTER SET STATE...", this.state);        
    }

    handleFormSubmit = event =>{
      event.preventDefault();
      UserAPI.createUser({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        phoneNumber: this.state.phoneNumber,
        password: this.state.password
      });
    }

    render() {

      // if (this.state.isRegistered) {
      //   let form = <h1>Sign In</h1>;
      // } else {
      //   let form =  <h1>Register</h1>
      // }
        return <div>
            
            <Form>
            <Form.Field>
              <label htmlFor="firstName">
                First Name
                  <input  name="firstName" placeholder="First Name" value={this.state.fistName} onChange={this.saveToState} />
              </label>
            </Form.Field>
            <Form.Field>
              <label htmlFor="lastName">
                Last Name
                  <input name="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.saveToState} />
              </label>
            </Form.Field>
              <Form.Field>
                <label htmlFor="email">
                  Email
                  <input type="email" name="email" placeholder="email" value={this.state.email} onChange={this.saveToState} />
                </label>
              </Form.Field>
              <Form.Field>
                <label htmlFor="phoneNumber">
                  Phone Number
                  <input name="phoneNumber" placeholder="Phone Number" value={this.state.phoneNumber} onChange={this.saveToState} />
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