# 📋 Phase 4 Prompt - 배포 준비

성능과 테스트가 완료되었습니다. 이제 배포를 준비합니다.

## 📋 현재 상태
- Phase 3 완료: 성능 최적화 & 테스트 ✅
- 프로덕션 배포 준비 단계

## 🎯 Phase 4 작업 (Week 5)

다음 4가지를 진행해주세요:

### 1️⃣ 보안 최종 체크

**보안 체크리스트**
- [ ] 모든 API에 인증 있는가?
- [ ] RBAC 구현되었는가?
- [ ] RLS 정책이 모든 테이블에 있는가?
- [ ] 환경 변수가 .env.example에 정의되었는가?
- [ ] 민감한 정보가 코드에 없는가?
- [ ] rate limiting 설정?
- [ ] CORS 정책 설정?

### 2️⃣ Vercel 배포 설정

**필요한 파일**
- vercel.json
- 환경 변수 설정 (Vercel 대시보드)

**체크리스트**
- [ ] Build command 설정
- [ ] 모든 환경 변수 추가
- [ ] 프리뷰 배포 테스트
- [ ] 프로덕션 배포 설정

### 3️⃣ GitHub Actions CI/CD 설정

**필수 구성**
- 타입 체크 (`tsc --noEmit`)
- Linting (`eslint`)
- 단위 테스트 (`vitest`)
- 통합 테스트 (`vitest`)
- 빌드 (`next build`)

**파일**: `.github/workflows/ci.yml`

체크리스트:
- [ ] PR 생성 시 CI 자동 실행
- [ ] Main 브랜치 푸시 시 배포 자동 실행
- [ ] 모든 테스트 통과 후 배포

### 4️⃣ 기본 모니터링 설정

**Sentry 에러 추적**
- DSN 설정
- 기본 에러 캡처
- 환경 구분 (dev, staging, production)

**체크리스트**
- [ ] Sentry DSN 환경 변수 추가
- [ ] 에러 캡처 초기화
- [ ] 민감한 정보 필터링

## 📝 vercel.json 예시

```json
{
  "buildCommand": "pnpm build",
  "devCommand": "pnpm dev",
  "installCommand": "pnpm install",
  "framework": "nextjs",
  "regions": ["icn1"],
  "env": {
    "NEXT_PUBLIC_SUPABASE_URL": "@supabase-url",
    "NEXT_PUBLIC_SUPABASE_ANON_KEY": "@supabase-anon-key",
    "DATABASE_URL": "@database-url"
  }
}
```

## 🔗 참고

- `docs/RULES.md` - 상세 규칙
- `docs/checklists/PHASE4_CHECKLIST.md` - Phase 4 체크리스트

## ✔️ Phase 4 완료 기준

- [ ] 보안 최종 체크 완료
- [ ] Vercel 배포 설정 완료
- [ ] GitHub Actions CI/CD 설정 완료
- [ ] Sentry 기본 설정 완료
- [ ] 프리뷰 배포 성공
- [ ] GitHub 푸시 완료

---

**완료되면 다음 메시지를 보내세요:**

"Phase 4 완료했습니다. 배포 준비가 완료되었습니다."

그럼 Phase 5 (운영 최적화) 가이드를 드리겠습니다.
