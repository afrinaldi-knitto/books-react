import type { IRouter } from "../types/router";
import type { JSX } from "react";
import { withGuard } from "./with-guard";
import Login from "../features/login";
import Register from "../features/register";

interface AuthRouteProps {
  children: JSX.Element;
}

const AuthRoute = ({ children }: AuthRouteProps) => {
  const token = localStorage.getItem("token");
  if (token) {
    // return <Navigate to="/" replace />;
  }
  return children;
};

const authRoutes: IRouter[] = [
  {
    title: "Login",
    path: "/login",
    element: <Login />,
  },
  {
    title: "Register",
    path: "/register",
    element: <Register />,
  },
];

export default withGuard(authRoutes, AuthRoute);
