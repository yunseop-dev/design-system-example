# Firebase 호스팅 설정 및 배포 가이드

LiveKlass 디자인 시스템을 Firebase 호스팅에 배포하기 위한 안내 문서입니다.

## 사전 준비사항

1. Firebase 계정이 필요합니다. [Firebase 콘솔](https://console.firebase.google.com/)에서 계정을 만드세요.
2. 프로젝트를 생성해야 합니다. Firebase 콘솔에서 '프로젝트 추가'를 클릭하여 새 프로젝트를 생성하세요.
3. Node.js와 npm이 설치되어 있어야 합니다.

## 설치 및 설정

### 1. Firebase CLI 설치

Firebase CLI를 전역으로 설치합니다:

```bash
pnpm install -g firebase-tools
```

### 2. Firebase에 로그인

Firebase CLI를 통해 계정에 로그인합니다:

```bash
pnpm run firebase:login
```

또는

```bash
firebase login
```

이 명령은 브라우저를 열어 Google 계정으로 로그인하도록 안내합니다.

### 3. 프로젝트 구성

Firebase 프로젝트를 초기화합니다:

```bash
pnpm run firebase:init
```

또는

```bash
firebase init
```

초기화 과정 중 다음 단계를 따르세요:

1. `Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys` 옵션을 선택합니다.
2. 기존 프로젝트를 사용할지 또는 새 프로젝트를 만들지 선택합니다.
3. 빌드된 파일이 저장될 디렉토리로 `dist`를 지정합니다. (Vite의 기본 빌드 출력 디렉토리)
4. 단일 페이지 애플리케이션인지 물으면 `예`를 선택합니다.
5. GitHub를 통한 자동 배포 설정은 필요에 따라 선택합니다.

### 4. .firebaserc 파일 설정

Firebase 프로젝트 ID로 `.firebaserc` 파일을 업데이트합니다:

```json
{
  "projects": {
    "default": "your-firebase-project-id"
  }
}
```

`your-firebase-project-id`를 Firebase 콘솔에서 확인한 프로젝트 ID로 변경하세요.

## 배포하기

디자인 시스템을 Firebase Hosting에 배포하려면:

```bash
pnpm run firebase:deploy
```

또는 수동으로:

```bash
pnpm run build
firebase deploy
```

배포가 성공하면 터미널에 호스팅 URL이 표시됩니다. 이 URL을 통해 디자인 시스템에 접근할 수 있습니다.

## 유용한 팁

1. **배포 전 로컬 테스트**: 배포 전에 `npm run build`로 빌드 후 `firebase serve` 명령을 실행하여 로컬에서 테스트해볼 수 있습니다.

2. **환경 설정**: 개발, 스테이징, 프로덕션과 같은 여러 환경을 설정하고 싶다면, `.firebaserc` 파일에 여러 프로젝트를 지정하고 `firebase use [environment]` 명령어로 전환할 수 있습니다.

3. **자동화**: GitHub Actions나 CI/CD 파이프라인을 설정하여 배포를 자동화할 수 있습니다. Firebase CLI는 이러한 환경에서도 잘 작동합니다.

4. **캐시 설정**: `firebase.json` 파일에 캐시 헤더를 추가하여 정적 자산의 캐싱을 최적화할 수 있습니다.
