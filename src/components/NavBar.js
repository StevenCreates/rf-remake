import React from "react";
import styled from "styled-components";
import MenuIcon from "../assets/MenuIcon";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const NavOpen = styled.nav`
  background: hotpink;
  width: 15vw;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  padding: 3px;
  margin-top: 1.5rem;
  margin-left: 1.5rem;
`;

const NavClosed = styled.nav`
  background: hotpink;
  width: 3vw;
  padding: 0.2rem;
  margin-top: 1.5rem;
  margin-left: 1.5rem;
  border-radius: 10px;
`;

const NavBar = () => {
  const [open, setOpen] = React.useState(false);

  const OpenSesame = () => {
    setOpen(true);
  };
  return (
    <>
      {!open && (
        <NavClosed>
          <div type='button' onClick={OpenSesame}>
            <MenuIcon />
          </div>
        </NavClosed>
      )}
      {open && (
        <NavOpen>
          <LoginButton />
          <LogoutButton />
        </NavOpen>
      )}
    </>
  );
};

export default NavBar;
