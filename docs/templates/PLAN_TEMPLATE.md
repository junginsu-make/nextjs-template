# PLAN: {프로젝트명}

> **목표**: {프로젝트 목표 한 줄}  
> **기간**: 5주 (35일)  
> **팀**: {팀 구성}

---

## 📅 주간 마일스톤

| Week | 목표 | 산출물 |
|------|------|--------|
| 1 | 기획 + 설계 | PRD, LLD, GitHub Repo |
| 2-3 | 핵심 기능 구현 | MVP |
| 4 | 성능 + 테스트 | 단위테스트, 성능 리포트 |
| 5 | 배포 준비 | CI/CD, 모니터링 |
| 6+ | 운영 | 모니터링, 개선 |

---

## 🔄 Week 1: 기획 & 설계

### Day 1: 요구사항 정의
- [ ] PRD.md 작성
  - [ ] Problem/Solution/Impact
  - [ ] Target users
  - [ ] Core features (MoSCoW)
  - [ ] Success metrics
- **예상 시간**: 2-3시간
- **담당**: Product Manager

### Day 2: 기술 설계
- [ ] LLD.md 작성
  - [ ] System architecture
  - [ ] Database schema (ERD)
  - [ ] API endpoints
  - [ ] Security design
- **예상 시간**: 3-4시간
- **담당**: Tech Lead

### Day 3: 개발 계획 수립
- [ ] PLAN.md 작성 (이 파일)
  - [ ] Week별 마일스톤
  - [ ] Day별 작업 아이템
  - [ ] 예상 시간
- [ ] GitHub 저장소 생성
- [ ] 기본 폴더 구조 생성
- **예상 시간**: 2시간
- **담당**: Tech Lead

### Day 4-5: 프로젝트 초기화
- [ ] Next.js 프로젝트 생성
- [ ] 필수 패키지 설치
  - [ ] Supabase
  - [ ] Drizzle ORM
  - [ ] Zod
  - [ ] Zustand
  - [ ] TanStack Query
- [ ] 환경 설정
- [ ] Git 초기 커밋
- **예상 시간**: 4-5시간
- **담당**: 전체 팀

---

## 🔄 Week 2-3: 핵심 기능 개발

### Week 2: Authentication & Core Features

#### Day 1: 사용자 인증
- [ ] Domain
  - [ ] User entity 생성
  - [ ] Email value object
- [ ] Application
  - [ ] SignUp UseCase
  - [ ] Login UseCase
- [ ] Infrastructure
  - [ ] UserRepository 구현
  - [ ] Supabase Auth 연동
- [ ] Presentation
  - [ ] POST /api/auth/signup
  - [ ] POST /api/auth/login
- **예상 시간**: 4시간
- **담당**: 개발자 1

#### Day 2: JWT & 미들웨어
- [ ] JWT 발급 로직
- [ ] 인증 미들웨어
- [ ] 요청 검증 (Zod)
- **예상 시간**: 3시간
- **담당**: 개발자 1

#### Day 3-5: 핵심 CRUD 기능
- [ ] Domain: Project entity
- [ ] Application: Create/Read/Update/Delete UseCases
- [ ] Infrastructure: ProjectRepository
- [ ] Presentation: API endpoints
- **예상 시간**: 12시간
- **담당**: 개발자 2

### Week 3: 추가 기능 & 최적화

#### Day 1-3: 추가 기능
- [ ] {기능 1}
- [ ] {기능 2}
- [ ] {기능 3}
- **예상 시간**: 12시간
- **담당**: 개발자들

#### Day 4-5: 버그 수정 & 리팩토링
- [ ] 버그 수정
- [ ] 코드 리팩토링
- [ ] 아키텍처 검토
- **예상 시간**: 8시간
- **담당**: 전체 팀

---

## 🔄 Week 4: 성능 최적화 & 테스트

### Day 1: 데이터베이스 최적화
- [ ] 인덱스 추가
- [ ] N+1 문제 해결
- [ ] 쿼리 성능 테스트
- **예상 시간**: 4시간
- **담당**: 개발자 1

### Day 2-3: 단위테스트
- [ ] Domain 엔티티 테스트
- [ ] Value Objects 테스트
- [ ] 주요 Use Cases 테스트
- **목표**: 커버리지 > 90%
- **예상 시간**: 8시간
- **담당**: 개발자 2

