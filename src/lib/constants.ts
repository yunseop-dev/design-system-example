/**
 * 디자인 시스템에서 사용되는 상수 값을 정의합니다.
 */

// 지원되는 테마
export type Theme = "light" | "dark" | "system";

// 기본 테마
export const DEFAULT_THEME: Theme = "system";

// 로컬 스토리지에 테마를 저장할 때 사용하는 키
export const THEME_STORAGE_KEY = "liveklass-theme";

// 버튼 크기 옵션
export const BUTTON_SIZES = ["sm", "md", "lg", "icon"] as const;
export type ButtonSize = (typeof BUTTON_SIZES)[number];

// 버튼 변형 옵션
export const BUTTON_VARIANTS = [
  "default",
  "destructive",
  "outline",
  "secondary",
  "ghost",
  "link",
  "primary",
  "success",
  "warning",
  "info",
] as const;
export type ButtonVariant = (typeof BUTTON_VARIANTS)[number];

// 타이포그래피 변형 옵션
export const TEXT_VARIANTS = {
  // 타이틀
  h1: "title-xxl-normal",
  h2: "title-xl-normal",
  h3: "title-lg-normal",
  h4: "title-md-normal",
  h5: "title-sm-normal",

  // 본문
  p: "body-md-normal",
  lead: "body-lg-normal",
  large: "body-lg-normal",
  small: "body-sm-normal",
  muted: "body-md-normal",

  // 강조
  strong: "body-md-strong",
  emphasis: "body-md-accent",

  // 표현 레벨
  subtle: "body-md-normal text-muted-foreground",
  code: "body-sm-normal font-mono bg-muted px-1 py-0.5 rounded-sm",
  quote: "body-md-normal italic border-l-4 border-muted pl-4",
} as const;

export type TextVariant = keyof typeof TEXT_VARIANTS;

// 타이포그래피 정렬 옵션
export const TEXT_ALIGNMENTS = ["left", "center", "right", "justify"] as const;
export type TextAlignment = (typeof TEXT_ALIGNMENTS)[number];

// 컴포넌트 접두사
export const COMPONENT_PREFIX = "liveklass";
