import React, { useState } from "react";
import { Button, Container, Typography, Box } from "@mui/material";

import RandomUppercaseLetters from "./components/RandomUppercaseLetters";
import ArrayOperations from "./components/ArrayOperations";
import HockeyPoints from "./components/HockeyPoints"; // Import the HockeyPoints component

function App() {
  const [currentTask, setCurrentTask] = useState("randomLetters");

  const handleNavigation = (task) => {
    setCurrentTask(task);
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        m: 5,
        maxWidth: 700,
        alignItems: "center",
      }}
    >
      <Typography variant="h3">Programming Tasks</Typography>
      <Box sx={{ display: "flex", gap: 3, m: 5 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleNavigation("randomLetters")}
        >
          Random Uppercase Letters
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleNavigation("arrayOperations")}
        >
          Array Operations
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleNavigation("HockeyPoints")}
        >
          Hockey Teams
        </Button>
      </Box>

      {currentTask === "randomLetters" && <RandomUppercaseLetters />}
      {currentTask === "arrayOperations" && <ArrayOperations />}
      {currentTask === "HockeyPoints" && <HockeyPoints />}
    </Container>
  );
}

export default App;
