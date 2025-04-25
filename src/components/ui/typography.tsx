import {
  TEXT_VARIANTS,
  type TextAlignment,
  type TextVariant,
} from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import React, { useMemo } from "react";

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * 텍스트 변형을 지정합니다.
   * @default 'p'
   */
  variant?: TextVariant;

  /**
   * 텍스트 정렬 방향을 지정합니다.
   * @default 'left'
   */
  align?: TextAlignment;

  /**
   * 자식 요소를 감싸지 않고 직접 속성을 전달합니다.
   * @default false
   */
  asChild?: boolean;

  /**
   * 타이포그래피의 태그를 직접 지정합니다.
   * asChild가 true인 경우 무시됩니다.
   */
  as?: React.ElementType;

  /**
   * 자식 요소를 렌더링합니다.
   */
  children?: React.ReactNode;

  /**
   * 추가 클래스 이름을 지정합니다.
   */
  className?: string;
}

/**
 * 타이포그래피 컴포넌트
 *
 * 텍스트 스타일을 일관되게 유지하기 위한 기본 컴포넌트입니다.
 * 다양한 변형과 정렬 옵션을 제공합니다.
 */
const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  (
    {
      variant = "p",
      align = "left",
      asChild = false,
      as,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const variantClass = TEXT_VARIANTS[variant];
    const alignClass = useMemo(() => {
      if (align === "left") return "text-left";
      if (align === "right") return "text-right";
      if (align === "center") return "text-center";
      if (align === "justify") return "text-justify";
      return "";
    }, [align]);

    // 기본 HTML 요소 결정 (as로 지정되었거나 variant에 따른 기본값)
    const defaultElement = as || getDefaultElement(variant);
    const Comp = asChild ? Slot : defaultElement;

    return (
      <Comp
        ref={ref}
        className={cn(variantClass, alignClass, className)}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

Typography.displayName = "Typography";

// 특정 변형의 타이포그래피 컴포넌트들을 미리 정의합니다.
const H1 = (props: Omit<TypographyProps, "variant">) => (
  <Typography variant="h1" {...props} />
);
const H2 = (props: Omit<TypographyProps, "variant">) => (
  <Typography variant="h2" {...props} />
);
const H3 = (props: Omit<TypographyProps, "variant">) => (
  <Typography variant="h3" {...props} />
);
const H4 = (props: Omit<TypographyProps, "variant">) => (
  <Typography variant="h4" {...props} />
);
const H5 = (props: Omit<TypographyProps, "variant">) => (
  <Typography variant="h5" {...props} />
);
const P = (props: Omit<TypographyProps, "variant">) => (
  <Typography variant="p" {...props} />
);
const Lead = (props: Omit<TypographyProps, "variant">) => (
  <Typography variant="lead" {...props} />
);
const Large = (props: Omit<TypographyProps, "variant">) => (
  <Typography variant="large" {...props} />
);
const Small = (props: Omit<TypographyProps, "variant">) => (
  <Typography variant="small" {...props} />
);
const Muted = (props: Omit<TypographyProps, "variant">) => (
  <Typography variant="muted" {...props} />
);
const Code = (props: Omit<TypographyProps, "variant">) => (
  <Typography variant="code" as="code" {...props} />
);
const Blockquote = (props: Omit<TypographyProps, "variant">) => (
  <Typography variant="quote" as="blockquote" {...props} />
);

// 변형에 따른 기본 HTML 요소를 결정하는 헬퍼 함수
function getDefaultElement(variant: TextVariant): React.ElementType {
  switch (variant) {
    case "h1":
      return "h1";
    case "h2":
      return "h2";
    case "h3":
      return "h3";
    case "h4":
      return "h4";
    case "h5":
      return "h5";
    case "lead":
    case "large":
    case "small":
    case "muted":
    case "p":
      return "p";
    case "strong":
      return "strong";
    case "emphasis":
      return "em";
    case "subtle":
      return "span";
    case "code":
      return "code";
    case "quote":
      return "blockquote";
    default:
      return "p";
  }
}

export {
  Blockquote,
  Code,
  H1,
  H2,
  H3,
  H4,
  H5,
  Large,
  Lead,
  Muted,
  P,
  Small,
  Typography,
};

export default Typography;
