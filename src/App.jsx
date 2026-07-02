import React from 'react';
import Matchmaker from './pages/Matchmaker';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      mode: 'light',
    },
});

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <Matchmaker/>
      </ThemeProvider>
    </div>
  );
}

export default App;
