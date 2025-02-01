import { NavLink } from "react-router";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  // SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { SettingsGearIcon } from "./ui/settings-gear";
import { HomeIcon } from "./ui/home";
import { AudioLinesIcon } from "./ui/audio-lines";
import { useState } from "react";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: HomeIcon,
  },
  {
    title: "Streams",
    url: "/streams",
    icon: AudioLinesIcon,
  },
  {
    title: "Settings",
    url: "#",
    icon: SettingsGearIcon,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="flex items-center justify-center py-2">
        <h1 className="text-xl font-bold ">Streamify</h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu className="gap-3">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SideBarMenuButtonLink to={item.url}>
                    <div className="size-10">
                      <item.icon className="hover:bg-transparent" />
                    </div>
                    <span className="text-lg">{item.title}</span>
                  </SideBarMenuButtonLink>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

const SideBarMenuButtonLink = ({
  children,
  to,
  ...props
}: {
  children: React.ReactNode;
  to: string;
}) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <SidebarMenuButton className="p-2" asChild isActive={isActive}>
      <NavLink
        className={({ isActive }) => {
          setIsActive(isActive);
          return "";
        }}
        to={to}
        {...props}
      >
        {children}
      </NavLink>
    </SidebarMenuButton>
  );
};
