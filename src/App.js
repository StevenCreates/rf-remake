import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import PieChart from "./components/PieChart";
import Profile from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/LoginButton";

const items = [
  {
    name: "Sold",
    value: 400,
    id: 1,
    color: "	#FF1493",
  },
  {
    name: "Available",
    value: 83,
    id: 2,
  },
  {
    name: "Pre-Sold",
    value: 100,
    id: 3,
  },
];

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <div style={{ position: "relative" }}>
      <header className='App-header'>
        {isAuthenticated && (
          <>
            <NavBar />
            <PieChart items={items} />
          </>
        )}
        {!isAuthenticated && <LoginButton />}
      </header>
    </div>
  );
}

export default App;
