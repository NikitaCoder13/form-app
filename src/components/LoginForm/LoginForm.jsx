import React, { useState } from "react";
import { TextField, Button, Container, Typography, Paper } from "@mui/material";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Здесь вы можете добавить логику для обработки логина
    console.log("Email:", email);
    console.log("Password:", password);

    // navigate("/import");
    login();
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Typography variant="h5" align="center">
          Вход
        </Typography>
        <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Пароль"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: "20px" }}
          >
            Войти
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default LoginForm;
