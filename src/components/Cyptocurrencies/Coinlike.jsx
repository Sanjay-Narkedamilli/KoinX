import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, CardMedia, Box } from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

const Coinlike = () => {
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
      setTrendingCoins(data.coins);
    } catch (error) {
      console.error("Error fetching trending coins:", error);
    }
  };

  return (
    <>
      <h2 style={{ margin: "20px" }}>You May Also Like</h2>
      <div style={{ display: "flex", overflowX: "auto", padding: "16px" }}>
        {trendingCoins.map((coin, index) => (
          <Card
            key={index}
            style={{
              minWidth: 275,
              marginRight: "16px",
              backgroundColor: "#FFFFFF",
              width: "150px",
            }}
          >
            <CardContent style={{ display: "flex", alignItems: "center" }}>
              <CardMedia
                component="img"
                src={coin.item.large}
                style={{ height: 50, width: 50, marginRight: "8px" }}
              />
              <Typography variant="h6" component="h3">
                {coin.item.symbol}
              </Typography>
              <Box
                style={{
                  backgroundColor:
                    coin.item.data.price_change_percentage_24h.usd > 0
                      ? "#4caf50"
                      : "#f44336",
                  color: "#FFFFFF",
                  padding: "4px",
                  borderRadius: "4px",
                  marginLeft: "auto",
                }}
              >
                <Typography variant="body2" component="span">
                  {coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%
                </Typography>
              </Box>
            </CardContent>
            <CardContent>
              <Typography variant="body2" color="textSecondary" gutterBottom>
                <b style={{ color: "black" }}>{coin.item.data.price}</b>
              </Typography>
              <Typography variant="body2" color="textSecondary">
                <img
                  src={coin.item.data.sparkline}
                  alt={`${coin.item.name} graph`}
                />
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
      <h2 style={{ margin: "20px" }}>Trending Coins</h2>
      <div style={{ display: "flex", overflowX: "auto", padding: "16px" }}>
        {trendingCoins.map((coin, index) => (
          <Card
            key={index}
            style={{
              minWidth: 275,
              marginRight: "16px",
              backgroundColor: "#FFFFFF",
            }}
          >
            <CardContent style={{ display: "flex", alignItems: "center" }}>
              <CardMedia
                component="img"
                src={coin.item.large}
                style={{ height: 50, width: 50, marginRight: "8px" }}
              />
              <Typography variant="h6" component="h3">
                {coin.item.symbol}
              </Typography>
              <Box
                style={{
                  backgroundColor:
                    coin.item.data.price_change_percentage_24h.usd > 0
                      ? "#4caf50"
                      : "#f44336",
                  color: "#FFFFFF",
                  padding: "4px",
                  borderRadius: "4px",
                  marginLeft: "auto",
                }}
              >
                <Typography variant="body2" component="span">
                  {coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%
                </Typography>
              </Box>
            </CardContent>
            <CardContent>
              <Typography variant="body2" color="textSecondary" gutterBottom>
                <b style={{ color: "black" }}>{coin.item.data.price}</b>
              </Typography>
              <Typography variant="body2" color="textSecondary">
                <img
                  src={coin.item.data.sparkline}
                  alt={`${coin.item.name} graph`}
                />
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Coinlike;
