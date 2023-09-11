import React, { useState } from "react";
import { Button, Typography, Box } from "@mui/material";

const RandomUppercaseLetters = () => {
  const [lettersArray, setLettersArray] = useState([]);
  const [middleCharacter, setMiddleCharacter] = useState(""); // New state to store the middle character

  const generateRandomLettersArray = () => {
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const randomLetters = [];

    for (let i = 0; i < 35; i++) {
      const randomIndex = Math.floor(Math.random() * uppercaseLetters.length);
      const randomLetter = uppercaseLetters[randomIndex];
      randomLetters.push(randomLetter);
      setMiddleCharacter("");
    }

    return randomLetters;
  };

  const sortArray = () => {
    const sortedArray = [...lettersArray].sort();
    setLettersArray(sortedArray);
  };

  const findMiddleCharacter = () => {
    const middleIndex = Math.floor(lettersArray.length / 2);
    setMiddleCharacter(`Middle character: ${lettersArray[middleIndex]}`);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        m: 5,
        maxWidth: 600,
      }}
    >
      <Typography variant="h4">Random Uppercase Letters</Typography>
      <Button onClick={() => setLettersArray(generateRandomLettersArray())}>
        Generate Letters
      </Button>
      <Button onClick={sortArray}>Sort Letters</Button>
      <Button onClick={findMiddleCharacter}>Find Middle Character</Button>
      <Box>
        <Typography variant="h6">Generated Letters:</Typography>
        {lettersArray.join(" ")}
      </Box>
      <Box>
        <Typography variant="h6">{middleCharacter}</Typography>
      </Box>
    </Box>
  );
};

export default RandomUppercaseLetters;
