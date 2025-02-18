import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from './ui/sidebar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from './ui/dropdown-menu'
import { ChevronsUpDown, Plus } from 'lucide-react'
import { useTheme } from 'next-themes'

interface Props {
    themes: {
        name: string,
        logo: React.ElementType
    }[]
}

const ThemeSwitcher: NextPage<Props> = ({ themes }) => {
    const { isMobile } = useSidebar()
    const { theme, setTheme } = useTheme();
    const [activeTeam, setActiveTeam] = useState(themes.find(t => t.name === theme))
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);
    useEffect(() => {
        setTheme(activeTeam?.name ?? 'light')
    }, [activeTeam])
    if (!isMounted || !activeTeam) return null;

    return <SidebarMenu>
        <SidebarMenuItem>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <SidebarMenuButton
                        size="lg"
                        className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                    >
                        <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                            <activeTeam.logo className="size-4" />
                        </div>
                        <div className="grid flex-1 text-left text-sm leading-tight">
                            <span className="truncate font-semibold">
                                Themes
                            </span>
                            <span className="truncate text-xs">{activeTeam.name}</span>
                        </div>
                        <ChevronsUpDown className="ml-auto" />
                    </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                    align="start"
                    side={isMobile ? "bottom" : "right"}
                    sideOffset={4}
                >
                    <DropdownMenuLabel className="text-xs text-muted-foreground">
                        Teams
                    </DropdownMenuLabel>
                    {themes.map((team, index) => (
                        <DropdownMenuItem
                            key={team.name}
                            onClick={() => setActiveTeam(team)}
                            className="gap-2 p-2"
                        >
                            <div className="flex size-6 items-center justify-center rounded-sm border">
                                <team.logo className="size-4 shrink-0" />
                            </div>
                            {team.name}
                            <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
                        </DropdownMenuItem>
                    ))}

                </DropdownMenuContent>
            </DropdownMenu>
        </SidebarMenuItem>
    </SidebarMenu>
}

export default ThemeSwitcher