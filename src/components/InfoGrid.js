import React from "react";
import styled from "styled-components";

export default function InfoGrid() {
  return (
    <div>
      <TopGrid>
        <TopCard>
          <span className='numberStat'>14,034</span>
          <span className='title'>Total Registered</span>
        </TopCard>
        <TopCard>
          <span className='numberStat'>15,000</span>
          <span className='title'>Reg. Target</span>
        </TopCard>
        <TopCard>
          <span className='numberStat'>87%</span>
          <span className='title'>% of Target</span>
        </TopCard>
        <TopCard>
          <span className='numberStat'>0</span>
          <span className='title'>Weeks Out</span>
        </TopCard>
      </TopGrid>
    </div>
  );
}

const TopGrid = styled.div`
  display: grid;
  margin-right: 2rem;
  margin-top: 1rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const TopCard = styled.div`
  height: 150px;
  width: 300px;
  text-align: center;
  background: #ffffff;
  border-radius: 4px;
  padding-top: 1rem;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  .numberStat {
    font-size: 75px;
    color: #ff1493;
  }
  .title {
    margin-top: 0.1rem;
    font-size: 24px;
    display: block;
    font-weight: 400;
  }
`;
