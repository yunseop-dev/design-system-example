import React, { createContext, useContext, useEffect, useState } from "react";
import { DEFAULT_THEME, THEME_STORAGE_KEY, type Theme } from "@/lib/constants";

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}

interface ThemeProviderState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const initialState: ThemeProviderState = {
  theme: DEFAULT_THEME,
  setTheme: () => null,
};

export const ThemeProviderContext =
  createContext<ThemeProviderState>(initialState);

/**
 * 테마 제공자 컴포넌트
 *
 * 애플리케이션 전체의 테마 상태를 관리하고, 테마를 변경할 수 있는 기능을 제공합니다.
 * 테마 설정은 로컬 스토리지에 저장되어 페이지 새로고침 후에도 유지됩니다.
 */
export function ThemeProvider({
  children,
  defaultTheme = DEFAULT_THEME,
  storageKey = THEME_STORAGE_KEY,
  ...props
}: ThemeProviderProps) {
  // 로컬 스토리지에서 테마 설정을 가져옵니다. 없으면 defaultTheme을 사용합니다.
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem(storageKey) as Theme | null;
      return storedTheme || defaultTheme;
    }
    return defaultTheme;
  });

  // 테마가 변경되면 document의 클래스를 업데이트합니다.
  useEffect(() => {
    const root = window.document.documentElement;

    // 기존 테마 클래스를 제거합니다.
    root.classList.remove("light", "dark");

    // 시스템 테마를 사용하는 경우 시스템 설정을 확인합니다.
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
      return;
    }

    // 명시적으로 지정된 테마를 적용합니다.
    root.classList.add(theme);
  }, [theme]);

  // 테마를 변경하고 로컬 스토리지에 저장하는 함수를 제공합니다.
  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

/**
 * 테마 컨텍스트를 사용하기 위한 훅
 *
 * ThemeProvider 내부에서만 사용할 수 있습니다.
 * theme: 현재 테마 상태
 * setTheme: 테마를 변경하는 함수
 */
export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
