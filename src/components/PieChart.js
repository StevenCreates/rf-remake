import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const strokeWidth = 17;
const Pie = styled.svg`
  cursor: pointer;
  width: 30vh;
  background: #ffffff00;
  border-radius: 50%;
  transform: rotate(-90deg);
  filter: drop-shadow(0 0 0.5rem rgba(0, 0, 0, 0.5));
  & circle {
    fill: none;
    stroke-width: ${strokeWidth};
    cursor: pointer;
    transition: 0.2s;
    transform-origin: 50% 50%;
    &:hover {
      stroke-width: ${strokeWidth === 30 ? 30 : strokeWidth + 1};
      transform: scale(1.1);
    }
    animation: fillup 0.8s ease-out forwards;
  }
  @keyframes fillup {
    from {
      stroke-dasharray: 0 100;
    }
  }
  @media (max-width: 475px) {
    width: 44vh;
  }
`;

const Legend = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: auto;
  max-width: 70%;
  flex-wrap: wrap;
  & li {
    display: flex;
    align-items: center;
    margin: 3px 10px;
    font-size: 16px;
    letter-spacing: 1px;
    color: #fff;
    text-transform: capitalize;
  }
  & span {
    width: 20px;
    height: 20px;
    margin-right: 20px;
    border: 1px solid #fff;
    border-radius: 50%;
  }
`;

const PieChart = ({ items }) => {
  const colors = [];
  const percents = [];
  const offsets = [0];
  let strokeDashoffset = 0;
  let totalValue = 0;

  const prepareData = () => {
    for (let key in items) totalValue += items[key].value;
    items.forEach((item) => {
      item.color
        ? colors.push(item.color)
        : colors.push(
            "#" + (Math.random().toString(16) + "000000").substring(2, 8)
          );
    });
    items.forEach((item) => percents.push((item.value * 100) / totalValue));
    items.forEach((item, i) => offsets.push((strokeDashoffset -= percents[i])));
    offsets.pop();
  };
  prepareData();

  if (items.length === 0) return <p style={{ color: "white" }}>No items</p>;
  return (
    <PieContainer>
      <Pie viewBox='0 0 60 60' className='pie'>
        {items.map((item, i) => (
          <>
            <motion.circle
              key={item.id}
              data-tip={`${item.name}<br/>${item.value}: ${percents[i].toFixed(
                2
              )}%`}
              r='25%'
              cx='50%'
              cy='50%'
              style={{
                color: "white",
                fontSize: "24px",
                strokeDasharray: `${percents[i]} 100`,
                strokeDashoffset: `${offsets[i]}`,
                stroke: `${colors[i]}`,
              }}></motion.circle>
          </>
        ))}
      </Pie>

      <Legend>
        {items.map((item, i) => (
          <li key={item.name}>
            <span key={item.id} style={{ background: `${colors[i]}` }}></span>
            {item.name} {`${percents[i].toFixed(2)}%`}
          </li>
        ))}
      </Legend>
    </PieContainer>
  );
};

const PieContainer = styled.div`
  margin-top: 2rem;
  text-align: center;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  height: 400px;
  width: 400px;
  padding: 1rem 0 1rem 0;
`;

export default PieChart;
