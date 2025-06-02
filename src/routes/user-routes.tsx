import type { IRouter } from "../types/router";
import { useEffect, type JSX } from "react";
import { withGuard } from "./with-guard";
import Home from "../features/home";
import { useLocation, useNavigate } from "react-router";

interface UserRouteProps {
  children: JSX.Element;
}

const UserRoute = ({ children }: UserRouteProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login", { replace: true, state: { from: location } });
    }
  }, [token, navigate, location]);

  return token ? children : null;
};

const userRoutes: IRouter[] = [
  {
    title: "Home",
    path: "/",
    element: <Home />,
  },
];

export default withGuard(userRoutes, UserRoute);
