#!/bin/bash

# 디자인 시스템 Firebase 배포 스크립트

echo "🚀 디자인 시스템 배포 시작"

# 1. 디자인 토큰 빌드
echo "🎨 디자인 토큰 빌드 중..."
npm run build:tokens

# 2. 프로젝트 빌드
echo "🔨 프로젝트 빌드 중..."
npm run build

# 3. Firebase에 배포
echo "🔥 Firebase에 배포 중..."
firebase deploy

echo "✅ 배포 완료!"
echo "📝 배포 URL을 확인하세요."