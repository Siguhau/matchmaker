import React, { useState } from "react";
import { createArray, createMatchups, rotateTeamsForward } from "../utils/rotate";

export default function Matchmaker() {
    const [numberOfTeams, setNumberOfTeams] = useState(5);
    const [teams, setTeams] = useState(createArray(numberOfTeams));
    const [matchups, setMatchups] = useState(createMatchups(teams));
    
    return (
        <div className="Matchmaker">
        <h1>Matchmaker</h1>

        <button onClick={()=>{
                const newteams = rotateTeamsForward(teams)
                console.log(newteams);
                setTeams(newteams);
                const ma = createMatchups(teams)
                console.log(ma);
                setMatchups(ma);
            }}>
            Next Round
        </button>

        {matchups.map((matchup, index)=>{
            console.log(matchup);
            return <p key={index}>{matchup[0] +" vs " + matchup[1] }</p>})}
        </div>
    );
    }