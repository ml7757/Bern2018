import React, { PureComponent } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import PropTypes from "prop-types";
import "./Navigation.css";

export class Navigation extends PureComponent {
  static propTypes = {
    sticky: PropTypes.bool.isRequired
  };

  render() {
    return (
      <Navbar className={this.props.sticky ? "fixed" : ""} id="navbar-scroll">
        <Navbar.Header>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="/#story">Our Story</NavItem>
            <NavItem eventKey={2} href="/#when-and-where">When & Where</NavItem>
            <NavItem eventKey={3} href="https://julesandmatt2018-rsvp.herokuapp.com/">RSVP</NavItem>
            <NavItem eventKey={4} href="/#trip-planning">Plan Your Trip</NavItem>
            <NavItem eventKey={5} href="/#gifts">Gifts</NavItem>
            <NavItem eventKey={6} href="/#brideGuide">{"Bride's Guide"}</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
