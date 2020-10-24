import React from "react";
import "./App.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import { PieChart } from "./components/PieChart";
import Profile from "./components/Profile";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <LoginButton />
        <LogoutButton />
        <Profile />
        <PieChart />
      </header>
    </div>
  );
}

export default App;
