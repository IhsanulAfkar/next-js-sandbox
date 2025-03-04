import type { Metadata } from "next";

import "./globals.css";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { AppSidebar } from "@/components/app-sidebar";
import AppBreadcrumb from "@/components/app-breadcrumb";
import { BreadcrumbProvider } from "@/context/BreadcrumbContext";
import Providers from "@/providers";

export const metadata: Metadata = {
  title: "Sandbox",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sandbox</title>
      </head>
      <body>
        <Providers>

          <BreadcrumbProvider>

            <SidebarProvider>
              <AppSidebar />
              <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 dark:bg-sidebar">
                  <div className="flex items-center gap-2 px-4">
                    <SidebarTrigger className="-ml-1" />
                    <Separator orientation="vertical" className="mr-2 h-4" />
                    <AppBreadcrumb />
                  </div>
                </header>
                <div className="flex flex-1 flex-col gap-4 p-4 pt-0 dark:bg-sidebar">
                  {children}
                  <div className="min-h-[100vh] flex-1 md:min-h-min" />
                </div>
              </SidebarInset>
            </SidebarProvider>
          </BreadcrumbProvider>

        </Providers>

      </body>
    </html>

  )
}
