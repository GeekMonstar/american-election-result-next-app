import styles from "./page.module.scss";
import MainResult from "@/components/MainResult";
import { getResult } from "./action";
import GolbalResults from "@/components/GolbalResults";



export default async function Home() {
  const result = await getResult();
  console.log(result.results_by_state);
  return (
    <div className={styles.container}>
      <MainResult result={result} />
      <GolbalResults resultsByState={result.results_by_state} />
    </div>
  );
}

export interface Result {
  candidates: {
    electoral_votes: number
    name: "Donald Trump" | "Kamala Harris"
    party: "Republican" | "Democratic"
  }[],
  results_by_state: StateResult[],
  year: 2024
}

export interface StateResult{
  code: string
  electoral_votes: number
  popular_vote: {Trump: number, Harris: number}
  state: string
  winner: "Trump"|"Harris"
}
