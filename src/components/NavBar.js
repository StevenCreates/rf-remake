import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import LogoutButton from "./LogoutButton";
import RainFocusLogo from "../assets/RainFocusLogo";
import Navigation from "./Navigation";

const NavOpen = styled(motion.nav)`
  background: linear-gradient(#ed1a5d, #351dce);
  width: full;
  display: grid;
  grid-template-rows: 10% 80% 10%;
  padding: 3px;
  height: 100vh;
`;

const NavBar = () => {
  return (
    <>
      <AnimatePresence>
        <NavOpen initial={{ y: -100 }} animate={{ y: 0 }} exit={{ y: -100 }}>
          <div>
            <RainFocusLogo />
          </div>
          <div>
            <Navigation />
          </div>
          <LogoutButton />
        </NavOpen>
      </AnimatePresence>
    </>
  );
};

export default NavBar;
