"use client";
import Image from "next/image";
import { StateResult as StateResultType } from "@/app/page";
import styles from "@/app/page.module.scss";
import { useEffect, useState } from "react";

export default function StateResult({result}:{result: StateResultType}) {
    const [currentPercentages, setCurrentPercentages] = useState({harris: 0, trump: 0});
    const harrisPopularVote = result.popular_vote.Harris;
    const trumpPopularVote = result.popular_vote.Trump;
    const harrisPercent = Math.trunc(harrisPopularVote/(trumpPopularVote+harrisPopularVote)*100);
    const trumpPercent = 100 - harrisPercent;
    const winner = result.winner;
    useEffect(() => {
        const timer = setTimeout(() => {
            if(currentPercentages.harris < harrisPercent) {
                setCurrentPercentages(prev => ({...prev, harris: prev.harris+1}));
            }
            if(currentPercentages.trump < trumpPercent) {
                setCurrentPercentages(prev => ({...prev, trump: prev.trump+1}));
            }
        }, 10);
        if(currentPercentages.harris >= harrisPercent && currentPercentages.trump >= trumpPercent) {
            clearTimeout(timer);
        }
        return () => clearTimeout(timer);
    }, [currentPercentages]);
    return (
    <div className={styles["state-result"]}>
        <h3 style={{fontWeight: "600"}}>{result.state} ({result.code})</h3>
        <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 10px 0 0"}}>
            <p>Grands électeurs: {result.electoral_votes}</p>
            <div style={{width: "32px", height: "32px", borderRadius: "50%", background: winner === "Trump" ? "#cf2035b0" : "#4d65ffb0", outline: `3px solid ${winner === "Trump" ? "#CF2035" : "#4d65ff"}`, overflow: "hidden"}}>
                <Image src={`/images/avatars/${winner === "Trump" ? "Trump" : "Harris"}.png`} alt={winner === "Trump" ? "Donald Trump" : "Kamala Harris"} width={32} height={32} />
            </div>
        </div>
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <p>{harrisPopularVote}</p>
            <p>{trumpPopularVote}</p>
        </div>
        <div className={styles["state-result__bar"]}>
            <div style={{width: `${currentPercentages.harris}%`, backgroundColor: "#4d65ff", display: "flex", justifyContent: "start", alignItems: "center", color: "#FFF", paddingLeft: "5px"}}>
                {currentPercentages.harris}%
            </div>
            <div style={{width: `${currentPercentages.trump}%`, backgroundColor: "#CF2035", display: "flex", justifyContent: "end", alignItems: "center", color: "#FFF", paddingRight: "5px"}}>
                {currentPercentages.trump}%
            </div>
        </div>
    </div>
)}