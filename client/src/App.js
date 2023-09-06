import "./App.css";
import { Route, Routes } from "react-router-dom";

import { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";

import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Summary from "./pages/summary";
import { Toaster } from "react-hot-toast";
import Paragraph from "./pages/Paragraph";
import ChatBot from "./pages/ChatBot";
function App() {
  const theme = useMemo(() => createTheme(themeSettings(), []));
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Toaster />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Summary" element={<Summary />} />
          <Route path="/Paragraph" element={<Paragraph />} />
          <Route path="/AIBot" element={<ChatBot />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
