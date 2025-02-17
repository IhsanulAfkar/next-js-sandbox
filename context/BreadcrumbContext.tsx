"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface Breadcrumb {
  label: string;
  href: string;
}

interface BreadcrumbContextType {
  breadcrumbs: Breadcrumb[];
  setBreadcrumbs: (breadcrumbs: Breadcrumb[], persist?: boolean) => void;
}

const BreadcrumbContext = createContext<BreadcrumbContextType | undefined>(undefined);

export const BreadcrumbProvider = ({ children }: { children: React.ReactNode }) => {
  const [breadcrumbs, setBreadcrumbs] = useState<Breadcrumb[]>([]);
  const [isCustom, setIsCustom] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!isCustom) {
      const pathSegments = pathname.split("/").filter(Boolean);
      const generatedBreadcrumbs: Breadcrumb[] = pathSegments.map((segment, index) => ({
        label: segment.replace(/-/g, " "),
        href: "/" + pathSegments.slice(0, index + 1).join("/"),
      }));

      // ✅ Only update state if breadcrumbs have changed to prevent infinite loop
      if (JSON.stringify(breadcrumbs) !== JSON.stringify(generatedBreadcrumbs)) {
        setBreadcrumbs(generatedBreadcrumbs);
      }
    }
  }, [pathname]); // ✅ Remove `isCustom` from dependencies to prevent re-triggers

  const updateBreadcrumbs = (newBreadcrumbs: Breadcrumb[], persist = true) => {
    // ✅ Only update state if breadcrumbs have actually changed
    if (JSON.stringify(breadcrumbs) !== JSON.stringify(newBreadcrumbs)) {
      setBreadcrumbs(newBreadcrumbs);
      if (persist) setIsCustom(true);
    }
  };

  return (
    <BreadcrumbContext.Provider value={{ breadcrumbs, setBreadcrumbs: updateBreadcrumbs }}>
      {children}
    </BreadcrumbContext.Provider>
  );
};

export const useBreadcrumb = () => {
  const context = useContext(BreadcrumbContext);
  if (!context) {
    throw new Error("useBreadcrumb must be used within a BreadcrumbProvider");
  }
  return context;
};
