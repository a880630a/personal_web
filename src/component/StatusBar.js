import React from "react";

function StatusBar(props) {
  const { percentage, bord, name, img } = props;
  return (
    <div className="data-bar">
      <div className="number">
        {name}
        <img src={img} alt={img} width="40px" />
        <div
          className="full-bar"
          style={{
            width: "100%",
            border: `${bord}px solid`,
            borderRadius: "5px"
          }}
        >
          <div
            data-aos="fade-right"
            data-aos-duration="1500"
            className="bar"
            style={{
              width: `${percentage}%`,
              border: `${bord}px solid`,
              borderRadius: "5px"
            }}
          ></div>
        </div>
        {percentage}%
      </div>
    </div>
  );
}
export default StatusBar;
