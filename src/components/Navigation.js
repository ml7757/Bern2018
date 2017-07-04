import React, { PureComponent } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import "./Navigation.css";

export class Navigation extends PureComponent {
  render() {
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">Link</NavItem>
            <NavItem eventKey={2} href="#">Link</NavItem>
            <NavItem eventKey={3} href="#">Link</NavItem>
            <NavItem eventKey={4} href="#">Link</NavItem>
            <NavItem eventKey={5} href="#">Link</NavItem>
            <NavItem eventKey={6} href="#">Link</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
