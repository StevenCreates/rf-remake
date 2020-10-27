import React from "react";
import styled from "styled-components";
import SearchIcon from "../assets/SearchIcon";

const Navigation = () => {
  return (
    <NavContainer>
      <FirstNav>
        <SearchItems>
          <IconStyled>
            <SearchIcon />
          </IconStyled>
          Search
        </SearchItems>
        <SearchItems>Recents</SearchItems>
      </FirstNav>
      <Nav>
        <NavItems>My Nav</NavItems>
        <NavItems>Work Flows</NavItems>
        <NavItems>Registration</NavItems>
        <NavItems>Content</NavItems>
        <NavItems>Meetings</NavItems>
      </Nav>
    </NavContainer>
  );
};

const FirstNav = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;
const SearchItems = styled.li`
  font-size: 20px;
  font-weight: 700;
`;
const Nav = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;
const NavItems = styled.li``;

const NavContainer = styled.div`
  padding-left: 1.5rem;
  color: #ffffff;
`;

const IconStyled = styled.div`
  color: #ffffff;
  width: 1.5rem;
  display: inline-block;
  padding-right: 0.5rem;
`;

export default Navigation;
