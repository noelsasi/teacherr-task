import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
  // NavbarText
} from "reactstrap";

const NavBar = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand className="d-md-none d-block" href="/">
          Navigation
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-md-4 p-2" navbar>
            <NavItem>
              <NavLink href="/components/">PSD WEBSITES</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">UI KITS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">PREMIUM PSD FILES</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">ABOUT</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">BLOG</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
