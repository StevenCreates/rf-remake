import React from "react";
import Popper from "popper.js";
import InfoIcon from "../assets/images/InfoIcon";

const Tooltip = () => {
  const [tooltipShow, setTooltipShow] = React.useState(false);
  const iconRef = React.createRef();
  const tooltipRef = React.createRef();
  const openLeftTooltip = () => {
    new Popper(iconRef.current, tooltipRef.current, {
      placement: "left",
    });
    setTooltipShow(true);
  };
  const closeLeftTooltip = () => {
    setTooltipShow(false);
  };
  return (
    <>
      <div className='inline-block max-h-full'>
        <div>
          <div
            className='text-gray-500 pt-3 mr-3 h-8'
            style={{ transition: "all .15s ease" }}
            onMouseEnter={openLeftTooltip}
            onMouseLeave={closeLeftTooltip}
            ref={iconRef}>
            <InfoIcon />
          </div>

          <div
            className={
              (tooltipShow ? "" : "hidden ") +
              "bg-teal-600 border-0 mr-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg"
            }
            ref={tooltipRef}>
            <div>
              <div className='text-white p-3'>
                Turning switch on will display all tickets, not just P2E
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function TooltipRender() {
  return (
    <>
      <Tooltip />
    </>
  );
}
