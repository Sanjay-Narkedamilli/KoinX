// Coins.jsx
import React, { useState,useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./coins.css";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import TradingViewWidget from "./TradingViewWidget";
import Keyevents from "./Keyevents";
import { Height } from "@mui/icons-material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ScrollableCards from "./ScrollableCards";
import Twocards from "./Twocards";
import Tokenomics from "./Tokenomics";
import Team from "./Team";
import Alsolike from "./Alsolike";
import Coinlike from "./Coinlike";
import Getstarted from "./Getstarted";
import Links from "./links/Links";
import Performance from "./links/Performance";

const Coins = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [coin, setCoin] = useState(null);
  const [chartRendered, setChartRendered] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${id}`
        );
        setCoin(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const renderChart = () => {
    setChartRendered(true);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return (
    <div className="full">
      document.title=KoinX - {coin.name};
      <div className="colu1">
        <h5>
          <span className="crycn">Cryptocurrency</span> &gt;&gt; {id}
        </h5>
        <div className="coin">
          <div className="nme">
            <img className="cin-img" src={coin.image.thumb} alt={id} />
            <span className="cin-name ">{coin.name}</span>
            <span className="cin-sym">{coin.symbol.toUpperCase()}</span>
            <div className="rank">
              Rank #<span>{coin.market_cap_rank}</span>
            </div>
          </div>
          <div className="price">
            <span className="price-usd">
              ${coin.market_data.current_price.usd.toLocaleString()}
            </span>
            <div className="pch">
              <PriceChangeDisplay
                priceChange={coin.market_data.price_change_percentage_24h}
              />
            </div>
            <span className="pchr">(24H)</span>
          </div>
          <div className="price">
            <span className="price-inr ">
              ₹{coin.market_data.current_price.inr.toLocaleString()}
            </span>
          </div>
          {!chartRendered && (
            <TradingViewWidget symboli={coin.symbol.toUpperCase()} />
          )}{" "}
          {/* Render TradingViewWidget if chartRendered is false */}
          <div className="chart" onClick={renderChart}>
            {/* This div can be clicked to render the chart */}
          </div>
        </div>
        <div className="links"><Links/></div>
        <div className="performance"><Performance coin={coin}/></div>
        <div className="sentiments">
          <Keyevents />
        </div>

        <div className="about-coin">
          <div className="about-sec">
            <h1>About {coin.name}</h1>
          </div>

          <div className="about-sec">
            <h3>What is {coin.name}?</h3>
          </div>
          <div className="about-sec">
            <p>{coin.description.en.substring(0, 501)}</p>
          </div>
          <div className="about-sec">
            <h3>Lorem ipsum dolor sit amet.</h3>
          </div>
          <div className="about-sec">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              doloremque doloribus aperiam qui praesentium molestiae enim
              dolores, voluptates odit, quos quasi eligendi recusandae animi
              consectetur error corrupti quia dolorem, itaque earum nam
              obcaecati? Veniam sed quas sequi, exercitationem fugiat id odit
              voluptatibus harum odio? Rerum reprehenderit magnam illo
              necessitatibus sunt.
            </p>
          </div>
          <div className="about-sec">
            <h3>Already Holding {coin.name}?</h3>
            <Twocards />
          </div>
        </div>
        <div className="tokenomics">
          <Tokenomics />
        </div>
        <div className="tokenomics">
          <Team />
        </div>
        <div className="alsolike">
          <Coinlike />
        </div>
      </div>
      <div className="colu2">
        <Getstarted />
      </div>
    </div>
  );
};

// PriceChangeDisplay component remains unchanged from your original code
const PriceChangeDisplay = ({ priceChange }) => {
  const clr = priceChange >= 0 ? "greenper" : "redper";
  return (
    <div className={clr}>
      {priceChange >= 0 ? (
        <ArrowDropUpIcon style={{ color: "green" }} />
      ) : (
        <ArrowDropDownIcon style={{ color: "red" }} />
      )}
      <span className="per" style={{ color: clr }}>
        {Math.abs(priceChange).toFixed(2)}%
      </span>
    </div>
  );
};

export default Coins;
