import React from "react";
import { Box, Link, Typography, useTheme } from "@mui/material";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const loggedin = JSON.parse(localStorage.getItem("authToken"));
  const handleLogout = async () => {
    try {
      await axios.post("/api/v1/auth/logout");
      localStorage.removeItem("authToken");
      toast.success("Logout Succesfully");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box
      width={"100%"}
      backgroundcolor={theme.palette.background.alt}
      p={"1 rem 60%"}
      textAlign={"center"}
      sx={{ boxShadow: 3, mb: 2, bgcolor: "grey", color: "white" }}
    >
      <Typography variant="h1" color={"primary"} fontWeight={"bold"}>
        ChatGPT AI
      </Typography>
      {loggedin ? (
        <Link onClick={handleLogout} padding={1}>
          LogOut
        </Link>
      ) : (
        <>
          <Link href="/register" padding={1}>
            SignUp
          </Link>
          <Link href="/Login" padding={1}>
            SignIn
          </Link>
        </>
      )}
    </Box>
  );
};

export default Navbar;
