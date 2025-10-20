# ⚡ RULES - 빠른 참조 (1페이지)

## 🎯 핵심 원칙 3가지

### 1️⃣ 개발 순서
```
PRD → LLD → PLAN → 코드 → 배포
```

### 2️⃣ 아키텍처 (헥사고날)
```
Presentation → Application → Domain ← Infrastructure
                   ↓
              순수 비즈니스 로직
```

### 3️⃣ SOLID 원칙
- **S**: 클래스당 1개 책임
- **O**: 인터페이스로 확장
- **L**: 자식은 부모로 대체 가능
- **I**: 작은 인터페이스 여러 개
- **D**: 인터페이스에 의존

---

## 🛠️ 기술 스택
| 영역 | 기술 |
|------|------|
| Frontend | Next.js 14+, TypeScript, Tailwind |
| Backend | Supabase, Drizzle ORM |
| Database | PostgreSQL 15+ |
| Hosting | Vercel |
| Monitoring | Sentry |

---

## 📋 각 Phase별 해야 할 일

| Phase | 시기 | 파일 |
|-------|------|------|
| 1 | Week 1 | PHASE1_PROMPT.md + PHASE1_CHECKLIST.md |
| 2 | Week 2-3 | PHASE2_PROMPT.md + PHASE2_CHECKLIST.md |
| 3 | Week 4 | PHASE3_PROMPT.md + PHASE3_CHECKLIST.md |
| 4 | Week 5 | PHASE4_PROMPT.md + PHASE4_CHECKLIST.md |
| 5 | Week 6+ | PHASE5_PROMPT.md + PHASE5_CHECKLIST.md |

---

## 📝 문서 작성 순서

1. **PRD.md** ← 기획
2. **LLD.md** ← 기술 설계
3. **PLAN.md** ← 개발 계획

---

## ✅ 코드 작성 체크리스트

### 아키텍처
- [ ] Domain: 비즈니스 로직만
- [ ] Application: Domain 인터페이스만 호출
- [ ] Infrastructure: 구현체
- [ ] 의존성 방향: 외부 → 내부

### 보안
- [ ] JWT 검증
- [ ] Zod 입력 검증
- [ ] 환경 변수 사용
- [ ] RLS 정책

### 품질
- [ ] TypeScript 타입 완벽
- [ ] 함수/클래스 문서화
- [ ] 의미있는 변수명

### Git
- [ ] 의미있는 커밋 메시지
- [ ] PLAN.md 업데이트
- [ ] GitHub 푸시

---

## 🚀 빠른 시작

```bash
# 1. 템플릿으로 새 저장소 생성
# GitHub에서 "Use this template" 클릭

# 2. Phase 1 프롬프트 복사
cat docs/prompts/PHASE1_PROMPT.md | pbcopy

# 3. Claude/Cursor AI에 붙여넣기
# (프로젝트명, 설명만 입력)

# 4. 완료! ✨
```

---

## 📊 성공 기준

각 Phase마다:
- [ ] 모든 체크리스트 항목 완료
- [ ] GitHub 푸시 완료
- [ ] 문서 최신화

---

## 💡 팁

- **.cursorrules**: Cursor AI가 자동으로 읽음 (설명 필요 없음)
- **템플릿 업데이트**: 메인 저장소만 수정하면 다음 프로젝트에 자동 적용
- **프롬프트 빠른 복사**: `cat docs/prompts/PHASE2_PROMPT.md | pbcopy`

---

## 🔗 더 자세한 내용

- **전체**: [RULES.md](RULES.md)
- **사용법**: [TEMPLATE_README.md](TEMPLATE_README.md)
- **각 Phase**: PHASE1_PROMPT.md ~ PHASE5_PROMPT.md

---

**이제 시작하세요!** 🚀
