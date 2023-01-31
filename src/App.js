import React from 'react';
import Matchmaker from './pages/Matchmaker';
import './App.css';
import { green, pink, black } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const theme = createTheme({
    palette: {
      type: 'dark',
    },
});


function App() {
  return (
    <div style={{backgroundColor: theme.palette.primary.light}}>
      <ThemeProvider theme={theme}>
        <Matchmaker/>
      </ThemeProvider>
    </div>
  );
}

export default App;
