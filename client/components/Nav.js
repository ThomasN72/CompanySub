import React, { Component } from "react";
import Link from "next/link";
import NavStyles from './styles/NavStyles';
import { Button, Header, Image, Modal } from "semantic-ui-react";

class Nav extends Component {

  state = {
    loggedIn: true,
    registered : false
  };


  render() {

    let account ;
    if (this.state.loggedIn === true) {
      account = <Link href="/register">
        <a>Account</a>
      </Link>;
    } else {
      if (this.state.registered === false){
        account = <a onclick={this.signUpModal}>Sign Up</a>;
      } else {
        account = <a>Register</a>
      }
    }

    return (
      <NavStyles>
        <Link href="/request-off">
          <a>Request Off</a>
        </Link>
        <Link href="/sub-opportunites">
          <a>Find a Day to Sub</a>
        </Link>
        {account}
      </NavStyles>
    )
  }

}


export default Nav;
