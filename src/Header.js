import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import "./Header.css";
const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="Header">
      <div className="Header__PrimaryHeader">
        <div className="Header__linkWrapper">
          <a href="/">Drive with Ola</a>
        </div>
        <div className="Header__linkWrapper">
          <a href="/">Ola Money</a>
        </div>
        <div className="Header__linkWrapper">
          <a href="/">Ola Corporate</a>
        </div>
        <div className="Header__linkWrapper">
          <a href="/">Ola Foundation</a>
        </div>
        <div className="Header__linkWrapper">
          <a href="/">Share</a>
        </div>
        <div className="Header__linkWrapper">
          <a href="/">Offers</a>
        </div>
        <div className="Header__linkWrapper">
          <a href="/">Support</a>
        </div>
      </div>
      <Navbar className="Header__Secondary" color="white" light expand="md">
        <NavbarToggler onClick={toggle} />
        <NavbarBrand className="ml-5" href="/">
          <img
            src="https://www.olacabs.com/webstatic/img/ola-logo.svg"
            alt="ola"
          />
        </NavbarBrand>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="">Ola Drive</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Ola Select</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Ola Fleet</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Features</NavLink>
            </NavItem>
            <NavItem className="Header__bookNow">
              <button>Book Now</button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
