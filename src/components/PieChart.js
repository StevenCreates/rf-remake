import React from "react";
import styled from "styled-components";
import { AnimatePresence, motion, useViewportScroll } from "framer-motion";

export const PieChart = ({ size, valueObj, colorScheme }) => {
  const { scrollYProgress } = useViewportScroll();
  console.log(scrollYProgress);

  const PieChart = styled(motion.div)`
    position: relative;
    border-radius: 50%;
    height: 100px;
    width: 100px;
  `;

  const ValueStyles = {
    background: `conic-gradient(yellowgreen 10%, gold 0 70%, teal 20% )`,
  };
  const Values = [
    { label: "Sold", Amount: 100 },
    { label: "Available", Amount: 100 },
    { label: "Pre-Sold", Amount: 239 },
  ];

  React.useEffect(() => {
    const TotalValues = Values.map((value) => value.Amount);
    console.log(TotalValues);
    let total = TotalValues.reduce((a, b) => a + b, 0);
    console.log("total", total);
  }, [Values]);

  return (
    <AnimatePresence>
      <PieChart style={ValueStyles} animate={{}} transform={{ rotate: 0.5 }} />
    </AnimatePresence>
  );
  //   return <PieChart
  //   animate={{}}
  //   ></PieChart>;
};
