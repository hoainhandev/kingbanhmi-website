import { createBrowserRouter, redirect } from "react-router";
import HomePage from "./pages/HomePage";
import FranchisePage from "./pages/FranchisePage";
import CareersPage from "./pages/CareersPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/franchise",
    Component: FranchisePage,
  },
  {
    path: "/careers",
    Component: CareersPage,
  },
  {
    path: "/career",
    loader: () => redirect("/careers"),
  },
]);
