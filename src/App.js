import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import PieChart from "./components/PieChart";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/LoginButton";
import styled from "styled-components";
import InfoGrid from "./components/InfoGrid";
import DashboardChanger from "./components/DashboardChanger";
import LineBar from "./components/LineBar";

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
    id: 4,
    color: "#696969",
  },
];
const itemsTwo = [
  {
    name: "California",
    value: 23,
    id: 1,
    color: "#FF1493",
  },
  {
    name: "Utah",
    value: 83,
    id: 2,
  },
  {
    name: "Colorado",
    value: 34,
    id: 3,
  },
];

const data = [
  {
    title: "Total Registered",
    stat: "14,034",
    id: 1,
  },

  {
    title: "Reg. Target",
    stat: "15,000",
    id: 2,
  },
  {
    title: "% of Target",
    stat: "94%",
    id: 3,
  },
  {
    title: "Weeks Out",
    stat: "0",
    id: 4,
  },
];

const AppGrid = styled.div`
  display: grid;
  grid-template-columns: 11% auto;
`;

const SecondGrid = styled.div`
  display: grid;
  grid-template-columns: 30% 30% 40%;
  margin-right: 5rem;
`;

const max = 300;

function App() {
  const { isAuthenticated } = useAuth0();

  const [lineData, setLineData] = React.useState([]);

  React.useEffect(() => {
    genList();
  }, []);

  const genList = () => {
    const list = [];
    for (let i = 0; i < 7; i++) {
      list[i] = Math.random() * 101;
    }
    setLineData(list);
  };

  return (
    <div style={{ position: "relative" }}>
      <header className='App-header'>
        {!isAuthenticated && (
          <>
            <AppGrid>
              <NavBar />
              <div style={{ marginLeft: "2rem" }}>
                <DashboardChanger />
                <InfoGrid data={data} color='#ff1493' />
                <SecondGrid>
                  <PieChart items={items} />
                  <PieChart items={itemsTwo} />
                  <Container>
                    {lineData.map((data, i) => {
                      const y = max - (max * data) / 100;
                      return (
                        <LineBar
                          key={data}
                          index={i}
                          width='50px'
                          height='300px'
                          color='#ea1'
                          percentage={`${Number(data).toFixed(2)} %`}
                          data={`M 0 ${max} L 0  ${y} L 60 ${y} l 60 ${max} Z`}
                        />
                      );
                    })}
                  </Container>
                </SecondGrid>
              </div>
            </AppGrid>
          </>
        )}
        {isAuthenticated && <LoginButton />}
      </header>
    </div>
  );
}

const Container = styled.div`
  display: block;
  margin-top: 2rem;
  text-align: center;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  height: 400px;
  width: auto;
  padding: 1rem 0 1rem 0;
`;

export default App;
