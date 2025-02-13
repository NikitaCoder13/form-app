import React from "react";
import Header from "../Header/Header";
import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header />
      <Container component="main" maxWidth="lg" style={{ marginTop: "40px" }}>
        <Outlet />
      </Container>
    </div>
  );
};

export default Layout;
