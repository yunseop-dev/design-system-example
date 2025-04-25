import React, { useState } from "react";
import { ThemeProvider, useTheme } from "./contexts/theme-provider";
import { Button } from "./components/ui/button";
import { H1, H2, P } from "./components/ui/typography";
import ButtonExample from "./components/examples/ButtonExample";
import TypographyExample from "./components/examples/TypographyExample";

/**
 * 테마 토글 버튼 컴포넌트
 */
const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <Button
        variant={theme === "light" ? "default" : "outline"}
        size="sm"
        onClick={() => setTheme("light")}
      >
        Light
      </Button>
      <Button
        variant={theme === "dark" ? "default" : "outline"}
        size="sm"
        onClick={() => setTheme("dark")}
      >
        Dark
      </Button>
      <Button
        variant={theme === "system" ? "default" : "outline"}
        size="sm"
        onClick={() => setTheme("system")}
      >
        System
      </Button>
    </div>
  );
};

/**
 * 메인 콘텐츠 컴포넌트
 */
const Content: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"typography" | "button">(
    "typography"
  );

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-8">
        <H1>Design System</H1>
        <ThemeToggle />
      </div>

      <P className="mb-8">
        A comprehensive design system built with React, TypeScript, TailwindCSS,
        and Style Dictionary. This example showcases the Typography and Button
        components.
      </P>

      <div className="mb-4">
        <div className="flex border-b">
          <Button
            variant="ghost"
            className={`rounded-none ${
              activeTab === "typography" ? "border-b-2 border-primary" : ""
            }`}
            onClick={() => setActiveTab("typography")}
          >
            Typography
          </Button>
          <Button
            variant="ghost"
            className={`rounded-none ${
              activeTab === "button" ? "border-b-2 border-primary" : ""
            }`}
            onClick={() => setActiveTab("button")}
          >
            Buttons
          </Button>
        </div>
      </div>

      <div className="bg-background border rounded-lg overflow-hidden">
        <div className="p-4 border-b bg-muted">
          <H2>
            {activeTab === "typography" ? "Typography" : "Button"} Component
          </H2>
        </div>
        <div>
          {activeTab === "typography" ? (
            <TypographyExample />
          ) : (
            <ButtonExample />
          )}
        </div>
      </div>
    </div>
  );
};

/**
 * 앱 컴포넌트
 */
const App: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="system">
      <div className="min-h-screen bg-background text-foreground">
        <Content />
      </div>
    </ThemeProvider>
  );
};

export default App;
