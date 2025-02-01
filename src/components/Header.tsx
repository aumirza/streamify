import { BellIcon } from "lucide-react";
import { TopBreadCrumb } from "./TopBreadCrumb";
import { Button } from "./ui/button";
import { SidebarTrigger } from "./ui/sidebar";
import { UserDropdown } from "./UserDropdown";

export function Header() {
  return (
    <header className="flex items-center justify-between h-20 px-5 py-2">
      <div className="flex items-center gap-5">
        <SidebarTrigger className="text-xl rounded-full shadow size-10 bg-card" />
        <TopBreadCrumb />
      </div>
      <div className="flex items-center justify-end gap-5">
        <Button variant="ghost" className="rounded-full shadow bg-card size-10">
          <BellIcon className="w-5 h-5" />
        </Button>
        <UserDropdown />
      </div>
    </header>
  );
}
