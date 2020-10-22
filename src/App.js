import React from "react";
import "./App.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <LoginButton />
        <LogoutButton />
      </header>
    </div>
  );
}

export default App;
