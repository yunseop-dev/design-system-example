import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * 버튼 컴포넌트의 스타일 변형을 정의합니다.
 * Tailwind CSS의 클래스를 활용하여 다양한 스타일을 제공합니다.
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 gap-2",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        primary: "bg-primary text-primary-foreground hover:bg-primary/90",
        success: "bg-success text-success-foreground hover:bg-success/90",
        warning: "bg-warning text-warning-foreground hover:bg-warning/90",
        info: "bg-info text-info-foreground hover:bg-info/90",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /**
   * 버튼의 스타일 변형을 지정합니다.
   * @default 'default'
   */
  variant?: VariantProps<typeof buttonVariants>["variant"];

  /**
   * 버튼의 크기를 지정합니다.
   * @default 'default'
   */
  size?: VariantProps<typeof buttonVariants>["size"];

  /**
   * 자식 요소를 감싸지 않고 직접 속성을 전달합니다.
   * 주로 Link 컴포넌트와 함께 사용합니다.
   * @default false
   */
  asChild?: boolean;

  /**
   * 버튼이 현재 로딩 중인지 여부를 지정합니다.
   * true인 경우 비활성화되고 로딩 표시기가 나타납니다.
   * @default false
   */
  isLoading?: boolean;

  /**
   * 로딩 표시기의 위치를 지정합니다.
   * @default 'start'
   */
  loadingPosition?: "start" | "end";

  /**
   * 로딩 중일 때 표시할 텍스트를 지정합니다.
   * 지정하지 않으면 원래 children이 유지됩니다.
   */
  loadingText?: string;
}

/**
 * 버튼 컴포넌트
 *
 * 사용자 인터랙션을 위한 기본 버튼 컴포넌트입니다.
 * 다양한 스타일 변형과 크기 옵션을 제공합니다.
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      isLoading = false,
      loadingPosition = "start",
      loadingText,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    // asChild가 true인 경우 Slot을 사용하여 자식 요소에 props를 전달합니다.
    const Comp = asChild ? Slot : "button";

    // 로딩 중인 경우 또는 disabled인 경우 버튼을 비활성화합니다.
    const isDisabled = isLoading || disabled;

    // 로딩 표시기 렌더링
    const renderLoadingIndicator = () => (
      <svg
        className="animate-spin -ml-1 mr-2 h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    );

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isDisabled}
        {...props}
      >
        {isLoading && loadingPosition === "start" && renderLoadingIndicator()}
        {isLoading && loadingText ? loadingText : children}
        {isLoading && loadingPosition === "end" && renderLoadingIndicator()}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
