import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import LoginPage from "./pages/LoginPage";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import ProductsPage from "./pages/ProductsPage";
import Invoice from "./pages/Invoice";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";
import appStore, { persistor } from "./store/appStore";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import ClientsPage from "./pages/ClientsPage";
import { PersistGate } from "redux-persist/es/integration/react";

// require("react-dom");
// window.React2 = require("react");
// console.log(window.React1 === window.React2);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    // Initialize credentials on app load
    if (!sessionStorage.getItem("username")) {
      sessionStorage.setItem("username", "smita");
      sessionStorage.setItem("password", "smita");
    }
    const sessionLogin = sessionStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(sessionLogin); // <-- Set after checking
  }, []);
  if (isLoggedIn === null) {
    // still checking login status
    return <div>Loading...</div>; // Or you can show spinner here
  }
  const routes = [
    {
      path: "/",
      element: <LoginPage setIsLoggedIn={setIsLoggedIn} />,
    },
    {
      path: "/app",
      element: (
        <ProtectedRoute
          isLoggedIn={isLoggedIn}
          children={<Layout setIsLoggedIn={setIsLoggedIn} />}
        ></ProtectedRoute>
      ),
      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        { path: "products", element: <ProductsPage /> },
        { path: "clients", element: <ClientsPage /> },
        { path: "invoice", element: <Invoice /> },
        {
          path: "",
          element: <Navigate to="dashboard" />,
        },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/" />,
    },
  ];

  const appRouter = createBrowserRouter(routes);
  return <RouterProvider router={appRouter} />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <Provider store={appStore}>
      <PersistGate loading={null} persistor={persistor}></PersistGate>
      <App />
    </Provider>
  </ThemeProvider>
);
