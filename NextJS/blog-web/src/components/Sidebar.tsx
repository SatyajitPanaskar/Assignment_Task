"use client";

import { SidebarItems } from "@/types";
import { SidebarDesktop } from "./SidebarDesktop";
import { SidebarButton } from "./SiderbarButton";
import { MoreHorizontal } from "lucide-react";

const sidebarItems: SidebarItems = {
  links: [
    { label: "Introduction", href: "/" },
    { label: "Routing", href: "/routing" },
    { label: "Rendering", href: "/item/rendering" },
    { label: "Data Fetching", href: "/item/dataFetching" },
  ],
  extras: (
    <div className="flex flex-col gap-2">
      <SidebarButton icon={MoreHorizontal} className="w-full">
        More
      </SidebarButton>
      <SidebarButton
        className="w-full justify-center text-white"
        variant="default">
        Next.JS
      </SidebarButton>
    </div>
  ),
};

export function Sidebar() {
  return (
    <div>
      <SidebarDesktop sidebarItems={sidebarItems} />
    </div>
  );
}
