import React, { useState } from "react";
import {
  Button,
  Container,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const HockeyPoints = () => {
  const teams = [
    { name: "Team A", wins: 2, draws: 1, losses: 2 },
    { name: "Team B", wins: 3, draws: 0, losses: 2 },
    { name: "Team C", wins: 1, draws: 2, losses: 2 },
    { name: "Team D", wins: 2, draws: 1, losses: 2 },
    { name: "Team E", wins: 0, draws: 3, losses: 2 },
  ];

  const [results, setResults] = useState([]);

  const calculatePoints = () => {
    const updatedResults = teams.map((team) => {
      const points = team.wins * 3 + team.draws;
      return { ...team, points };
    });
    setResults(updatedResults);
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        alignItems: "center",
      }}
    >
      <Typography variant="h4">Hockey Team Points Calculator</Typography>
      <Button onClick={calculatePoints}>Calculate Points</Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Team</TableCell>
              <TableCell>Wins</TableCell>
              <TableCell>Draws</TableCell>
              <TableCell>Losses</TableCell>
              <TableCell>Points</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {results.map((team, index) => (
              <TableRow key={index}>
                <TableCell>{team.name}</TableCell>
                <TableCell>{team.wins}</TableCell>
                <TableCell>{team.draws}</TableCell>
                <TableCell>{team.losses}</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>{team.points}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default HockeyPoints;
