import { Outlet } from "react-router";
import { AppSidebar } from "./AppSidebar";
import { Header } from "./Header";

export function DashboardLayout() {
  return (
    <div className="flex w-screen h-screen">
      <AppSidebar />
      <div className="relative flex-grow">
        <Header />
        <main className="flex justify-center">
          <div className="w-full px-5">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
