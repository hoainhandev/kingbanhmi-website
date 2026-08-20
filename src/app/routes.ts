import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage";
import FranchisePage from "./pages/FranchisePage";
import CareerPage from "./pages/CareerPage";

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
    path: "/career",
    Component: CareerPage,
  },
]);
