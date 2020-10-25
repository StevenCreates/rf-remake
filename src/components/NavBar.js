import React from "react";
import styled from "styled-components";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const Nav = styled.div``;

const NavBar = () => {
  return (
    <Nav>
      <LoginButton />
      <LogoutButton />
    </Nav>
  );
};

export default NavBar;
