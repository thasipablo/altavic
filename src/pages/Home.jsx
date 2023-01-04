import { Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { Box } from "@mui/system";
import React from "react";

const Home = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h4" color={blueGrey[700]} fontWeight={600}>
        Welcome to Altavic
      </Typography>
      <Typography variant="body" color={blueGrey[300]}>
        Move beyond the limits of your imagination
      </Typography>
    </Box>
  );
};

export default Home;
