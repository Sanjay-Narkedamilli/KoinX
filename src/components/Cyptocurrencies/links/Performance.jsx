import React from 'react'
import './performance.css'
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
const Performance = ({coin}) => {
  function calculatePercentage(lowPrice, highPrice, currentPrice) {
    const priceRange = highPrice - lowPrice;
    const distanceFromLow = currentPrice - lowPrice;
    const percentage = (distanceFromLow / priceRange) * 100;
    console.log(percentage);
    return percentage.toFixed(0);
}
  return (
    <div className="perfor">
      <div className="headp">
        <h2>Performance</h2>
      </div>

      <div className="blocki">
        <div className="tlow">
          <div className="ti">Today's Low</div>
          <div className="ti">{coin.market_data.low_24h.usd}</div>
        </div>
        <div className="midle">
          <div className="bar"></div>
          <div
            style={{
              marginLeft:
                calculatePercentage(
                  coin.market_data.low_24h.usd,
                  coin.market_data.high_24h.usd,
                  coin.market_data.current_price.usd
                ) + "%",
            }}
          >
            <div className="upic">
              <ArrowDropUpIcon />
            </div>

            <div className="cprice">$ {coin.market_data.current_price.usd}</div>
          </div>
        </div>

        <div className="thigh">
          <div className="ti">Today's High</div>
          <div className="ti">{coin.market_data.high_24h.usd}</div>
        </div>
      </div>
      <div className="blocki"></div>

      <div className="headf">
        <h3>Fundamentals</h3>
        <div className="tablef">
          <div className="leftf">
            <div className="cdi">
              <div className="heading">{coin.name} Price</div>
              <div className="val">
                ${coin.market_data.current_price.usd.toLocaleString()}
              </div>
            </div>
            <div className="cdi">
              <div className="heading">24h Low / 24h High</div>
              <div className="val">
                ${coin.market_data.low_24h.usd.toLocaleString()} / $
                {coin.market_data.high_24h.usd.toLocaleString()}
              </div>
            </div>
            <div className="cdi">
              <div className="heading">Market Cap Rank</div>
              <div className="val">#{coin.market_cap_rank}</div>
            </div>
          </div>
          <div className="rightf">
            <div className="cdi">
              <div className="heading">Market Cap</div>
              <div className="val">
                ${coin.market_data.market_cap.usd.toLocaleString()}
              </div>
            </div>
            <div className="cdi">
              <div className="heading">All-Time High</div>
              <div className="val">
                ${coin.market_data.ath.usd.toLocaleString()}
                <div className="changer">
                  {coin.market_data.ath_change_percentage.usd.toFixed(2)}%
                </div>
              </div>
            </div>
            <div className="cdi">
              <div className="heading">All-Time Low</div>
              <div className="val">
                {" "}
                ${coin.market_data.atl.usd.toLocaleString()}
                <div className="changeg">
                  {coin.market_data.atl_change_percentage.usd.toFixed(2)}%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Performance