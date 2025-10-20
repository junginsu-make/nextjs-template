# 📋 Phase 5 Prompt - 운영 최적화 & 모니터링

배포가 완료되었습니다! 이제 운영 최적화를 시작합니다.

## 📋 현재 상태
- Phase 4 완료: 배포 준비 ✅
- 프로덕션 배포 완료 ✅
- 사용자 유입 시작

## 🎯 Phase 5 작업 (Week 6+)

다음을 진행해주세요:

### 1️⃣ 고급 모니터링 설정

**Prometheus + Grafana**
- HTTP 요청 메트릭 수집
- DB 쿼리 성능 모니터링
- 캐시 히트율 모니터링
- 에러율 모니터링

**수집할 지표**
- 요청 시간 (p50, p95, p99)
- 에러율
- DB 쿼리 시간
- 캐시 성능
- 동시 사용자 수

### 2️⃣ E2E 테스트 (선택사항)

**Playwright로 중요 시나리오 테스트**

예시:
```typescript
test('User signup and login flow', async ({ page }) => {
  await page.goto('/signup');
  await page.fill('[name=email]', 'test@example.com');
  await page.fill('[name=password]', 'Password123!');
  await page.click('button[type=submit]');
  
  // 검증
  await expect(page).toHaveURL('/dashboard');
});
```

**테스트 대상**
- 회원가입 → 로그인
- 핵심 기능 (CRUD)
- 결제 (있으면)
- 에러 처리

### 3️⃣ 성능 최적화 심화

**캐싱 전략**
- 자주 변하지 않는 데이터: Redis (TTL: 1시간)
- 변경 빈도 낮음: Browser 캐시 (1주일)
- API 응답: ETag 활용

**쿼리 최적화**
- 자주 사용하는 VIEW 생성
- 배치 작업 최적화
- 데이터베이스 통계 업데이트

**프론트엔드 최적화**
- 번들 크기 분석
- 이미지 최적화
- 코드 스플리팅

### 4️⃣ 로그 분석

**로그 수집 (Loki + Promtail)**
- 구조화된 로깅 (JSON)
- 로그 레벨 구분 (INFO, WARN, ERROR)
- Grafana에서 시각화

**분석할 로그**
- 에러 로그
- 느린 쿼리
- 인증 실패
- 외부 API 호출

### 5️⃣ 사용자 피드백 수집

**분석 지표**
- DAU (Daily Active Users)
- 기능별 사용률
- 에러 발생 패턴
- 성능 이슈 (느린 페이지 등)

**개선 우선순위**
1. 에러 수정 (오류 로그)
2. 성능 개선 (느린 페이지)
3. 기능 추가 (사용자 피드백)

## 📊 모니터링 대시보드

주간 리뷰 항목:
- [ ] 에러율: < 0.1%
- [ ] p95 응답시간: < 200ms
- [ ] 가용성: > 99.9%
- [ ] 캐시 히트율: > 80%
- [ ] DB 커넥션: < 80% 사용

## 🔗 참고

- `docs/RULES.md` - 상세 규칙
- `docs/checklists/PHASE5_CHECKLIST.md` - Phase 5 체크리스트

## ✔️ Phase 5 진행 중 유지할 사항

- [ ] 주간 성능 리뷰
- [ ] 에러 로그 모니터링
- [ ] 사용자 피드백 수집
- [ ] 정기적 배포 (버그픽스, 기능 추가)
- [ ] 문서 최신화

---

축하합니다! 🎉

이제 **전문가급 시스템**이 완성되었습니다.

지속적인 개선을 통해 더 나은 제품을 만들어 나가세요!
