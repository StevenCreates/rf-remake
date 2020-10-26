import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import MenuIcon from "../assets/MenuIcon";
import CloseMenuIcon from "../assets/CloseMenuIcon";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const NavOpen = styled(motion.nav)`
  background: linear-gradient(#ed1a5d, #351dce);
  width: full;
  display: grid;
  grid-template-rows: 10% 80% 10%;
  padding: 3px;
  height: 100vh;
`;

const NavClosed = styled(motion.nav)`
  background: #ed1a5d;
  width: 2vw;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  /* padding: 0.2rem; */
  margin-top: 1.5rem;
  border-radius: 10px;
  height: 2rem;
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
      {open && (
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
      {!open && (
        <AnimatePresence>
          <NavOpen initial={{ y: -100 }} animate={{ y: 0 }} exit={{ y: -100 }}>
            <div>Logo</div>
            <div>Navigation</div>
            <LogoutButton />
          </NavOpen>
        </AnimatePresence>
      )}
    </>
  );
};

export default NavBar;
