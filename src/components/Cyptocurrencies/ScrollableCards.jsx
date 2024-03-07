import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

const ScrollableCards = () => {
  return (
    <div style={{ display: "flex", overflowX: "auto", padding: "16px" }}>
      <Card
        style={{
          minWidth: 275,
          marginRight: "16px",
          backgroundColor: "#4caf50",
        }}
      >
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
      <Card
        style={{
          minWidth: 275,
          marginRight: "16px",
          backgroundColor: "#2196f3",
        }}
      >
        <CardContent>
          <Typography variant="h6" component="h2">
            Lorem ipsum dolor sit amet.
          </Typography>
          <Typography color="textSecondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            inventore debitis provident quidem reiciendis quos?
          </Typography>
        </CardContent>
      </Card>
      <Card
        style={{
          minWidth: 275,
          marginRight: "16px",
          backgroundColor: "#4caf50",
        }}
      >
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
