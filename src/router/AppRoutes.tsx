import { DashboardLayout } from "@/components/DashboardLayout";
import { Home } from "@/pages/Home";
import { Streams } from "@/pages/Streams";
import { Route, Routes } from "react-router";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route index element={<Home />} />
        <Route path="streams" element={<Streams />} />
      </Route>
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
}
