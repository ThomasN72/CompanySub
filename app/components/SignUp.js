import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
class SignUp extends Component {

    state = {
        name : '', 
        email : '', 
        password : '',
        loggedIn: 'false',
        registered: 'false'
    }

    saveToState = e => {
        console.log("BEFORE SET STATE...", this.state);
        console.log(e.target.name, e.target.value);
        this.setState({ [e.target.name]: e.target.value });
        console.log("AFTER SET STATE...", this.state);        
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
            <Button secondary>Sign Up</Button>
            </Form>

          </div>;
    }

}

export default SignUp;