# PLAN: {프로젝트명} (상세 버전)

> **⚠️ 이 문서가 가장 중요합니다!** 모든 개발은 이 계획을 따릅니다.

---

## 📊 전체 진행 상황
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
전체    ░░░░░░░░░░░░░░░░░░░░  0% (0/50)
Week 1  ░░░░░░░░░░░░░░░░░░░░  0% (0/10)
Week 2  ░░░░░░░░░░░░░░░░░░░░  0% (0/15)
Week 3  ░░░░░░░░░░░░░░░░░░░░  0% (0/15)
Week 4  ░░░░░░░░░░░░░░░░░░░░  0% (0/10)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## 🎯 Week 1: 기획 & 설계 (Day 1-5)

### **Day 1: 문서 초기 작성** ✅

**작업**:
- [ ] PRD.md 작성 (간소화 버전, 2-3페이지)
- [ ] LLD.md 작성 (간소화 버전, 2-3페이지)
- [ ] PLAN.md 작성 (이 문서, 상세하게)

**완료 기준**:
- [ ] 3개 문서 작성 완료
- [ ] 프로젝트 방향성 명확

**예상 시간**: 3-4시간

**산출물**: 
- `docs/PRD.md` (초기 버전)
- `docs/LLD.md` (초기 버전)
- `docs/PLAN.md` (상세 버전)

**다음 단계에서 업데이트할 문서**: 없음

---

### **Day 2: GitHub 저장소 & 프로젝트 초기화**

**작업**:
- [ ] GitHub 저장소 생성
- [ ] README.md 작성
- [ ] .gitignore 설정
- [ ] Next.js 프로젝트 생성
- [ ] 기본 폴더 구조 생성

**폴더 구조**:
```
src/
├── domain/
├── application/
├── infrastructure/
├── presentation/
└── shared/
```

**완료 기준**:
- [ ] `pnpm dev` 실행 성공
- [ ] 폴더 구조 생성 완료
- [ ] Git 초기 커밋 완료

**예상 시간**: 2시간

**산출물**: GitHub 저장소 + 프로젝트 초기화

---

### **Day 3: Supabase & Drizzle 설정**

**작업**:
- [ ] Supabase 프로젝트 생성
- [ ] 환경 변수 설정 (`.env.local`)
- [ ] Drizzle ORM 설치 및 설정
- [ ] `drizzle.config.ts` 작성
- [ ] 첫 번째 스키마 생성 (`profiles`)

**완료 기준**:
- [ ] Supabase 연결 확인
- [ ] Drizzle 마이그레이션 실행 성공

**예상 시간**: 3시간

**산출물**: 
- `.env.local`
- `drizzle.config.ts`
- `src/infrastructure/database/drizzle/schema.ts`

---

### **Day 4-5: 인증 시스템 기반 구축**

**작업**:
- [ ] Supabase Auth 연동
- [ ] JWT 미들웨어 작성
- [ ] 로그인/회원가입 UI (기본)
- [ ] Protected Routes 설정

**파일 생성**:
```
src/
├── presentation/
│   └── api/
│       └── auth/
│           ├── signup/route.ts
│           └── login/route.ts
└── shared/
    └── middleware/
        └── auth.ts
```

**완료 기준**:
- [ ] 회원가입 → 로그인 → 대시보드 흐름 작동
- [ ] JWT 토큰 발급 확인
- [ ] Protected 페이지 접근 제어 작동

**예상 시간**: 6-8시간

**산출물**: 인증 시스템 완성

**PRD/LLD 업데이트**: 없음 (Week 2부터 업데이트 시작)

---

## 🎯 Week 2: 핵심 기능 #1 (Day 6-10)

### **Day 6: {기능 1} - Domain 레이어**

**작업**:
- [ ] {Entity} 클래스 생성
  - 비즈니스 규칙 정의
  - Factory Method
  - Domain Events
- [ ] {ValueObject} 클래스 생성
- [ ] {Repository} 인터페이스 정의

**파일 생성**:
```
src/domain/{feature}/
├── entities/{Entity}.ts
├── value-objects/{ValueObject}.ts
└── repositories/I{Entity}Repository.ts
```

**완료 기준**:
- [ ] 엔티티 생성 로직 완성
- [ ] 단위 테스트 작성 (커버리지 > 90%)
- [ ] 비즈니스 규칙 검증 완료

**예상 시간**: 4시간

**산출물**: Domain 레이어 완성

**PRD 업데이트**:
- 섹션 3: "{기능 1} 상세 명세" 추가

**LLD 업데이트**:
- 섹션 3: "ERD - {Entity} 테이블 스키마" 추가

---

### **Day 7: {기능 1} - Application 레이어**

**작업**:
- [ ] Create{Entity}UseCase 구현
- [ ] Update{Entity}UseCase 구현
- [ ] Delete{Entity}UseCase 구현
- [ ] DTO 정의 (Zod)

**파일 생성**:
```
src/application/use-cases/{feature}/
├── Create{Entity}UseCase.ts
├── Update{Entity}UseCase.ts
└── Delete{Entity}UseCase.ts
```

**완료 기준**:
- [ ] Use Cases 구현 완료
- [ ] 에러 처리 (Result 패턴)
- [ ] 단위 테스트 (주요 시나리오)

**예상 시간**: 5시간

**산출물**: Application 레이어 완성

---

### **Day 8: {기능 1} - Infrastructure 레이어**

**작업**:
- [ ] Drizzle 스키마 정의
- [ ] {Entity}Repository 구현
- [ ] 마이그레이션 실행
- [ ] RLS 정책 적용

