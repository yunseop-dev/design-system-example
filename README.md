# Design System

디자인 시스템 구축 예제 프로젝트입니다. React, TypeScript, TailwindCSS, Style Dictionary를 활용한 확장 가능한 디자인 시스템을 구현했습니다.

## 기술 스택

- **React.js**: UI 컴포넌트 개발
- **TypeScript**: 타입 안정성 확보
- **TailwindCSS v4**: 유틸리티 기반 스타일링
- **Style Dictionary**: 디자인 토큰 관리
- **shadcn/ui**: 컴포넌트 패턴 참조
- **Vite**: 빠른 개발 환경 구성

## 주요 기능

- 🎨 **디자인 토큰 시스템**: 색상, 타이포그래피, 그림자, 반경 등 디자인 토큰 관리
- 🌓 **다크 모드 지원**: 라이트/다크 테마 전환 기능
- 📦 **기본 컴포넌트**: Typography, Button 컴포넌트 구현
- 🔄 **재사용성**: 확장 가능하고 재사용 가능한 컴포넌트 설계
- 📱 **반응형 디자인**: 다양한 화면 크기 지원

## 프로젝트 구조

```
liveklass-design-system/
├── src/
│   ├── components/      # 컴포넌트
│   │   ├── ui/          # 기본 UI 컴포넌트
│   │   └── examples/    # 예제 컴포넌트
│   ├── contexts/        # React 컨텍스트
│   ├── lib/             # 유틸리티 함수
│   ├── styles/          # 전역 스타일
│   ├── tokens/          # 디자인 토큰 정의
│   ├── App.tsx          # 메인 애플리케이션 컴포넌트
│   └── main.tsx         # 진입점
├── style-dictionary.config.js  # Style Dictionary 설정
└── tailwind.config.js  # TailwindCSS 설정
```

## 시작하기

### 설치

```bash
# 패키지 설치
npm install

# 디자인 토큰 빌드
npm run build:tokens

# 개발 서버 실행
npm run dev
```

### 디자인 토큰 사용하기

디자인 토큰은 CSS 변수로 변환되어 Tailwind 클래스에서 사용할 수 있습니다:

```jsx
// Typography 컴포넌트 사용 예시
import { H1, P, Lead } from "@/components/ui/typography";

function Example() {
  return (
    <div>
      <H1>제목</H1>
      <Lead>중요한 내용</Lead>
      <P>일반 텍스트</P>
    </div>
  );
}

// Button 컴포넌트 사용 예시
import { Button } from "@/components/ui/button";

function Example() {
  return (
    <div>
      <Button variant="primary" size="lg">
        확인
      </Button>
      <Button variant="outline">취소</Button>
    </div>
  );
}
```

## 확장하기

새로운 컴포넌트를 추가하려면:

1. `src/tokens` 디렉토리에 필요한 토큰 추가
2. `npm run build:tokens`를 실행하여 토큰 빌드
3. `src/components/ui` 디렉토리에 새 컴포넌트 생성
4. `src/components/ui/index.ts`에 컴포넌트 추가

## 라이선스

MIT
