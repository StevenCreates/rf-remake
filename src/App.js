import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import PieChart from "./components/PieChart";
import Profile from "./components/Profile";

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
