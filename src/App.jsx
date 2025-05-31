import { Bracket } from "react-brackets";
import CustomSeed from "./components/CustomSeed";
import { rounds } from "./rounds/round";

export default function App() {
  return <Bracket style={{width: "100%",margin: "0 auto"}} rounds={rounds} renderSeedComponent={CustomSeed} />;
}
