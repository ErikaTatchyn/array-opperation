import React, { useState } from "react";
import { Button, TextField, Typography, Box } from "@mui/material";

const ArrayOperations = () => {
  const [array, setArray] = useState(generateRandomArray());
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState("");

  function generateRandomArray() {
    const arr = [];
    for (let i = 0; i < 20; i++) {
      arr.push(Math.floor(Math.random() * 10) + 1);
    }
    return arr;
  }

  const handleMaxMin = () => {
    const max = Math.max(...array);
    const min = Math.min(...array);
    setResult(`Max: ${max}, Min: ${min}`);
  };

  const handleCountOccurrences = () => {
    if (userInput >= 1 && userInput <= 10) {
      const count = array.filter((num) => num === parseInt(userInput)).length;
      setResult(`Occurrences of ${userInput}: ${count}`);

      const firstIndex = array.indexOf(parseInt(userInput));
      if (firstIndex !== -1) {
        setResult(
          (prevResult) =>
            `${prevResult}, First occurrence at index ${firstIndex}`
        );
      } else {
        setResult(
          (prevResult) => `${prevResult}, Number not found in the array`
        );
      }
    } else {
      setResult("Please enter a number between 1 and 10.");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 5,
        m: 8,
        maxWidth: 300,
      }}
    >
      <Typography variant="h4">Array Operations</Typography>
      <Box>
        <Typography variant="h6">Array Contents:</Typography>

        {JSON.stringify(array, null, 2)}
      </Box>
      <Button onClick={handleMaxMin}>Find Max and Min</Button>
      <TextField
        label="Enter a number (1-10)"
        type="number"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />{" "}
      <Button onClick={handleCountOccurrences}>Count Occurrences</Button>
      <Typography variant="h6">{result}</Typography>
    </Box>
  );
};

export default ArrayOperations;
