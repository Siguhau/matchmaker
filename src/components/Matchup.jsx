import React from 'react'
import { useTheme } from '@mui/material/styles'
import { Card } from '@mui/material'
import Team from './Team';


export default function Matchup(props) {
    const theme = useTheme();
    const backgroundColor = theme.palette.primary.main;
    const playedcolor = theme.palette.secondary.main;
    const [played, setPlayed] = React.useState(false);
    const clear = props.clear;

    React.useEffect(() => {
        setPlayed(false);
    }, [clear])

    return (
        <Card
            onClick={() => setPlayed(!played)}
            style={{backgroundColor: played ? playedcolor : backgroundColor, 
                color: theme.palette.primary.contrastText,
                margin: '10px',
                width: '200px',
                paddingTop: '10px',
                paddingBottom: '10px',
                padding: 'auto',
                display: 'flex', 
                justifyContent: 'center',
                }}>

            <div>
                <Team>{props.matchup[0]}</Team>
                    {" vs "} 
                <Team>{props.matchup[1]}</Team>
            </div> 
        </Card>
    )
}