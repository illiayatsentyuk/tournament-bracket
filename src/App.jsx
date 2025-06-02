import { Bracket } from "react-brackets";
import CustomSeed from "./components/CustomSeed";
// import { rounds } from "./rounds/round";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

export default function App() {
  const [numberOfTeams, setNumberOfTeams] = useState(null);
  const [tournamentRounds, setTournamentRounds] = useState(null);


  const handleSubmit = (e) => {
    e.preventDefault();
    const generateRounds = (numTeams) => {
      let rounds = [];
      let currentRoundTeams = numTeams;
      let roundNumber = 1;
  
      while (currentRoundTeams > 1) {
        let seeds = [];
        let matchesInRound = Math.floor(currentRoundTeams / 2);
  
        for (let i = 0; i < matchesInRound; i++) {
          seeds.push({
            id: i + 1,
            date: new Date().toDateString(),
            teams: [{ name: null }, { name: null }],
            score: [{ score: 0 }, { score: 0 }],
          });
        }
  
        rounds.push({
          title: `Round ${roundNumber}`,
          seeds: seeds
        });
  
        currentRoundTeams = Math.ceil(currentRoundTeams / 2);
        roundNumber++;
      }
  
      return rounds;
    };
    setTournamentRounds(generateRounds(numberOfTeams));
  };
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <input type="number" value={numberOfTeams} onChange={(e) => setNumberOfTeams(e.target.value)} />
            <button onClick={handleSubmit}>Generate</button>
            {tournamentRounds && <Bracket style={{width: "100%",margin: "0 auto"}} renderSeedComponent={CustomSeed} rounds={tournamentRounds}/>}
          </>
          } />
      </Routes>
    </BrowserRouter>
  );
}
