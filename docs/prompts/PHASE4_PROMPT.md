# 📋 Phase 4 Prompt - 배포 준비

Phase 3 최적화가 완료되었습니다. 이제 프로덕션 배포를 준비합니다.

## 📋 현재 상태
- Phase 3 완료: 성능 최적화 & 테스트 ✅
- MVP 완성 ✅

## 🎯 Phase 4 작업 (Week 5)

**PLAN.md의 Week 5 작업을 순서대로 구현해주세요.**

### **작업 방식**

각 Day 작업마다:

1. **PLAN.md 확인** → Week 5 Day {N} 작업 확인
2. **인프라 설정** → Vercel/GitHub Actions 설정
3. **문서 업데이트** → README에 배포 가이드 추가
4. **Git 커밋** → `chore: Week 5 Day {N} - {작업}`
5. **PLAN.md 체크박스 업데이트**

---

## ✅ Week 5 주요 작업 (PLAN.md 참고)

### Day 21-22: Vercel 배포
- [ ] `vercel.json` 작성
- [ ] 환경 변수 설정
- [ ] 프리뷰 배포 테스트

**문서 업데이트**:
- README: "배포 가이드" 섹션 추가

---

### Day 22-23: GitHub Actions CI/CD
- [ ] `.github/workflows/ci.yml` 작성
- [ ] PR 체크 자동화
- [ ] 자동 배포 설정

**문서 업데이트**:
- 새 파일: `docs/phases/phase-4-cicd.md` (CI/CD 가이드)

---

### Day 24: 모니터링 설정
- [ ] Sentry 초기화
- [ ] 에러 캡처 테스트
- [ ] 알림 설정

**문서 업데이트**:
- 새 파일: `docs/phases/phase-4-monitoring.md` (모니터링 가이드)

---

### Day 25: 최종 배포
- [ ] E2E 테스트
- [ ] 보안 최종 체크
- [ ] 프로덕션 배포

**문서 업데이트**:
- README: "프로덕션 URL" 추가
- PRD: "런치 날짜" 업데이트

---

## ✔️ Phase 4 완료 기준

- [ ] PLAN.md의 모든 Week 5 작업 완료
- [ ] Vercel 프로덕션 배포 성공
- [ ] CI/CD 파이프라인 작동
- [ ] Sentry 에러 수집 확인
- [ ] README 배포 가이드 작성
- [ ] Git 커밋 완료

---

**완료되면 다음 메시지를 보내세요:**

"Phase 4 완료했습니다.
- 프로덕션 URL: {URL}
- CI/CD: GitHub Actions ✅
- 모니터링: Sentry ✅

이제 Phase 5 (운영)을 시작할 준비가 되었습니다."
