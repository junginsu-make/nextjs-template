# 📋 Phase 3 Prompt - 성능 최적화 & 테스트

MVP 기능 개발이 완료되었습니다. 이제 성능과 테스트를 보완합니다.

## 📋 현재 상태
- Phase 2 완료: 핵심 기능 구현 ✅
- 동작하는 MVP ✅

## 🎯 Phase 3 작업 (Week 4)

다음 3가지를 진행해주세요:

### 1️⃣ 데이터베이스 성능 최적화

**인덱스 추가**
- 자주 조회하는 필드에 인덱스 추가
- WHERE, ORDER BY, JOIN에 사용되는 칼럼 확인
- 복합 인덱스 고려 (예: user_id + created_at)

**N+1 문제 해결**
- Drizzle ORM의 `with()` 메서드로 관계 로드
- 필요한 필드만 SELECT

**쿼리 최적화**
- 실행 계획 확인
- 불필요한 조인 제거

체크리스트:
- [ ] 주요 조회 쿼리에 인덱스 추가
- [ ] N+1 문제 확인 및 해결
- [ ] 성능 벤치마크 (예: 응답 시간 < 200ms)

### 2️⃣ 핵심 로직 단위테스트

**테스트 작성 (Vitest)**
- Domain 엔티티 (비즈니스 로직) 
- Value Objects (값 검증)
- 주요 Use Case (3-4개)

**목표**
- 핵심 로직 > 90% 커버리지

예시:
```typescript
// src/domain/user/User.spec.ts
describe('User.create', () => {
  it('should create user with valid data', () => {
    const result = User.create({ email, name, age: 25 });
    expect(result.isSuccess).toBe(true);
  });

  it('should fail when age < 18', () => {
    const result = User.create({ email, name, age: 17 });
    expect(result.isFailure).toBe(true);
  });
});
```

체크리스트:
- [ ] Domain 엔티티 테스트
- [ ] Value Objects 테스트
- [ ] 주요 Use Case 테스트
- [ ] 커버리지 > 90%

### 3️⃣ 보안 재점검

**보안 체크리스트**
- [ ] 모든 API에 인증 있는가?
- [ ] RBAC 구현되었는가?
- [ ] RLS 정책이 모든 테이블에 있는가?
- [ ] 환경 변수가 .env.example에 정의되었는가?
- [ ] 민감한 정보(API 키, 토큰)가 코드에 없는가?
- [ ] SQL Injection 방지 (Drizzle ORM 사용)
- [ ] XSS 방지 (React 자동 escape)

## 🔗 참고

- `docs/RULES.md` - 상세 규칙
- `docs/checklists/PHASE3_CHECKLIST.md` - Phase 3 체크리스트

## ✔️ Phase 3 완료 기준

- [ ] 주요 쿼리 인덱스 추가
- [ ] N+1 문제 해결
- [ ] 핵심 로직 단위테스트 (>90%)
- [ ] 보안 재점검 완료
- [ ] GitHub 푸시 완료

---

**완료되면 다음 메시지를 보내세요:**

"Phase 3 완료했습니다. 성능 최적화와 테스트가 완료되었습니다."

그럼 Phase 4 (배포 준비) 가이드를 드리겠습니다.
