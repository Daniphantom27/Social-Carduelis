import { BrowserRouter, Navigate, Routes, Route} from 'react-router-dom';
import HomePage from 'pages/homePage';
import LoginPage from 'pages/loginPage';
import PerfilPage from 'pages/perfilPage';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import {  createTheme } from '@mui/material/styles'
import { themeSettings } from './theme'

function App() {
  const mode = useSelector((state)=> state.mode);
  const theme = useMemo(()=>createTheme(themeSettings(mode)),[mode])

  return (
    <div className="app">
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline/>

      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/perfil/:userID" element={<PerfilPage/>} />
      </Routes>
      </ThemeProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;
