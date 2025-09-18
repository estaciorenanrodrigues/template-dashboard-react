import { Routes, Route } from "react-router-dom";
import {Dashboard} from "../pages";
import { ROUTES } from "./routes";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
      <Route path="*" element={<Dashboard />} />
    </Routes>
  );
};

export default AppRoutes;
