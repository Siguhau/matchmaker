import React, { useState } from "react";
import Button from '@mui/material/Button';
import { createArray, createAllMatchups, rotateTeamsForward } from "../utils/rotate";
import { TextField, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";


export default function Matchmaker() {
    const theme = useTheme();
    const [numberOfTeams, setNumberOfTeams] = useState(localStorage.getItem("numberOfTeams") || 0);
    const [teams, setTeams] = useState(createArray(numberOfTeams));
    const [matchups, setMatchups] = useState(createAllMatchups(rotateTeamsForward(teams)));
    
    return (
        <div className="Matchmaker">
        <Typography color={"primary"} variant="h3">Matchmaker</Typography>

        <Button 
        color="secondary"
        variant="contained" 
        onClick={()=>{
            localStorage.clear();
            setNumberOfTeams(0);
            setTeams([]);
            setMatchups([]);
            }}>
            Clear 
        </Button>

        <TextField
        color="secondary"
        variant="outlined"
        type="number" 
        value={numberOfTeams}
        onChange={(e)=>{
            let value = e.target.value;
            if (value < 1) value = 1;
            if (value > 10) value = 10;
            localStorage.setItem("numberOfTeams", value);
            const newteams = createArray(value);
            const newmatchups = createAllMatchups(rotateTeamsForward(newteams));
            setNumberOfTeams(value);
            setTeams(newteams);
            setMatchups(newmatchups);
        }}/>

        {matchups.map((round, index)=>(
            round.map((matchup, index)=>{
            if (matchup[0] === matchup[1]) return null
            return <Typography color="primary" variant="h6" key={index}>{matchup[0] +" vs " + matchup[1] }</Typography>})))}
        </div>
    );
}