"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Cuboid,
  Frame,
  GalleryVerticalEnd,
  LockKeyhole,
  Map,
  Moon,
  PencilLine,
  PieChart,
  Settings2,
  SquareTerminal,
  Sun,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import ThemeSwitcher from "./theme-switcher"

// This is sample data.
const data = {
  user: {
    name: "lorem",
    email: "lorem@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Rich Editor",
      url: "/editor",
      icon: PencilLine,
      isActive: true,
      items: [
        {
          title: "Tiptap",
          url: "/editor/tiptap",
        },
        {
          title: "TinyMCE",
          url: "/editor/tinymce",
        },
        {
          title: "Slate JS",
          url: "/editor/slate-editor",
        },
      ],
    },
    {
      title: "Components",
      url: "/component",
      icon: Cuboid,
      items: [
        {
          title: "React Select",
          url: "/component/react-select",
        },
        {
          title: "Calendar",
          url: "/component/calendar",
        },
      ],
    },
    {
      title: "Auth & Security",
      url: "/security",
      icon: LockKeyhole,
      items: [
        {
          title: "Auth JS (Next Auth)",
          url: "/security/auth-js",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}
const themes = [
  {
    name: 'light',
    logo: Sun
  },
  {
    name: 'dark',
    logo: Moon
  },

]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <ThemeSwitcher themes={themes} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