**파일 생성**:
```
src/infrastructure/
├── database/
│   ├── drizzle/schema.ts (업데이트)
│   └── repositories/{Entity}RepositoryImpl.ts
```

**완료 기준**:
- [ ] DB에 테이블 생성됨
- [ ] CRUD 작동 확인
- [ ] RLS 정책 테스트 통과

**예상 시간**: 4시간

**산출물**: Infrastructure 레이어 완성

**LLD 업데이트**:
- 섹션 3: "RLS 정책 - {Entity}" 추가

---

### **Day 9: {기능 1} - API & UI**

**작업**:
- [ ] API Routes 생성
- [ ] Zod 검증 스키마
- [ ] 기본 UI 컴포넌트 (CRUD)

**파일 생성**:
```
src/presentation/
├── api/{feature}/
│   ├── route.ts (GET, POST)
│   └── [id]/route.ts (PATCH, DELETE)
└── web/app/{feature}/
    └── page.tsx
```

**완료 기준**:
- [ ] API 테스트 (Postman/curl)
- [ ] UI에서 CRUD 작동
- [ ] 에러 처리 확인

**예상 시간**: 5시간

**산출물**: {기능 1} 완전 구현

**LLD 업데이트**:
- 섹션 4: "API 명세 - {기능 1}" 추가

---

### **Day 10: {기능 1} - 통합 테스트 & 문서화**

**작업**:
- [ ] 통합 테스트 작성
- [ ] E2E 시나리오 테스트 (수동)
- [ ] phase-2-detail.md 작성
- [ ] PRD/LLD 업데이트
- [ ] PLAN.md 체크박스 업데이트

**완료 기준**:
- [ ] 모든 테스트 통과
- [ ] 문서화 완료
- [ ] Git 커밋 & 푸시

**예상 시간**: 3시간

**산출물**: 
- `docs/phases/phase-2-detail.md` (상세 설계)
- 업데이트된 PRD/LLD

---

## 🎯 Week 3: 핵심 기능 #2 (Day 11-15)

### **Day 11-15: {기능 2} 구현**

(Day 6-10과 동일한 패턴 반복)

- [ ] Day 11: Domain 레이어
- [ ] Day 12: Application 레이어
- [ ] Day 13: Infrastructure 레이어
- [ ] Day 14: API & UI
- [ ] Day 15: 통합 테스트 & 문서화

**산출물**: {기능 2} 완전 구현

---

## 🎯 Week 4: 성능 최적화 & 테스트 (Day 16-20)

### **Day 16: DB 성능 최적화**

**작업**:
- [ ] 느린 쿼리 분석
- [ ] 인덱스 추가
- [ ] N+1 문제 해결
- [ ] 쿼리 최적화

**완료 기준**:
- [ ] 주요 API 응답 시간 < 200ms
- [ ] DB 인덱스 전략 문서화

**예상 시간**: 4시간

**LLD 업데이트**:
- 섹션 7: "성능 최적화 - 인덱스 전략" 추가

---

### **Day 17-18: 단위 테스트 보강**

**작업**:
- [ ] Domain 엔티티 테스트 보강
- [ ] Use Cases 테스트 보강
- [ ] 커버리지 측정

**완료 기준**:
- [ ] Domain 커버리지 > 90%
- [ ] Application 커버리지 > 80%

**예상 시간**: 8시간

---

### **Day 19: 보안 재점검**

**작업**:
- [ ] 모든 API 인증 확인
- [ ] RBAC 테스트
- [ ] RLS 정책 검증
- [ ] 환경 변수 확인

**완료 기준**:
- [ ] 보안 체크리스트 100% 완료

**예상 시간**: 3시간

---

### **Day 20: 성능 벤치마크**

**작업**:
- [ ] 응답 시간 측정
- [ ] 동시 사용자 테스트
- [ ] 리포트 작성

**완료 기준**:
- [ ] 성능 목표 달성 확인

**예상 시간**: 3시간

---

## 🎯 Week 5: 배포 준비 (Day 21-25)

### **Day 21-22: Vercel 배포 설정**

**작업**:
- [ ] `vercel.json` 작성
- [ ] 환경 변수 설정
- [ ] 프리뷰 배포 테스트

**완료 기준**:
- [ ] 프리뷰 URL 작동

**예상 시간**: 4시간

---

### **Day 22-23: GitHub Actions CI/CD**

**작업**:
- [ ] `.github/workflows/ci.yml` 작성
- [ ] PR 체크 설정
- [ ] 자동 배포 설정

**완료 기준**:
- [ ] CI/CD 파이프라인 작동

**예상 시간**: 4시간

---

### **Day 24: 모니터링 설정**

**작업**:
- [ ] Sentry 초기화
- [ ] 에러 캡처 테스트

**완료 기준**:
- [ ] Sentry 에러 수집 확인

**예상 시간**: 2시간

---

### **Day 25: 최종 테스트 & 배포**

**작업**:
- [ ] E2E 테스트 (수동)
- [ ] 보안 최종 체크
- [ ] 프로덕션 배포

**완료 기준**:
- [ ] 프로덕션 URL 작동

**예상 시간**: 3시간

---

## 📌 작업 원칙

### 매 작업마다:
1. **PLAN.md 참조** → 오늘 할 일 확인
2. **코드 구현** → 해당 Phase 작업
3. **문서 업데이트** → PRD/LLD 해당 섹션 추가
4. **Git 커밋** → 의미있는 커밋 메시지
5. **체크박스 업데이트** → PLAN.md

### 완료 기준:
- [ ] 코드 구현 완료
- [ ] 테스트 통과
- [ ] 문서 업데이트
- [ ] Git 푸시

---

**버전**: 1.0  
**작성일**: {날짜}  
**담당자**: {이름}
