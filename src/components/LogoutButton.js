import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const LogoutButton = () => {
  const { logout } = useAuth0();

  const StyledButton = styled.button`
    margin: 1rem;
    height: 3rem;
    width: 80%;
    background: #ed1a5d;
    border: #ed1a5d solid 1px;
    border-radius: 4px;
    color: #ffffff;
    font-size: 18px;
    font-weight: 700;
  `;

  return (
    <StyledButton onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </StyledButton>
  );
};

export default LogoutButton;
