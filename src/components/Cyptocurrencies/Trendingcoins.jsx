import React, { useState, useEffect } from "react";
import './trendingcoins.css'
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const TrendingCoins = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);
  useEffect(() => {
    fetchTrendingCoins();
  }, []);
  const fetchTrendingCoins = async () => {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/search/trending"
      );
      const data = await response.json();
      setTrendingCoins(data.coins.slice(0, 3)); // Extracting top 3 trending coins
    } catch (error) {
      console.error("Error fetching trending coins:", error);
    }
  };
  const PriceChangeIndicator = ({ value }) => {
    return (
      <>
        {value >= 0 ? (
          <ArrowDropUpIcon style={{ color: "green" }} />
        ) : (
          <ArrowDropDownIcon style={{ color: "red" }} />
        )}
      </>
    );
  };

  const PriceChangeDisplay = ({ priceChange }) => {
    const priceChangeClassName = priceChange >= 0 ? "greenc" : "redc";
    const clr = priceChange >= 0 ? "greenper" : "redper";
    return (
      <div className={clr}>
        <PriceChangeIndicator value={priceChange} />
        <span className="per" style={{ color: clr }}>
          {Math.abs(priceChange).toFixed(2)}%
        </span>
      </div>
    );
  };

  return (
    <div className="bx">
      <h2 className="heading">Trending Coins (24h)</h2>
      {trendingCoins.map((coin, index) => (
        <div key={index} className="cin">
            <div className="cnt"><img
            src={coin.item.small}
            alt={coin.item.name}
            style={{ width: "30px", height: "30px" }}
          />
          <span className="coin-text">
            {coin.item.name} ({coin.item.symbol})
            </span></div>
            <PriceChangeDisplay 
              priceChange={coin.item.data.price_change_percentage_24h.inr}
            />
        </div>
      ))}
    </div>
  );
};

export default TrendingCoins;
