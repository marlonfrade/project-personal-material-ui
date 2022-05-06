import { Button, styled } from "@mui/material";
import React from "react";

function ExampleBtn() {
  const BlueButton = styled(Button)({
    backgroundColor: "skyblue",
    color: "#888",
    margin: 5,
    "&:hover": {
      backgroundColor: "lightblue",
    },
    "&:disabled": {
      backgroundColor: "gray",
      color: "white",
    },
  });
  return (
    <div>
      <BlueButton />
    </div>
  );
}

export default ExampleBtn;
