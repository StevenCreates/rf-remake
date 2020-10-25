import React from "react";
import "./App.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import NavBar from "./components/NavBar";
import PieChart from "./components/PieChart";
import Profile from "./components/Profile";

const items = [
  {
    name: "milk",
    value: 150,
    id: 1,
  },
  {
    name: "beer",
    value: 120.9,
    id: 2,
  },
  {
    name: "chips",
    value: 100,
    id: 3,
  },
];

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <NavBar />
        <Profile />
        <PieChart items={items} />
      </header>
    </div>
  );
}

export default App;
