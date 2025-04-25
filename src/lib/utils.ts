import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * TailwindCSS와 함께 클래스 이름을 조합할 때 사용하는 유틸리티 함수입니다.
 * clsx와 tailwind-merge를 사용하여 클래스 이름의 충돌을 방지합니다.
 *
 * @param inputs 클래스 이름들을 배열로 받습니다.
 * @returns 조합된 클래스 이름을 문자열로 반환합니다.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * 주어진 값을 기존 변수의 타입으로 확실히 지정합니다.
 * 타입 체크와 관련된 오류를 줄이는 데 도움이 됩니다.
 *
 * @param value 타입을 확실하게 지정할 값
 * @returns 입력과 동일한 값이지만 타입이 확실하게 지정됨
 */
export function assertType<T>(value: unknown): asserts value is T {
  // 런타임 로직은 없고, 타입만 단언합니다.
}

/**
 * 포함 여부를 확인하여 주어진 조건에 따라 클래스를 적용합니다.
 *
 * @param value 조건
 * @param className 적용할 클래스 이름
 * @returns 조건이 truthy이면 클래스 이름, 아니면 빈 문자열
 */
export function withClass(value: unknown, className: string): string {
  return value ? className : "";
}

/**
 * 고유한 ID를 생성합니다.
 *
 * @param prefix ID 앞에 붙일 접두사 (선택 사항)
 * @returns 고유한 ID 문자열
 */
export function generateId(prefix = "id"): string {
  return `${prefix}-${Math.random().toString(36).substring(2, 9)}`;
}
