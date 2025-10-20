# 📋 Phase 2 Prompt - 핵심 기능 개발

Phase 1 설계가 완료되었습니다. 이제 코드를 구현합니다.

## 📋 현재 상태
- PRD.md ✅
- LLD.md ✅
- PLAN.md ✅
- GitHub 저장소 ✅
- 프로젝트 초기화 ✅

## 🎯 Phase 2 작업 (Week 2-3)

PLAN.md를 참고해서 Week 2-3의 모든 작업을 구현해주세요.

## ✅ 반드시 지켜야 할 규칙

### 1️⃣ 아키텍처 규칙

- [ ] **Domain**: 순수 비즈니스 로직만 (외부 라이브러리 import 금지)
- [ ] **Application**: Domain의 인터페이스만 호출
- [ ] **Infrastructure**: Domain 인터페이스의 구현체
- [ ] **Presentation**: Application 사용
- [ ] 의존성 방향이 항상 **외부 → 내부**

### 2️⃣ SOLID 원칙

- [ ] **단일 책임**: 클래스는 하나의 책임만
- [ ] **개방-폐쇄**: 확장에는 열려있고, 수정에는 닫혀있음
- [ ] **리스코프**: 자식 클래스는 부모로 대체 가능
- [ ] **인터페이스 분리**: 큰 인터페이스가 아닌 작은 것 여러 개
- [ ] **의존성 역전**: 구체 클래스가 아닌 인터페이스에 의존

### 3️⃣ 보안

- [ ] JWT 검증 미들웨어 추가
- [ ] 입력값 Zod로 검증
- [ ] RLS 정책 적용 (필요한 테이블)
- [ ] 환경 변수 사용 (.env.local)

### 4️⃣ 코드 품질

- [ ] TypeScript 타입 완벽히 지정
- [ ] 함수/클래스 문서화 (JSDoc)
- [ ] 의미있는 변수명

### 5️⃣ Git

- [ ] 각 기능마다 의미있는 커밋 메시지
  ```
  feat: add user authentication
  chore: setup database connection
  fix: resolve N+1 query issue
  ```
- [ ] 완료 후 자동 푸시

### 6️⃣ 문서

- [ ] PLAN.md의 체크박스 업데이트
- [ ] 주요 기능은 주석으로 설명

## 📝 작업 예시

```
Week 2 Day 1:
- [ ] User 엔티티 생성 (Domain)
- [ ] SignUp UseCase 구현 (Application)
- [ ] UserRepository 구현 (Infrastructure)
- [ ] 회원가입 API 생성 (Presentation)

Week 2 Day 2:
- [ ] Login 기능 추가
- [ ] JWT 발급 로직
- [ ] 인증 미들웨어
...
```

(PLAN.md의 실제 작업 내용으로 수정)

## 🔗 참고

- `docs/RULES.md` - 상세 규칙
- `docs/checklists/PHASE2_CHECKLIST.md` - Phase 2 체크리스트
- `docs/LLD.md` - 기술 설계 (API, DB 스키마)

## ✔️ Phase 2 완료 기준

- [ ] 모든 기능 구현 완료
- [ ] 모든 체크리스트 항목 완료
- [ ] GitHub에 푸시 완료
- [ ] PLAN.md 업데이트 완료

---

**완료되면 다음 메시지를 보내세요:**

"Phase 2 완료했습니다. MVP 기능 개발이 완료되었습니다."

그럼 Phase 3 (성능 최적화 + 테스트) 체크리스트를 드리겠습니다.
