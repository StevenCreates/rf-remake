import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import MenuIcon from "../assets/MenuIcon";
import CloseMenuIcon from "../assets/CloseMenuIcon";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const NavOpen = styled(motion.nav)`
  background: hotpink;
  width: 15vw;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  padding: 3px;
  margin-top: 1.5rem;
  margin-left: 1.5rem;
`;

const NavClosed = styled(motion.nav)`
  background: hotpink;
  width: 2vw;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  /* padding: 0.2rem; */
  margin-top: 1.5rem;
  margin-left: 1.5rem;
  border-radius: 10px;
`;

const IconStyled = styled(motion.div)`
  width: 2vw;
`;

const NavBar = () => {
  const [open, setOpen] = React.useState(false);

  const OpenSesame = () => {
    setOpen(true);
  };

  const CloseSesame = () => {
    setOpen(false);
  };
  return (
    <>
      {!open && (
        <AnimatePresence>
          <NavClosed
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}>
            <IconStyled type='button' onClick={OpenSesame}>
              <MenuIcon />
            </IconStyled>
          </NavClosed>
        </AnimatePresence>
      )}
      {open && (
        <AnimatePresence>
          <NavOpen initial={{ y: -100 }} animate={{ y: 0 }} exit={{ y: -100 }}>
            <IconStyled type='button' onClick={CloseSesame}>
              <CloseMenuIcon />
            </IconStyled>
            {/* <LoginButton /> */}
            <LogoutButton />
          </NavOpen>
        </AnimatePresence>
      )}
    </>
  );
};

export default NavBar;
