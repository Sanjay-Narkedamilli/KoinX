import React from "react";
import { Card, CardContent, Typography, makeStyles } from "@material-ui/core";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
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
  },
  greenCard: {
    backgroundColor: "#4caf50",
  },
  blueCard: {
    backgroundColor: "#2196f3",
  },
}));

const Twocards = () => {
  const classes = useStyles();

  return (
    <div className={classes.scrollContainer}>
      <Card
        className={`${classes.card} ${classes.greenCard}`}
        style={{ width: "50%", height: "20vh" }}
      >
        <CardContent style={{ display: "flex" }}>
          <img
            src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/06/stock-photography-trends11.jpg"
            alt=""
            style={{ width: "30%", height: "15vh" }}
          />
          <div>
            <Typography variant="h6" component="h3" style={{ margin: "10px" }}>
              Calculate your Profits
            </Typography>
            <Typography color="textSecondary">
              <div>
                <button className="custom-button">
                  <span>Check Now</span>
                  <span className="icon-container">
                    <ArrowForwardIcon className="icn" color="white" />
                  </span>
                </button>
              </div>
            </Typography>
          </div>
        </CardContent>
      </Card>
      <Card
        className={`${classes.card} ${classes.blueCard}`}
        style={{ width: "50%", height: "20vh" }}
      >
        <CardContent style={{ display: "flex" }}>
          <img
            src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/06/stock-photography-trends11.jpg"
            alt=""
            style={{ width: "30%", height: "15vh" }}
          />
          <div>
            <Typography variant="h6" component="h3" style={{ margin: "10px" }}>
              Calculate your Tax liability
            </Typography>
            <Typography color="textSecondary">
              <div>
                <button className="custom-button">
                  <span>Check Now</span>
                  <span className="icon-container">
                    <ArrowForwardIcon className="icn" color="white" />
                  </span>
                </button>
              </div>
            </Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Twocards;
