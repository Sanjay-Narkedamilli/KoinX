import React from "react";
import "./links.css";

const Links = () => {
  return (
    <div className="linkview" style={{ marginTop:"5px",height: "20px", overflowY: "scroll" }}>
      <div className="overview1">Overview</div>
      <div className="overview">Fundamentals</div>
      <div className="overview">NewInsights</div>
      <div className="overview">Sentiments</div>
      <div className="overview">Team</div>
      <div className="overview">Technicals</div>
      <div className="overview">Tokenomics</div>
    </div>
  );
};

export default Links;