### Day 4: 보안 재점검
- [ ] JWT 검증 확인
- [ ] RLS 정책 테스트
- [ ] 환경 변수 확인
- **예상 시간**: 3시간
- **담당**: Tech Lead

### Day 5: 성능 벤치마크
- [ ] 응답 시간 측정
- [ ] 동시 사용자 테스트
- [ ] 리포트 작성
- **예상 시간**: 3시간
- **담당**: 전체 팀

---

## 🔄 Week 5: 배포 준비

### Day 1-2: Vercel 배포 설정
- [ ] vercel.json 작성
- [ ] 환경 변수 설정
- [ ] 프리뷰 배포 테스트
- **예상 시간**: 4시간
- **담당**: DevOps/Tech Lead

### Day 2-3: GitHub Actions CI/CD
- [ ] .github/workflows/ci.yml 작성
  - [ ] Type check
  - [ ] Lint
  - [ ] Test
  - [ ] Build
- [ ] PR 체크 자동화
- **예상 시간**: 4시간
- **담당**: DevOps/Tech Lead

### Day 3-4: 모니터링 설정
- [ ] Sentry 초기화
- [ ] 에러 캡처 테스트
- [ ] 알림 설정
- **예상 시간**: 3시간
- **담당**: DevOps

### Day 5: 최종 테스트 & 배포
- [ ] E2E 테스트 (수동)
- [ ] 보안 최종 체크
- [ ] 프로덕션 배포
- **예상 시간**: 3시간
- **담당**: 전체 팀

---

## 🔄 Week 6+: 운영 & 개선

### 주간 작업

#### 월요일: 모니터링 리뷰
- [ ] 에러율 확인
- [ ] 성능 지표 확인
- [ ] 사용자 피드백 수집

#### 수요일: 개선 사항 구현
- [ ] 버그 수정
- [ ] 성능 개선
- [ ] 기능 추가 (사용자 피드백)

#### 금요일: 배포
- [ ] 변경사항 테스트
- [ ] 프로덕션 배포
- [ ] 배포 후 모니터링

---

## 📊 작업 추적

### Week 1: 기획 & 설계
- [ ] Day 1: PRD.md
- [ ] Day 2: LLD.md
- [ ] Day 3: PLAN.md + GitHub
- [ ] Day 4-5: 프로젝트 초기화

**완료도**: ___% | **상태**: ⏳ 진행 중

### Week 2-3: 기능 개발
- [ ] Day 1-2: 인증 구현
- [ ] Day 3-5 (Week 2): 핵심 CRUD
- [ ] Day 1-3 (Week 3): 추가 기능
- [ ] Day 4-5 (Week 3): 버그 수정

**완료도**: ___% | **상태**: ⏳ 진행 중

### Week 4: 성능 & 테스트
- [ ] Day 1: DB 최적화
- [ ] Day 2-3: 단위테스트
- [ ] Day 4: 보안 재점검
- [ ] Day 5: 성능 벤치마크

**완료도**: ___% | **상태**: ⏳ 대기

### Week 5: 배포 준비
- [ ] Day 1-2: Vercel 배포
- [ ] Day 2-3: GitHub Actions
- [ ] Day 3-4: 모니터링
- [ ] Day 5: 최종 배포

**완료도**: ___% | **상태**: ⏳ 대기

---

## 🎯 일일 스탠드업

**형식**:
- 어제 뭐했나?
- 오늘 뭐할건가?
- 막히는 게 뭔가?

---

## 📌 중요 날짜

- **Week 1 끝**: PRD, LLD, PLAN 완료
- **Week 3 끝**: MVP 완료
- **Week 4 끝**: 테스트 완료
- **Week 5 끝**: 프로덕션 배포

---

## 🚨 리스크 & 완화 전략

| 리스크 | 확률 | 영향 | 완화 전략 |
|--------|------|------|----------|
| 일정 지연 | 중 | 중 | Buffer 시간 확보 |
| 성능 이슈 | 중 | 고 | 조기 성능 테스트 |
| 보안 이슈 | 낮 | 극 | 보안 감사 |

---

## 📞 커뮤니케이션

- **일일 스탠드업**: 오전 10시 (15분)
- **주간 리뷰**: 금요일 오후 4시 (1시간)
- **긴급**: Slack #dev-emergency

---

**버전**: 1.0  
**작성일**: {날짜}  
**마지막 수정**: {날짜}  
**담당자**: {이름}
