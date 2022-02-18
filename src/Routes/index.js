import { lazy } from "react";
import WithSuspense from "../HOC/withSuspense";

export const routes = [
  {
    path: `/login`,
    title: "Login",
    exact: true,
    comp: WithSuspense(lazy(() => import("../Pages/Login"))),
    auth: false,
  },
  {
    path: `/signup`,
    title: "Sygnup",
    exact: true,
    comp: WithSuspense(lazy(() => import("../Pages/Signup"))),
    auth: false,
  },
  {
    path: `/:account/dashboard`,
    title: "Dashboard",
    exact: true,
    comp: WithSuspense(lazy(() => import("../Pages/Dashboard"))),
    auth: true,
  },
];
