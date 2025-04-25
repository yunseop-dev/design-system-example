"use client";

import { useContext } from "react";
import { ThemeProviderContext } from "@/contexts/theme-provider";

// Hook to access the theme context
export function useTheme() {
  const context = useContext(ThemeProviderContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}
