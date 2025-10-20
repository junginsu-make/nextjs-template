# ✅ Phase 1 Checklist - 프로젝트 초기 설계

## 📋 문서 작성

- [ ] **PRD.md 완성**
  - [ ] Executive Summary (Problem, Solution, Impact)
  - [ ] 타겟 사용자 정의
  - [ ] 핵심 기능 (MoSCoW: Must/Should/Could/Won't)
  - [ ] 비기능 요구사항 (성능, 보안, 가용성)
  - [ ] 성공 지표 (KPI)
  - [ ] 일정 및 리스크

- [ ] **LLD.md 완성**
  - [ ] C4 Model (Context Diagram)
  - [ ] 헥사고날 아키텍처 다이어그램
  - [ ] ERD (Entity Relationship Diagram)
  - [ ] API 엔드포인트 설계
  - [ ] 보안 설계 (인증, 인가)
  - [ ] 성능 전략 (캐싱, 인덱싱)

- [ ] **PLAN.md 완성**
  - [ ] Week별 마일스톤 정의
  - [ ] Day별 작업 아이템
  - [ ] 예상 시간 산정
  - [ ] 의존성 파악

## 🏗️ 아키텍처 설정

- [ ] 헥사고날 아키텍처 이해
  - [ ] Domain (순수 비즈니스 로직)
  - [ ] Application (Use Cases)
  - [ ] Infrastructure (구현체)
  - [ ] Presentation (API/Web)
  - [ ] 의존성 방향 확인 (외부 → 내부)

- [ ] SOLID 원칙 이해
  - [ ] S: 단일 책임 원칙
  - [ ] O: 개방-폐쇄 원칙
  - [ ] L: 리스코프 치환 원칙
  - [ ] I: 인터페이스 분리 원칙
  - [ ] D: 의존성 역전 원칙

## 🔧 기술 스택 확인

- [ ] 기술 스택 결정
  - [ ] Frontend: Next.js 14+, TypeScript, Tailwind CSS
  - [ ] Backend: Supabase, Drizzle ORM
  - [ ] Database: PostgreSQL 15+
  - [ ] Hosting: Vercel
  - [ ] CI/CD: GitHub Actions

- [ ] 개발 환경 구성
  - [ ] Node.js 20+ 설치
  - [ ] pnpm 설치
  - [ ] Git 설정

## 🚀 GitHub 저장소

- [ ] GitHub 저장소 생성
  - [ ] 저장소명 (kebab-case)
  - [ ] Description 작성
  - [ ] README.md (임시)
  - [ ] .gitignore (Node.js)
  - [ ] LICENSE (MIT)

- [ ] 초기 커밋
  - [ ] 의미있는 커밋 메시지
  - [ ] 모든 문서 포함

## 💾 프로젝트 초기화

- [ ] Next.js 프로젝트 생성
  ```bash
  pnpm create next-app@latest my-project --typescript --tailwind
  ```

- [ ] 폴더 구조 생성
  - [ ] src/domain/
  - [ ] src/application/
  - [ ] src/infrastructure/
  - [ ] src/presentation/
  - [ ] src/shared/
  - [ ] docs/

- [ ] 필수 패키지 설치
  - [ ] @supabase/supabase-js
  - [ ] drizzle-orm
  - [ ] zod
  - [ ] zustand
  - [ ] @tanstack/react-query
  - [ ] react-hook-form

- [ ] 기본 설정
  - [ ] tsconfig.json 업데이트
  - [ ] next.config.js 설정
  - [ ] .env.local 생성 (Supabase 정보)

## 📝 문서 최종 확인

- [ ] PRD.md와 LLD.md 일치
- [ ] PLAN.md의 작업이 LLD.md의 설계와 일치
- [ ] 모든 문서가 저장소에 커밋되었는가?

## ✔️ 완료 조건

- [ ] 3가지 문서 완성 (PRD, LLD, PLAN)
- [ ] GitHub 저장소 생성 및 초기 커밋
- [ ] Next.js 프로젝트 초기화
- [ ] 폴더 구조 생성
- [ ] 필수 패키지 설치
- [ ] 모든 체크리스트 항목 완료

---

**다음**: Phase 2 (핵심 기능 개발)로 진행
