import React from "react";
import { Card, CardContent, Typography, makeStyles } from "@material-ui/core";
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

const ScrollableCards = () => {
  const classes = useStyles();

  return (
    <div className={classes.scrollContainer}>
      <Card className={`${classes.card} ${classes.greenCard}`}>
        <CardContent>
          <Typography variant="h6" component="h3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
            unde!
          </Typography>
          <Typography color="textSecondary">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex quod
            aspernatur sequi neque tenetur? Dicta illo, repudiandae nisi
            pariatur delectus culpa neque vitae ipsa maxime!
          </Typography>
        </CardContent>
      </Card>
      <Card className={`${classes.card} ${classes.blueCard}`}>
        <CardContent>
          <Typography variant="h6" component="h2">
            Lorem ipsum dolor sit amet.
          </Typography>
          <Typography color="textSecondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam inventore debitis provident quidem reiciendis quos?</Typography>
        </CardContent>
      </Card>
      <Card className={`${classes.card} ${classes.greenCard}`}>
        <CardContent>
          <Typography variant="h6" component="h3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
            unde!
          </Typography>
          <Typography color="textSecondary">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex quod
            aspernatur sequi neque tenetur? Dicta illo, repudiandae nisi
            pariatur delectus culpa neque vitae ipsa maxime!
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default ScrollableCards;
