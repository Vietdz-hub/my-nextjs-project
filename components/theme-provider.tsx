// components/theme-provider.tsx
"use client";  // Bắt buộc để bật client-side rendering trong App Router

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  attribute?: "class" | "data-theme";
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
  defaultTheme?: string;
}

export default function ThemeProvider({
  children,
  attribute = "class",
  enableSystem = true,
  disableTransitionOnChange = false,
  defaultTheme = "light",
}: Props) {
  return (
    <NextThemesProvider
      attribute={attribute}
      enableSystem={enableSystem}
      disableTransitionOnChange={disableTransitionOnChange}
      defaultTheme={defaultTheme}
    >
      {children}
    </NextThemesProvider>
  );
}
