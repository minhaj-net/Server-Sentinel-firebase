import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Profile from "../Pages/Profile/Profile";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/profile",
        Component: Profile,
      },
      {
        path: "/signIn",
        Component: SignIn,
      },
      {
        path: "/signUp",
        Component: SignUp,
      },
    ],
  },
]);
