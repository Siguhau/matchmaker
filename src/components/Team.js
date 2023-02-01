import { Typography, Card } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import React from 'react'
import { getColor } from '../utils/colors';

export default function Team(props){
    const theme = useTheme();
    const teamNumber = props.children;
    const teamColor = getColor(teamNumber);
    let textColor = theme.palette.primary.contrastText;
    if (teamColor === 'white'
            || teamColor === 'cyan'
            || teamColor === 'yellow'){
        textColor = 'black';
    }

    return (
        <>
            <Card style={{borderRadius: '50px', 
                        color: 'white',
                        backgroundColor: teamColor,
                        borderStyle: 'solid',
                        display: 'inline-flex',
                        justifyContent: 'center',
                        textAlign: 'center',
                        width: '50px',
                        height: '50px'}}>
            <Typography color={textColor}
                variant="h6" 
                style={{margin: 'auto'}}>
            {teamNumber}
            </Typography>
            </Card>
        </>
    )
}