import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage";
import FranchisePage from "./pages/FranchisePage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/franchise",
    Component: FranchisePage,
  },
]);
