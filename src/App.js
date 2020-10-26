import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import PieChart from "./components/PieChart";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/LoginButton";
import styled from "styled-components";
import InfoGrid from "./components/InfoGrid";
import DashboardChanger from "./components/DashboardChanger";

const items = [
  {
    name: "Website",
    value: 400,
    id: 1,
    color: "#FF1493",
  },
  {
    name: "Box Office",
    value: 83,
    id: 2,
  },
  {
    name: "Entrance",
    value: 100,
    id: 3,
  },
  {
    name: "Still Available",
    value: 100,
    id: 3,
    color: "#696969",
  },
];

const AppGrid = styled.div`
  display: grid;
  grid-template-columns: 11% auto;
`;

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <div style={{ position: "relative" }}>
      <header className='App-header'>
        {!isAuthenticated && (
          <>
            <AppGrid>
              <NavBar />
              <div style={{ marginLeft: "2rem" }}>
                <DashboardChanger />
                <InfoGrid />
                <PieChart items={items} />
              </div>
            </AppGrid>
          </>
        )}
        {isAuthenticated && <LoginButton />}
      </header>
    </div>
  );
}

export default App;
