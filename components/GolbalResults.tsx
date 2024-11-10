"use client";
import styles from "@/app/page.module.scss";
import { Result } from "../app/page";
import StateResult from "./StateResult";
export default function GolbalResults({resultsByState}:{resultsByState: Result["results_by_state"]}) {
  return (
    <div className={styles["global-result"]}>
      <h2>Resultats par état</h2>
      <div className={styles["global-result__container"]}>
        {resultsByState.map(result=> <StateResult key={result.code} result={result} />)}
      </div>
    </div>
  );
}