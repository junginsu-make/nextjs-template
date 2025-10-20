# 🚀 Professional SaaS/System Architecture Template

AI와 함께 전문가급 시스템을 빠르게 구축하는 템플릿입니다.

## 🎯 특징

- ✅ **헥사고날 아키텍처**: 폴더 구조부터 시작
- ✅ **SOLID 원칙**: 자동 적용 체크리스트
- ✅ **5 Phase 개발 프로세스**: 기획 → 구현 → 배포
- ✅ **AI 친화적**: Cursor AI, Claude Code 최적화
- ✅ **프롬프트 템플릿**: Phase별 미리 만들어짐
- ✅ **30분 셋업**: 5주 안에 전문가급 시스템 완성

## 📖 사용법

### 1️⃣ 템플릿으로 새 저장소 생성

GitHub에서 "Use this template" 클릭

### 2️⃣ Phase 1 프롬프트 복사

```bash
cat docs/prompts/PHASE1_PROMPT.md
```

이 내용을 Claude / Cursor AI에 붙여넣고 프로젝트명, 설명만 입력

### 3️⃣ 각 Phase가 될 때마다 프롬프트 복사

- Week 2: `docs/prompts/PHASE2_PROMPT.md`
- Week 4: `docs/prompts/PHASE3_PROMPT.md`
- Week 5: `docs/prompts/PHASE4_PROMPT.md`
- Week 6+: `docs/prompts/PHASE5_PROMPT.md`

## 📚 주요 파일

- `docs/RULES.md` - 핵심 개발 규칙 (5개 Phase 분리)
- `docs/RULES_QUICK.md` - 1페이지 빠른 참조
- `docs/templates/PRD_TEMPLATE.md` - 기획 템플릿
- `docs/templates/LLD_TEMPLATE.md` - 기술 설계 템플릿
- `docs/templates/PLAN_TEMPLATE.md` - 개발 계획 템플릿
- `.cursorrules` - Cursor AI 자동 규칙

## 🛠️ 기술 스택

- **Frontend**: Next.js 14+ (App Router)
- **Language**: TypeScript 5+
- **Styling**: Tailwind CSS
- **Backend**: Supabase + Drizzle ORM
- **Database**: PostgreSQL 15+
- **Hosting**: Vercel
- **CI/CD**: GitHub Actions

## 📋 개발 순서 (절대 준수)

```
1. 기획 (PRD.md 작성)
   ↓
2. 설계 (LLD.md 작성)
   ↓
3. 계획 (PLAN.md 작성)
   ↓
4. 코드 (Phase별 구현)
```

## 🎓 Architecture

### 헥사고날 아키텍처

```
Presentation (API/Web)
    ↓
Application (Use Cases)
    ↓
Domain (Business Logic)
    ↑
Infrastructure (Database, Cache, External)
```

### 의존성 규칙

- **Domain**: 어떤 레이어도 의존 금지 (순수 비즈니스 로직)
- **Application**: Domain 인터페이스만 의존
- **Infrastructure**: Domain 인터페이스 구현
- **Presentation**: Application 사용

## 🚀 빠른 시작

### 첫 번째 프로젝트

```bash
# 1. 템플릿으로 새 저장소 생성
# GitHub에서 "Use this template" 클릭

# 2. 로컬에 클론
git clone https://github.com/YOUR_USERNAME/my-project.git
cd my-project

# 3. Phase 1 프롬프트 복사
cat docs/prompts/PHASE1_PROMPT.md

# 4. Claude / Cursor AI에 붙여넣기
# (프로젝트명, 설명만 입력)

# 5. 완료! ✨
```

## 📖 문서

- [RULES.md](docs/RULES.md) - 전체 규칙 및 가이드
- [RULES_QUICK.md](docs/RULES_QUICK.md) - 빠른 참조
- [TEMPLATE_README.md](docs/TEMPLATE_README.md) - 템플릿 사용법

## 💡 핵심 가치

✅ **빠른 시작**: Replit처럼 즉시 개발 시작  
✅ **전문가급 품질**: 10년차 개발자의 설계 패턴 자동 적용  
✅ **완벽한 문서화**: PRD, LLD, PLAN 체계적 관리  
✅ **자동화**: Git 커밋, 배포, 모니터링 자동 설정  
✅ **유지보수성**: 다른 개발자가 즉시 이해 가능한 구조

## 📝 License

MIT

---

**질문?** → docs/ 폴더 확인
