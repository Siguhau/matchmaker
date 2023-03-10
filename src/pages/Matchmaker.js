import React, { useState, useEffect } from "react";
import { createArray, createAllMatchups, rotateTeamsForward } from "../utils/rotate";
import { AppBar, Button, TextField, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Matchup from "../components/Matchup";


export default function Matchmaker() {
    const theme = useTheme();
    const [numberOfTeams, setNumberOfTeams] = useState(localStorage.getItem("numberOfTeams") || 0);
    const [numberOfTeamsInput, setNumberOfTeamsInput] = useState(localStorage.getItem("numberOfTeams") || 0);
    const [teams, setTeams] = useState(createArray(numberOfTeams));
    const [matchups, setMatchups] = useState(createAllMatchups(rotateTeamsForward(teams)));
    const [clear, setClear] = useState(false);

    useEffect(() => {
            if (numberOfTeams < 2) {setNumberOfTeams(2); return;}
            if (numberOfTeams > 10) {setNumberOfTeams(10); return;}
            localStorage.setItem("numberOfTeams", numberOfTeams);
            const newteams = createArray(numberOfTeams);
            const newmatchups = createAllMatchups(rotateTeamsForward(newteams));
            setTeams(newteams);
            setMatchups(newmatchups);
            setNumberOfTeamsInput(numberOfTeams);
            setClear(!clear);

      }, [numberOfTeams]);
    
    return (
        <div style={{display: 'flex', 
                    flexDirection: 'column'}}>
            <AppBar position="sticky"
             style={{backgroundColor: theme.palette.primary.main, 
                    color: theme.palette.primary.contrastText,
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    height: '50px',
                    }}>

                <div style={{marginLeft: 'auto'}}></div>
                <Typography style={{width: 'auto'}} color={"white"} variant="h3">
                    Match Generator
                </Typography>
                <div style={{marginRight: 'auto'}}>
                    <div style={{marginLeft: '0px'}}/>
                    <TextField
                        variant="filled"
                        label="Teams"
                        InputProps={{
                            inputProps: {
                                style: { marginLeft: '5px',textAlign: 'center' },
                            },
                            inputMode: 'numeric', pattern: '[0-9]*'
                        }}
                        style={{width: '63px',
                            paddingLeft: '',
                            marginTop: '10px',
                            position: 'absolute',
                            right: '1%',
                            top: '50px'}}
                        value={numberOfTeamsInput}
                        onBlur={(e)=>{
                            setNumberOfTeams(e.target.value)
                        }}
                        onKeyDown={(e)=>{
                            if (e.key === 'Enter') { setNumberOfTeams(e.target.value) }
                        }}
                        
                        onChange={(e)=>{
                            setNumberOfTeamsInput(e.target.value)
                        }}/>
                </div>
            <Button 
                style={{margin: 'auto', 
                    marginTop: '10px', 
                    width: '55px',
                    position: 'absolute',
                    right: '1%',
                    top: '120px'}}
                variant="contained" 
                onClick={()=>{setClear(!clear)}}
                >Clear
            </Button>
            </AppBar>

            <div style={{display: 'flex', margin: 'auto' ,marginTop: '10px', justifyContent: 'center', flexDirection: 'column'}}>
            {matchups.map((round, index)=>(
                round.map((matchup, index)=>{
                    if (matchup[0] === matchup[1]) return null
                    return <Matchup matchup={matchup} key={index} clear={clear} />
                })))}
            </div>
        </div>
    );
}