import React, { Component } from "react";
import Link from "next/link";
import NavStyles from './styles/NavStyles';
import styled from "styled-components";
import { Button, Input, Image, Modal } from "semantic-ui-react";
import UserAPI from "./utils/usersApi";


class Nav extends Component {

  state = {
    email: '',
    password: ''
  }

  saveToState = e => { this.setState({ [e.target.name]: e.target.value })}

  handleFormSubmit = event => {
    console.log(this.state)
    event.preventDefault();
    UserAPI.getUser({
      email: this.state.email,
      password: this.state.password
    })
      .then(res => {
        this.setState({ email: "", password: "" })
        console.log("Response: ", res);
        // Router.push('/feed')
      })
      .catch(err => console.error(err))
  }

  render() {

    return <NavStyles>
        <div>
          <h1>LOGO</h1>
        </div>
        <div>
          <Input type='email' name='email' value={this.state.email} placeholder="Email" onChange={this.saveToState} />
          <Input type='password' name='password' value={this.state.password} placeholder="Password" onChange={this.saveToState}/>
          <Button onClick={this.handleFormSubmit}>Sign In</Button>
        </div>
      </NavStyles>;
  }

}


export default Nav;
