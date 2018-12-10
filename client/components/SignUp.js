import React, { Component } from "react";

class SignUp extends Component {

    state = {
        name : '', 
        email : '', 
        password : '',
        company : '',
        position : '', 
        location : ''
    }

    saveToState = e => {
        console.log("BEFORE SET STATE...", this.state);
        console.log(e.target.name, e.target.value);
        this.setState({ [e.target.name]: e.target.value });
        console.log("AFTER SET STATE...", this.state);        
    }

    render() {
        return <div>
            <h1>Sign Up Bellow</h1>
            <label htmlFor="email">
              Email
              <input type="email" name="email" placeholder="email" value={this.state.email} onChange={this.saveToState} />
            </label>
            <label htmlFor="name">
              name
              <input type="name" name="name" placeholder="name" value={this.state.name} onChange={this.saveToState} />
            </label>
            <label htmlFor="password">
              password
              <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.saveToState} />
            </label>
            <label htmlFor="location">
              Location
              <input type="location" name="location" placeholder="location" value={this.state.location} onChange={this.saveToState} />
            </label>
            <label htmlFor="company">
              company
              <input type="company" name="company" placeholder="company" value={this.state.company} onChange={this.saveToState} />
            </label>
            <label htmlFor="position">
              position
              <input type="position" name="position" placeholder="position" value={this.state.position} onChange={this.saveToState} />
            </label>
            <button type="button" class="btn btn-primary btn-lg">
              Large button
            </button>
          </div>;
    }

}

export default SignUp;