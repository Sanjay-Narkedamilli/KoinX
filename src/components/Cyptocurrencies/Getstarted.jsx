import React from 'react'
import './getstarted.css'
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import TrendingCoins from './Trendingcoins';
const Getstarted = () => {
  return (
    <>
    <div className="ad">
      <h2 className="text2">
        Get Started with KoinX
        <br />
        for Free
      </h2>
      <h5 className="text6">
        With our range of features that you can equip for
        <br />
        free, KoinX allows you to be more educated and
        <br />
        aware of your tax reports.
      </h5>
      <img
        className="adimg"
        src="https://www.koinx.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLowerSection.7ba5b083.png&w=384&q=75"
        alt="ad"
      />
      <div>
        <button className="custom-button">
          <span>Get Started for Free</span>
          <span className="icon-container">
            <ArrowForwardIcon className="icn" color='white' />
          </span>
        </button>
      </div>
    </div>
    <TrendingCoins/>
    </>
  );
}

export default Getstarted