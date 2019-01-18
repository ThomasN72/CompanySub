import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import UserAPI from "./utils/usersApi";
import Router from "next/router";

class SignUp extends Component {

    state = {
        firstName : '', 
        lastName : '', 
        email : '', 
        phoneNumber : '',
        password : '',
        isRegistered: false
    }

    componentDidMount = () => {
      UserAPI.getUsers()
        .then(res => {
          console.log(res);
        })
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
      })
      .then(res => {
        this.setState({firstName: "", lastName: "", email: "", phoneNumber: "", password: ""})
        Router.push('/feed')
      })
      .catch(err => console.error(err))
    }

    render() {

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