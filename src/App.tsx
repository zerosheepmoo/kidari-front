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
import About from "./pages/About";
import { Toaster } from "react-hot-toast";
import { useSetAtom } from "jotai";
import { userAtom, userLoggedInCheckedAtom } from "./jotais";
import { useEffect } from "react";
import { fetchMe } from "./apis/user";
import TopNav from "./components/TopNav";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { app as _app } from "./fb";

const EmptyLayout = () => {
  return (
    <>
      <TopNav />
      <Outlet />
    </>
  );
};

const Core = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<EmptyLayout />}>
        <Route index element={<Landing />} />
        <Route path="login" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="about" element={<About />} />
      </Route>
    )
  );

  return (
    <ThemeProvider theme={theme}>
      <Toaster
        containerStyle={{ zIndex: 10001 }}
        position="top-center"
        reverseOrder={false}
      />
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};
const App = () => {
  const setUser = useSetAtom(userAtom);
  const setHasUserLoggedIn = useSetAtom(userLoggedInCheckedAtom);
  useEffect(() => {
    (async () => {
      try {
        const user = await fetchMe();
        setUser(() => user);
        setHasUserLoggedIn(() => true);
      } catch (e) {
        console.log("not logged in (no cookie)");
        setHasUserLoggedIn(() => true);
      }
    })();
    // turn off lint for jotais
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <Core />;
};

export default App;
