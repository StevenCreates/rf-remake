import React from "react";
import styled from "styled-components";

const Navigation = () => {
  return (
    <>
      <FirstNav>
        <SearchItems>Search</SearchItems>
        <SearchItems>Dashboard</SearchItems>
      </FirstNav>
      <Nav>
        <NavItems>Employees</NavItems>
        <NavItems>Employees</NavItems>
        <NavItems>Employees</NavItems>
      </Nav>
    </>
  );
};

const FirstNav = styled.ul``;
const SearchItems = styled.li``;
const Nav = styled.ul``;
const NavItems = styled.li``;

export default Navigation;
