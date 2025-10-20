# 🚀 실제 사용 방법: Claude Code & Cursor AI에서 활용하기

> **목표**: 새 프로젝트를 시작할 때 이 템플릿을 어떻게 활용하는지 실전 가이드

---

## 📋 전체 흐름 (5분 요약)

```
1️⃣ GitHub에서 템플릿 저장소 클론 (1분)
   ↓
2️⃣ Cursor AI 또는 Claude Code로 폴더 열기 (1분)
   ↓
3️⃣ PHASE1_PROMPT.md 복사 (30초)
   ↓
4️⃣ AI에 붙여넣고 프로젝트명 입력 (30초)
   ↓
5️⃣ AI가 자동으로 PRD, LLD, PLAN 생성 (2-3분)
   ↓
완료! 🎉
```

---

## 🎯 Step 1: 새 프로젝트 생성 (GitHub)

### 1.1 템플릿에서 새 저장소 생성

**GitHub 웹에서:**

1. https://github.com/junginsu-make/nextjs-sysarch-template 방문
2. **"Use this template"** 버튼 클릭
3. 저장소 설정:
   ```
   Repository name: my-awesome-saas
   Description: (선택)
   Public / Private: 선택
   ```
4. **"Create repository from template"** 클릭

### 1.2 로컬에 클론

```bash
git clone https://github.com/YOUR_USERNAME/my-awesome-saas.git
cd my-awesome-saas
```

---

## 🎯 Step 2: Cursor AI에서 열기

### 2.1 Cursor AI 설치 (처음 1회만)

- https://cursor.sh 에서 다운로드
- 설치 후 실행

### 2.2 프로젝트 폴더 열기

**Cursor AI에서:**

1. **File** → **Open Folder**
2. `my-awesome-saas` 폴더 선택
3. 열기

---

## 🎯 Step 3: Phase 1 프롬프트 복사

### 3.1 프롬프트 파일 열기

**Cursor AI의 파일 트리에서:**

```
my-awesome-saas/
├── docs/
│   └── prompts/
│       └── PHASE1_PROMPT.md  ← 이 파일 열기
```

### 3.2 전체 내용 복사

```
1. PHASE1_PROMPT.md 파일 우클릭
2. "Copy" 클릭
또는
Ctrl+A (전체 선택) → Ctrl+C (복사)
```

---

## 🎯 Step 4: AI 채팅에 붙여넣기

### 4.1 Cursor AI의 AI 채팅 열기

**Cursor AI:**

- 우측 상단에서 **Chat** 클릭 (또는 Ctrl+L)
- 또는 **Composer** 모드 사용 (더 강력함)

### 4.2 프롬프트 붙여넣기

```
1. 채팅 입력창에 붙여넣기 (Ctrl+V)
2. 또는 드래그-드롭으로 PHASE1_PROMPT.md 파일 추가
```

### 4.3 프로젝트 정보 입력

프롬프트의 이 부분을 채우세요:

```markdown
프로젝트명: motion-magic
설명: AI와 모션 감지를 통한 비디오 편집 플랫폼
핵심 기능: 
- 자동 모션 감지
- 비디오 자동 편집
- AI 효과 적용
```

### 4.4 전송

**Enter** 키를 눌러 전송

---

## 🎯 Step 5: AI가 자동으로 생성

### 5.1 AI의 작업

AI가 자동으로 다음을 생성합니다:

✅ **docs/PRD.md** - 기획 문서  
✅ **docs/LLD.md** - 기술 설계  
✅ **docs/PLAN.md** - 개발 계획  
✅ **GitHub 저장소 생성** - (선택적)  
✅ **프로젝트 초기화** - (선택적)

### 5.2 시간

- ⏱️ 약 2-3분

---

## 📝 예시: 실제 대화

### 당신의 입력:

```markdown
# 📋 Phase 1 Prompt - 프로젝트 초기 설계

다음 프로젝트를 시작합니다.

## 📌 프로젝트 정보

**프로젝트명**: Motion Magic
**설명**: AI 기반 비디오 모션 감지 및 자동 편집 플랫폼
**핵심 기능**: 
- 자동 모션 감지 (얼굴, 손, 몸)
- 모션 기반 자동 편집
- AI 효과 자동 적용
- 편집된 비디오 다운로드

## 📚 규칙

이 프로젝트는 docs/RULES.md의 규칙을 따릅니다:
- 헥사고날 아키텍처 ...
- SOLID 원칙 ...
...
```

### AI의 응답:

```
✅ Phase 1 설계를 진행하겠습니다.

1️⃣ PRD.md 작성 중...
   - Executive Summary
   - 타겟 사용자
   - 핵심 기능 (MoSCoW)
   - 성공 지표
   ✅ 완료!

2️⃣ LLD.md 작성 중...
   - 시스템 아키텍처
   - 데이터베이스 설계
   - API 엔드포인트
   ✅ 완료!

3️⃣ PLAN.md 작성 중...
   - Week별 마일스톤
   - Day별 작업
   ✅ 완료!

4️⃣ 파일 저장...
   ✅ docs/PRD.md 저장됨
   ✅ docs/LLD.md 저장됨
   ✅ docs/PLAN.md 저장됨

🎉 Phase 1 완료!

다음 단계:
- GitHub 저장소에 푸시
- Phase 2 시작 (1주일 후)
```

---

## 🔄 Phase 2 이후: 기능 개발

### 1주일 후 Phase 2 시작:

