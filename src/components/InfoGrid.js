import React from "react";
import styled from "styled-components";

export default function InfoGrid({ data, color }) {
  return (
    <div>
      <TopGrid>
        {data.map((data, i) => (
          <TopCard key={data + i}>
            <span style={{ color: color }} className='numberStat'>
              14,034
            </span>
            <span className='title'>Total Registered</span>
          </TopCard>
        ))}
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
  border-radius: 4px;
  padding-top: 1rem;
  background: #ffffff;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  .numberStat {
    font-size: 75px;
  }
  .title {
    margin-top: 0.1rem;
    font-size: 24px;
    display: block;
    font-weight: 400;
  }
`;
