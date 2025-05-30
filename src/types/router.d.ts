import type { JSX } from "react";

interface IRouter {
  title: string;
  path: string;
  element: JSX.Element;
  children?: IRouter[];
}
