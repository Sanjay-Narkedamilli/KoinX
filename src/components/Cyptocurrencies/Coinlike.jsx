import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  makeStyles,
  CardMedia,
  Box,
} from "@material-ui/core";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

const useStyles = makeStyles((theme) => ({
  scrollContainer: {
    display: "flex",
    overflowX: "auto",
    padding: theme.spacing(2),
  },
  card: {
    minWidth: 275,
    marginRight: theme.spacing(2),
    backgroundColor: "#FFFFFF", // White background color for all cards
  },
  coinImage: {
    height: 50,
    width: 50,
    marginRight: theme.spacing(1),
  },
  greenBox: {
    backgroundColor: "#4caf50",
    color: "#FFFFFF",
    padding: theme.spacing(0.5),
    borderRadius: theme.spacing(0.5),
    marginLeft: "auto",
  },
  redBox: {
    backgroundColor: "#f44336",
    color: "#FFFFFF",
    padding: theme.spacing(0.5),
    borderRadius: theme.spacing(0.5),
    marginLeft: "auto",
  },
}));

const Coinlike = () => {
  const classes = useStyles();
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
      <div className={classes.scrollContainer}>
        {trendingCoins.map((coin, index) => (
          <Card key={index} className={classes.card} style={{ width: "150px" }}>
            <CardContent style={{ display: "flex", alignItems: "center" }}>
              <CardMedia
                className={classes.coinImage}
                image={coin.item.large}
                title={coin.item.name}
              />
              <Typography variant="h6" component="h3">
                {coin.item.symbol}
              </Typography>
              <Box
                className={
                  coin.item.data.price_change_percentage_24h.usd > 0
                    ? classes.greenBox
                    : classes.redBox
                }
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
      <div className={classes.scrollContainer}>
        {trendingCoins.map((coin, index) => (
          <Card key={index} className={classes.card}>
            <CardContent style={{ display: "flex", alignItems: "center" }}>
              <CardMedia
                className={classes.coinImage}
                image={coin.item.large}
                title={coin.item.name}
              />
              <Typography variant="h6" component="h3">
                {coin.item.symbol}
              </Typography>
              <Box
                className={
                  coin.item.data.price_change_percentage_24h.usd > 0
                    ? classes.greenBox
                    : classes.redBox
                }
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
