import type { IRouter } from "../types/router";
import { useEffect, type JSX } from "react";
import { withGuard } from "./with-guard";
import Login from "../features/login";
import Register from "../features/register";
import { useLocation, useNavigate } from "react-router";

interface AuthRouteProps {
  children: JSX.Element;
}

const AuthRoute = ({ children }: AuthRouteProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      navigate("/", { replace: true, state: { from: location } });
    }
  }, [token, navigate, location]);

  return !token ? children : null;
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
