import React, { Component } from "react";
import Link from "next/link";
import NavStyles from './styles/NavStyles';
import styled from "styled-components";
import { Button, Input, Image, Modal } from "semantic-ui-react";


class Nav extends Component {

  render() {

    return <NavStyles>
        <div>
          <h1>LOGO</h1>
        </div>
        <div>
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Button>Sign In</Button>
        </div>
      </NavStyles>;
  }

}


export default Nav;
