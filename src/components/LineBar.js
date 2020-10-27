import React from "react";
import styled from "styled-components";

const dates = ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"];

function LineBar({ width, height, data, color, percentage, index }) {
  return (
    <LineBarStyled
      style={{
        display: "inline-block",
      }}>
      <svg style={{ marginLeft: 8 }} width={width} height={height}>
        <path d={data} fill={color} />
      </svg>
      <TitleStyled
      //   style={{ fontSize: 12, textAlign: "center" }}
      >
        <span style={{ display: "block", fontSize: "16px" }}>
          {dates[index]}
        </span>
        <span style={{ display: "block" }}> {percentage}</span>
      </TitleStyled>
    </LineBarStyled>
  );
}

const LineBarStyled = styled.div`
  display: inline-block;
`;

const TitleStyled = styled.p`
  font-size: 12px;
  /* line-height: 0; */
  text-align: center;
  color: #ffffff;
`;

export default LineBar;