```bash
# 1. PHASE2_PROMPT.md 열기
cat docs/prompts/PHASE2_PROMPT.md | pbcopy

# 2. Cursor AI 채팅에 붙여넣기

# 3. PLAN.md의 Week 2-3 작업 내용 추가
"PLAN.md의 Week 2-3 작업을 구현해주세요:
- Day 1: User 엔티티 생성...
- Day 2: SignUp UseCase...
..."

# 4. 전송!
```

---

## 💡 팁: Cursor AI 활용법

### Tip 1️⃣: Composer 모드 사용 (더 강력)

```
Cursor AI → Composer 탭 (Ctrl+I)
→ 멀티라인 편집 가능
→ 여러 파일 동시 생성 가능
```

### Tip 2️⃣: .cursorrules 자동 적용

```
.cursorrules 파일이 있으면 
Cursor AI가 자동으로 이 규칙을 읽습니다.

따라서 매번 규칙을 설명할 필요 없음! ✨
```

### Tip 3️⃣: 파일 생성 요청

```
"다음 파일들을 생성해주세요:
- src/domain/user/User.ts
- src/application/SignUp.ts
- src/infrastructure/UserRepositoryImpl.ts
- src/presentation/api/signup/route.ts

각각 헥사고날 아키텍처와 SOLID를 따르도록."
```

### Tip 4️⃣: 진행 상황 확인

```
"현재 진행 상황이 어떻게 되나요?
PLAN.md와 비교해서 체크박스 업데이트 가능한가요?"
```

---

## 🎯 Claude Code에서 사용하기

### Claude Code란?

- Claude를 터미널/코드 에디터처럼 사용
- 명령어로 AI에게 코드 생성 요청
- 자동으로 파일 생성/수정

### 사용 방법:

```bash
# 1. 프로젝트 폴더에서 Claude Code 실행
cd my-awesome-saas
claude-code start

# 또는 명령어로 바로 실행:
claude-code "PHASE1_PROMPT.md를 읽고 Phase 1을 진행해주세요"
```

---

## 🚀 완전한 워크플로우 (5주)

### Week 1: 기획
```bash
# Cursor AI에서
1. PHASE1_PROMPT.md 복사
2. 프로젝트 정보 입력
3. AI가 PRD, LLD, PLAN 생성
4. GitHub 푸시
```

### Week 2-3: 기능 개발
```bash
# Cursor AI에서
1. PHASE2_PROMPT.md 복사
2. PLAN.md의 Week 2-3 작업 내용 추가
3. AI가 코드 생성
4. 테스트 후 GitHub 푸시
```

### Week 4: 성능 & 테스트
```bash
# Cursor AI에서
1. PHASE3_PROMPT.md 복사
2. 성능 최적화 + 테스트 요청
3. GitHub 푸시
```

### Week 5: 배포 준비
```bash
# Cursor AI에서
1. PHASE4_PROMPT.md 복사
2. 배포 설정 요청
3. GitHub 푸시
```

### Week 6+: 운영
```bash
# Cursor AI에서
1. PHASE5_PROMPT.md 복사
2. 모니터링 설정 요청
3. 주간 리뷰 및 개선
```

---

## 📌 주의사항

### ⚠️ 주의 1: 환경 변수

```bash
# .env.local 파일 생성 (Git에 추가 금지!)
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
```

### ⚠️ 주의 2: GitHub 푸시

```bash
git add .
git commit -m "feat: implement authentication"
git push origin main

# ⚠️ 토큰/키가 노출되지 않도록 주의!
```

### ⚠️ 주의 3: 문서 동기화

```bash
# 각 Phase 완료 후
1. PLAN.md 체크박스 업데이트
2. PRD/LLD와 일치 확인
3. GitHub에 커밋
```

---

## ✅ 체크리스트: 사용 준비

- [ ] GitHub 로그인
- [ ] nextjs-sysarch-template "Template Repository" 설정 완료
- [ ] Cursor AI 설치
- [ ] 새 프로젝트 생성 (my-awesome-saas)
- [ ] Cursor AI에서 폴더 열기
- [ ] PHASE1_PROMPT.md 준비

---

## 🎬 첫 번째 프로젝트 체험하기

### 지금 바로 해보세요!

```bash
# 1. 템플릿에서 새 저장소 생성
https://github.com/junginsu-make/nextjs-sysarch-template
→ "Use this template" 클릭
→ test-project 생성

# 2. 로컬에 클론
git clone https://github.com/YOUR_USERNAME/test-project.git
cd test-project

# 3. Cursor AI에서 열기
Ctrl+K (Cursor 파일 열기)
test-project 폴더 선택

# 4. Phase 1 시작
Ctrl+L (채팅)
→ docs/prompts/PHASE1_PROMPT.md 파일 드래그-드롭
→ 프로젝트명 입력
→ Enter!

# 5. 결과 확인
docs/PRD.md, LLD.md, PLAN.md 생성됨!
```

---

## 🎯 결론

이 시스템의 핵심:

✅ **프롬프트가 이미 준비됨** - 매번 작성할 필요 없음  
✅ **.cursorrules 자동 적용** - 규칙을 AI가 자동으로 따름  
✅ **5단계 프로세스** - Phase별로 명확하게 진행  
✅ **템플릿 저장소** - 다음 프로젝트도 빠르게 시작  

---

**지금 바로 새 프로젝트를 시작해보세요!** 🚀

질문 있으면 언제든 물어봐주세요! 😊
