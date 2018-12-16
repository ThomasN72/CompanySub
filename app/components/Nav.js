import React, { Component } from "react";
import Link from "next/link";
import NavStyles from './styles/NavStyles';
// import { Button, Header, Image, Modal } from "semantic-ui-react";

class Nav extends Component {



  render() {

    return (
      <NavStyles>
        <Link href="/request-off">
          <a>Request Off</a>
        </Link>
        <Link href="/sub-opportunites">
          <a>Find a Day to Sub</a>
        </Link>
        <Link href="register">
          <a>Sign Up/Login</a>
        </Link>
      </NavStyles>
    )
  }

}


export default Nav;
