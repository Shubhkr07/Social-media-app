import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Homepage from "scenes/homePage";
import Loginpage from "scenes/loginPage";
import Profilepage from "scenes/profilePage";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { themeSettings } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Loginpage></Loginpage>}></Route>
            <Route path="/home" element={isAuth ? <Profilepage /> : <Navigate to="/" />}></Route>
            <Route path="/profile/:userId" element={isAuth ? <Homepage /> : <Navigate to="/" />}></Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
