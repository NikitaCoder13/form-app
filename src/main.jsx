import { StrictMode, useContext } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { PublicRoute, PrivateRoute } from "./components/Routes/Routes.jsx";

import "./index.css";
import LoginPage from "./pages/LoginPage.jsx";
import ImportPage from "./pages/ImportPage.jsx";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { AuthProvider, useAuth } from "./context/AuthContext.jsx";
import Layout from "./components/Layout/Layout.jsx";

const theme = createTheme({
  palette: {
    mode: "light", // Устанавливаем светлую тему
    primary: {
      main: "#1976d2", // Основной цвет (синий)
    },
    secondary: {
      main: "#f50057", // Вторичный цвет (розовый)
    },
    background: {
      default: "#ffffff", // Цвет фона
      paper: "#f5f5f5", // Цвет для компонентов Paper
    },
    text: {
      primary: "#000000", // Цвет основного текста
      secondary: "#000000", // Цвет вторичного текста
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="/sign-in" replace />,
      },
      {
        path: "sign-in",
        element: (
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        ),
      },
      {
        path: "import",
        element: (
          <PrivateRoute>
            <ImportPage />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
);
