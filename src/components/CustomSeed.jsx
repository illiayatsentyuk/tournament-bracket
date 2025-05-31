import { useState } from "react";
import { Seed, SingleLineSeed, SeedItem, SeedTeam } from "react-brackets";
import { rounds } from "../rounds/round";
export default function CustomSeed({ seed, breakpoint, roundIndex }) {
  const [editingTeam, setEditingTeam] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [editingScore, setEditingScore] = useState(false);
  const isLineConnector =
    rounds[roundIndex].seeds.length === rounds[roundIndex + 1]?.seeds.length;

  const Wrapper = isLineConnector ? SingleLineSeed : Seed;

  const startEditing = (team) => {
    setEditingTeam(team);
    setInputValue(team?.name || "");
  };

  const startEditingScore = (score) => {
    setEditingScore(score);
    setInputValue(score?.score || 0);
  };

  return (
    <Wrapper mobileBreakpoint={breakpoint} style={{ fontSize: 12 }}>
      <SeedItem>
        <div>
          <SeedTeam>
            {editingTeam === seed.teams[0] ? (
              <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onBlur={() => {
                  if (seed.teams[0]) {
                    seed.teams[0].name = inputValue;
                  }
                  setEditingTeam(false);
                }}
                autoFocus
              />
            ) : (
              <>
                <span onDoubleClick={() => startEditing(seed.teams[0])}>
                  {seed.teams[0]?.name || "NO TEAM"}
                </span>
              </>
            )}
            {editingScore === seed.score[0] ? (
              <input
                value={inputValue}
                type="number"
                style={{ width: "30px" }}
                min={0}
                max={100}
                onChange={(e) => setInputValue(e.target.value)}
                onBlur={() => {
                  if (seed.score[0]) {
                    seed.score[0].score = inputValue;
                  }
                  setEditingScore(false);
                }}
                autoFocus
              />
            ) : (
              <span onDoubleClick={() => startEditingScore(seed.score[0])}>{seed.score[0]?.score &&  `${seed.score[0]?.score}`}</span>
            )}
          </SeedTeam>
          <SeedTeam>
            {editingTeam === seed.teams[1] ? (
              <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onBlur={() => {
                  if (seed.teams[1]) {
                    seed.teams[1].name = inputValue;
                  }
                  setEditingTeam(false);
                }}
                autoFocus
              />
            ) : (
              <>
                <span onDoubleClick={() => startEditing(seed.teams[1])}>
                  {seed.teams[1]?.name || "NO TEAM"}
                </span>
              </>
            )}
            {editingScore === seed.score[1] ? (
              <input
                value={inputValue}
                type="number"
                style={{ width: "30px" }}
                min={0}
                max={100}
                onChange={(e) => setInputValue(e.target.value)}
                onBlur={() => {
                  if (seed.score[1]) {
                    seed.score[1].score = inputValue;
                  }
                  setEditingScore(false);
                }}
                autoFocus
              />
            ) : (
              <span onDoubleClick={() => startEditingScore(seed.score[1])}>{seed.score[1]?.score &&  `${seed.score[1]?.score}`}</span>
            )}
          </SeedTeam>
        </div>
      </SeedItem>
    </Wrapper>
  );
}
