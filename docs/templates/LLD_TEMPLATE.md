# LLD: {프로젝트명} (간소화 버전)

> **⚠️ 주의**: 이 문서는 초기 버전입니다. 각 Phase 진행하면서 상세 내용을 추가합니다.

---

## 1. 시스템 아키텍처 (다이어그램)
```
사용자 
  ↓
[시스템] 
  ↓
  ├→ Supabase (Auth, DB, Storage)
  ├→ Vercel (Hosting)
  └→ Redis (Cache)
```

**헥사고날 아키텍처**:
```
Presentation → Application → Domain ← Infrastructure
```

---

## 2. 기술 스택

| 계층 | 기술 |
|------|------|
| Frontend | Next.js 14+, TypeScript, Tailwind |
| Backend | Next.js API Routes |
| Database | PostgreSQL (Supabase) |
| ORM | Drizzle ORM |
| Auth | Supabase Auth |
| Hosting | Vercel |
| Monitoring | Sentry |

---

## 3. 데이터베이스 (ERD 개요)
```
users (Supabase Auth)
  ↓ 1:1
profiles
  ↓ 1:N
{주요 리소스}
  ↓ 1:N
{관계 리소스}
```

> 📝 **상세 스키마**: Phase 2에서 `phase-2-detail.md`에 작성됩니다.

---

## 4. 주요 컴포넌트 (간단히)

| 컴포넌트 | 역할 (1문장) |
|----------|-------------|
| Domain/{Feature} | 비즈니스 로직 |
| Application/{Feature} | Use Cases |
| Infrastructure/Database | DB 접근 |
| Presentation/API | REST API |

---

## 5. API 엔드포인트 (개요)
```
POST   /api/auth/signup
POST   /api/auth/login
GET    /api/{resource}
POST   /api/{resource}
PATCH  /api/{resource}/:id
DELETE /api/{resource}/:id
```

> 📝 **상세 API 명세**: 각 Phase에서 점진적으로 추가됩니다.

---

## 6. 보안 전략 (요약)

- **인증**: JWT via Supabase
- **권한**: RBAC
- **DB 보안**: RLS 정책
- **통신**: HTTPS (TLS 1.3)
- **입력 검증**: Zod

---

## 7. 성능 전략 (요약)

- **캐싱**: Redis (1시간 TTL)
- **DB 인덱스**: 주요 조회 칼럼
- **N+1 방지**: Drizzle `with()`
- **번들 최적화**: Code splitting

---

## 📌 다음 단계

- Phase별로 구체적인 설계를 `phase-N-detail.md`에 추가
- 코드 구현하면서 실제 구현 내용을 이 문서에 반영
- API 명세, DB 스키마는 점진적으로 확장

---

**버전**: 1.0 (초기)  
**작성일**: {날짜}  
**다음 업데이트**: Phase 2 시작 시
