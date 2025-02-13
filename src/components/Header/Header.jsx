import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Form App
        </Typography>

        {isAuthenticated ? (
          <>
            {/* <Link to="/import" style={{ color: "white" }}>
              <Button color="inherit">Import</Button>
            </Link> */}
            {/* <Link to="/export" style={{ color: "white" }}>
              <Button color="inherit">Export</Button>
            </Link> */}
            <Button color="inherit" onClick={logout}>
              Выход
            </Button>
          </>
        ) : null}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
