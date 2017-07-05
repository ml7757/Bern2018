import React, { PureComponent } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import "./Navigation.css";

export class Navigation extends PureComponent {
  render() {
    return (
      <Navbar collapseOnSelect id="navbar-scroll">
        <Navbar.Header>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#story">Our Story</NavItem>
            <NavItem eventKey={2} href="#">When & Where</NavItem>
            <NavItem eventKey={3} href="#">RSVP</NavItem>
            <NavItem eventKey={4} href="#">Plan Your Trip</NavItem>
            <NavItem eventKey={5} href="#">Gifts</NavItem>
            <NavItem eventKey={6} href="#brideGuide">{"Bride's Guide"}</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
