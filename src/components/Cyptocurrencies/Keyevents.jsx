import React from 'react'
import './coins.css'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ScrollableCards from './ScrollableCards';

const Keyevents = () => {
  return (
    <div className="keys">
      <h2 className="sen">Sentiment</h2>
      <h3 className="key">Key Events</h3>
      <ScrollableCards />
      <div>
        <h3 className="ana">Analyst Estimates</h3>
        <div className="anae">
          <div className="cir">
            <h2>76%</h2>
          </div>
          <div className="box">
            <div className="box-cnt">
              Buy <div className="buy"></div>  76%
            </div>
            <div className="box-cnt">
              Hold <div className="hold"></div>  8%
            </div>
            <div className="box-cnt">
              Sell <div className="sell"></div>  16%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Keyevents