import reactLogo from "./assets/react.svg";
import { CssBaseline, ThemeProvider } from "@mui/material";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";

import theme from "./theme";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import Profile from "./pages/Profile";

const EmptyLayout = () => {
  return <Outlet />;
};

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<EmptyLayout />}>
        <Route index element={<Landing />} />
        <Route path="login" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    )
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
