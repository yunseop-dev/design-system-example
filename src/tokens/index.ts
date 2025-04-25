/**
 * 디자인 토큰 인덱스 파일
 * 모든 토큰을 하나의 파일로 내보냅니다.
 */

// Style Dictionary에서 자동 생성된 토큰 파일을 가져옵니다
import "./tokens";

// 개별 토큰 파일들을 가져옵니다
import colors from "./colors.json";
import typography from "./typography.json";
import spacing from "./spacing.json";
import radius from "./radius.json";
import shadows from "./shadows.json";

// 모든 토큰을 하나의 객체로 내보냅니다
export const tokens = {
  colors,
  typography,
  spacing,
  radius,
  shadows,
};

export default tokens;
