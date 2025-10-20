# 전문가급 AI 코딩 규칙 - 완결판 (RULES.md)

> **목표**: 시니어 개발자(10년차+) 수준의 시스템을 초보자도 구축  
> **방법**: 헥사고날 아키텍처 + SOLID + DDD 자동 적용  
> **환경**: Cursor AI, Claude Code, Gemini CLI, Replit Agent 호환

---

## 🎯 핵심 원칙

### 1. 개발 순서 (절대 준수)

```
PRD 작성 → LLD 작성 → PLAN 작성 → GitHub 생성 → 개발 시작
```

**모든 개발은 문서 기반으로 진행되며, 코드 변경 시 문서도 즉시 업데이트**

### 2. 아키텍처 패턴: 헥사고날 (Ports & Adapters)

```
[Presentation] → [Application] → [Domain] ← [Infrastructure]
                      ↓
                  순수 비즈니스 로직 (의존성 0)
```

**의존성 규칙**:
- Domain: 어떤 레이어도 의존 금지
- Application: Domain 인터페이스만 의존
- Infrastructure: Domain 인터페이스 구현
- Presentation: Application 사용

### 3. SOLID 원칙 자동 적용

모든 코드 생성 시 다음 원칙 강제:
- **S**: 클래스당 하나의 책임
- **O**: 인터페이스로 확장, 코드 수정 금지
- **L**: 부모 타입을 자식으로 대체 가능
- **I**: 작은 인터페이스 여러 개
- **D**: 구체 클래스가 아닌 인터페이스에 의존

---

## 🔧 프로젝트 환경 설정

### 현재 프로젝트 정보

```bash
# GitHub
Repository: https://github.com/junginsu-make/motion-magic
Personal Access Token: YOUR_TOKEN_HERE

# Supabase
Project URL: https://wlgjnlrufrdgxorkicxy.supabase.co
Anon Key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndsZ2pubHJ1ZnJkZ3hvcmtpY3h5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkxOTgxNDMsImV4cCI6MjA3NDc3NDE0M30.8qhHfDGnV4fCMDGt6ehTt5M79hp982E0s8FuyZY6r1Y
Access Token: sbp_9aa10d36445eb326575c11f61687feb32944055a
DB Password: a20616050!
```

### 표준 기술 스택 (변경 금지)

```yaml
Frontend:
  Framework: Next.js 14+ (App Router)
  Language: TypeScript 5+
  Styling: Tailwind CSS 3.4+
  UI Components: shadcn/ui + Radix UI
  State Management:
    - Client: Zustand
    - Server: TanStack Query
  Forms: React Hook Form + Zod

Backend:
  BaaS: Supabase
    - Auth: Email/Social/OTP
    - Database: PostgreSQL 15+
    - Storage: S3-compatible
    - Realtime: WebSocket
  ORM: Drizzle ORM
  Cache: Upstash Redis
  
Infrastructure:
  Hosting: Vercel
  CI/CD: GitHub Actions
  Monitoring: Sentry + Vercel Analytics
  Logging: Loki + Grafana + Promtail

Development:
  Runtime: Node.js 20+
  Package Manager: pnpm
  Container: Docker + Docker Compose
  Git: GitHub CLI (gh)
```

---

## 📁 디렉토리 구조

```
project-root/
├── docs/
│   ├── PRD.md                    # 제품 요구사항
│   ├── LLD.md                    # 기술 설계
│   ├── PLAN.md                   # 개발 계획
│   └── architecture/
│       └── adr/                  # 아키텍처 결정 기록
│
├── src/
│   ├── domain/                   # 순수 비즈니스 로직
│   │   ├── {feature}/
│   │   │   ├── entities/        # 엔티티
│   │   │   ├── value-objects/   # 값 객체
│   │   │   ├── aggregates/      # 집합체
│   │   │   ├── repositories/    # 인터페이스
│   │   │   └── events/          # 도메인 이벤트
│   │   └── shared/
│   │
│   ├── application/              # 유스케이스
│   │   ├── use-cases/{feature}/
│   │   ├── dto/
│   │   └── ports/               # 외부 서비스 인터페이스
│   │
│   ├── infrastructure/           # 외부 시스템 구현
│   │   ├── database/
│   │   │   ├── drizzle/         # 스키마
│   │   │   └── repositories/
│   │   ├── cache/               # Redis
│   │   ├── supabase/            # Supabase 클라이언트
│   │   └── external-services/
│   │
│   ├── presentation/             # 인터페이스
│   │   ├── api/                 # REST API
│   │   │   ├── routes/
│   │   │   ├── controllers/
│   │   │   ├── middlewares/
│   │   │   └── validators/
│   │   └── web/                 # Next.js App
│   │       └── app/
│   │
│   └── shared/
│       ├── types/               # Result, Either
│       ├── errors/
│       └── decorators/
│
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── deploy.yml
│
├── docker/
│   ├── Dockerfile
│   └── docker-compose.yml
│
├── .env.local
├── .env.example
└── drizzle.config.ts
```

---

## 📝 필수 문서 작성

### 1. PRD.md 템플릿

```markdown
# PRD: {프로젝트명}

## 1. Executive Summary
**Problem**: {사용자가 겪는 문제 3줄}

**Solution**: {이 프로젝트가 제공하는 해결책 3줄}

**Impact**: {예상 비즈니스 가치/효과}

## 2. 타겟 사용자
- **Primary**: {주요 사용자} - {니즈}
- **Secondary**: {부수 사용자} - {니즈}

## 3. 핵심 기능 (MoSCoW)

### Must Have (필수)
- [ ] **{기능 1}**
  - 설명: {무엇을 하는가}
  - 사용자 가치: {왜 필요한가}
  - 비즈니스 가치: {ROI}
  - 기술 복잡도: High/Medium/Low
  - 우선순위: P0

- [ ] **{기능 2}**
  [동일 형식]

### Should Have (있어야 함)
- [ ] {기능 3}

### Could Have (있으면 좋음)
- [ ] {기능 4}

### Won't Have (이번엔 안 함)
- [ ] {기능 5}

## 4. 비기능 요구사항

### 성능
- 응답 시간: p50 < 100ms, p95 < 200ms, p99 < 500ms
- 처리량: {X} TPS (Transactions Per Second)
- 동시 사용자: {Y}명

### 가용성
- SLA: 99.9% uptime (월 43.2분 다운타임 허용)
- RTO: 1시간 (복구 시간 목표)
- RPO: 5분 (데이터 복구 시점)

### 보안
- 인증: Supabase Auth (JWT)
- 권한: RBAC (Role-Based Access Control)
- 암호화: TLS 1.3 (전송), AES-256 (저장)
- 준수: GDPR, CCPA

### 확장성
- 수평 확장: Vercel Auto-scaling
- 데이터베이스: Read Replicas
- 캐시: Redis Cluster

## 5. 성공 지표 (KPI)

### North Star Metric
- {핵심 지표}: {목표 수치}

### AARRR
- Acquisition (획득): {지표}
- Activation (활성화): {지표}
- Retention (유지): {지표}
- Revenue (수익): {지표}
- Referral (추천): {지표}

## 6. 일정
- Week 1-2: 설계 + 인증
- Week 3-4: 핵심 기능
- Week 5: 테스트 + 배포

## 7. 리스크
| 리스크 | 확률 | 영향 | 완화 전략 |
|--------|------|------|-----------|
| {리스크 1} | 중 | 고 | {전략} |

---
**버전**: 1.0  
**작성일**: {날짜}  
**승인**: {이름}
```

### 2. LLD.md 템플릿

```markdown
# LLD: {프로젝트명}

## 1. 시스템 아키텍처

### C4 Model - Context Diagram
```
[사용자] → [{시스템}] → [Supabase]
                     → [외부 API]
```

### Hexagonal Architecture
```
Presentation (API/Web)
    ↓
Application (Use Cases)
    ↓
Domain (Entities, Value Objects)
    ↑
Infrastructure (DB, Cache, External)
```

## 2. 데이터베이스 설계

### ERD
```
users (Supabase Auth)
  ↓ 1:1
profiles
  ↓ 1:N
{핵심 리소스}
  ↓ 1:N
{관계 리소스}
```

### 테이블 스키마

```sql
-- profiles
CREATE TABLE profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE,
  display_name TEXT NOT NULL,
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 인덱스
CREATE INDEX idx_profiles_user_id ON profiles(user_id);

-- RLS 정책
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users view own profile"
ON profiles FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users update own profile"
ON profiles FOR UPDATE
USING (auth.uid() = user_id);
```

### 인덱싱 전략
```sql
-- 복합 인덱스 (WHERE + ORDER BY)
CREATE INDEX idx_{table}_compound 
ON {table}(filter_col, sort_col DESC);

-- 부분 인덱스 (조건부)
CREATE INDEX idx_{table}_partial 
ON {table}(column) 
WHERE status = 'active';

-- 커버링 인덱스
CREATE INDEX idx_{table}_covering 
ON {table}(filter_col) 
INCLUDE (select_col1, select_col2);
```

## 3. API 설계

### RESTful 엔드포인트

```
# 인증
POST   /api/v1/auth/signup
POST   /api/v1/auth/login
POST   /api/v1/auth/logout

# 리소스
GET    /api/v1/{resource}              # 목록
POST   /api/v1/{resource}              # 생성
GET    /api/v1/{resource}/:id          # 조회
PATCH  /api/v1/{resource}/:id          # 수정
DELETE /api/v1/{resource}/:id          # 삭제
```

### 표준 응답 형식

```typescript
// 성공
{
  success: true,
  data: T,
  meta?: {
    page: number,
    per_page: number,
    total: number
  }
}

// 실패
{
  success: false,
  error: {
    code: "ERROR_CODE",
    message: "Human readable message",
    details?: any[]
  }
}
```

## 4. 보안 설계

### 인증 흐름
```
1. 사용자 로그인
2. Supabase Auth 검증
3. JWT 발급 (Access + Refresh)
4. httpOnly 쿠키 저장
5. 미들웨어에서 JWT 검증
6. RBAC 권한 체크
```

### 보안 체크리스트
- [ ] JWT 검증
- [ ] RBAC 구현
- [ ] RLS 정책
- [ ] Rate Limiting (100 req/min)
- [ ] CORS 정책
- [ ] XSS 방지 (DOMPurify)
- [ ] SQL Injection 방지 (Parameterized Query)

## 5. 성능 최적화

### 캐싱 전략
```
L1: Memory Cache (빠름, 작음, 60초)
    ↓ Miss
L2: Redis (중간, 큼, 1시간)
    ↓ Miss
L3: PostgreSQL (느림, 영구)
```

### N+1 해결
```sql
-- ❌ N+1 문제
SELECT * FROM posts;
-- 각 post마다: SELECT * FROM users WHERE id = post.user_id;

-- ✅ JOIN 사용
SELECT p.*, u.name, u.avatar
FROM posts p
JOIN users u ON p.user_id = u.id;
```

---
**버전**: 1.0  
**작성일**: {날짜}  
**리뷰어**: {이름}
```

### 3. PLAN.md 템플릿

```markdown
# 개발 계획: {프로젝트명}

## 진행 상황
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
전체    ████████░░░░░░░░░░░░  42% (16/45)
Week 1  ████████████████████  100% (10/10) ✅
Week 2  ███████░░░░░░░░░░░░░  35% (7/20)
Week 3  ░░░░░░░░░░░░░░░░░░░░  0% (0/15)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## Week 1: 설계 및 환경 설정

### Day 1: 문서 작성 ✅
- [x] PRD.md 작성
- [x] LLD.md 작성
- [x] PLAN.md 작성 (이 문서)
- [x] GitHub 저장소 생성

**완료 기준**:
- [x] 모든 문서 승인
- [x] Git 첫 커밋

### Day 2: 프로젝트 초기화
- [ ] Next.js 프로젝트 생성
- [ ] Drizzle ORM 설정
- [ ] Supabase 연결
- [ ] 환경 변수 설정

**완료 기준**:
- [ ] `pnpm dev` 실행 성공
- [ ] Supabase 연결 확인

### Day 3-4: 인증 시스템
- [ ] Supabase Auth 연동
- [ ] 로그인/회원가입 페이지
- [ ] JWT 미들웨어
- [ ] RBAC 구현

**완료 기준**:
- [ ] 회원가입 → 로그인 → 대시보드 흐름
- [ ] 보호된 라우트 작동
- [ ] 테스트 통과

### Day 5: 아키텍처 기반 구조
- [ ] Domain 레이어 (Entity, ValueObject)
- [ ] Application 레이어 (UseCase)
- [ ] Infrastructure 레이어 (Repository)
- [ ] Presentation 레이어 (Controller)

**완료 기준**:
- [ ] 헥사고날 아키텍처 구현
- [ ] SOLID 원칙 준수
- [ ] 디렉토리 구조 완성

**Week 1 마일스톤**: 인증 시스템 + 아키텍처 기반 완성

---

## Week 2-3: 핵심 기능 개발

### Week 2 Day 1-2: {기능 1} - 도메인 레이어
- [ ] Entity 클래스
- [ ] Value Objects
- [ ] Repository 인터페이스
- [ ] 도메인 이벤트

**완료 기준**:
- [ ] 단위 테스트 > 90%
- [ ] 비즈니스 규칙 검증

### Week 2 Day 3-5: {기능 1} - 전체 구현
- [ ] UseCase 구현
- [ ] Repository 구현 (Drizzle)
- [ ] Controller 구현
- [ ] UI 컴포넌트

**완료 기준**:
- [ ] E2E 테스트 통과
- [ ] API 응답 p95 < 200ms

[Week 3 동일 형식으로 기능 2 구현]

---

## Week 4: UI/UX 개선

### Day 1-2: 반응형 디자인
- [ ] 모바일 최적화
- [ ] 태블릿 최적화
- [ ] 크로스 브라우저 테스트

### Day 3-5: 성능 최적화
- [ ] 이미지 최적화 (WebP)
- [ ] 코드 스플리팅
- [ ] 캐싱 전략 적용

**완료 기준**:
- [ ] Lighthouse 점수 > 90
- [ ] Core Web Vitals 통과

---

## Week 5: 테스트 및 배포

### Day 1-2: 통합 테스트
- [ ] E2E 테스트 (Playwright)
- [ ] Load 테스트 (k6)
- [ ] 보안 스캔 (OWASP ZAP)

### Day 3-4: 버그 수정
- [ ] 발견된 버그 수정
- [ ] 성능 병목 해결
- [ ] 문서 최종 업데이트

### Day 5: 배포
- [ ] Vercel 배포
- [ ] 환경 변수 설정
- [ ] 모니터링 대시보드 구성
- [ ] 알림 규칙 설정

**완료 기준**:
- [ ] 프로덕션 URL 작동
- [ ] 모든 테스트 통과
- [ ] 모니터링 활성화

---

## 기술 부채

| 항목 | 우선순위 | 예상 공수 | 담당자 | 기한 |
|------|----------|-----------|--------|------|
| Redis Cluster 전환 | 중 | 3일 | DevOps | Week 6 |
| TypeScript Strict | 낮 | 2일 | Dev | Week 7 |

---

**마지막 업데이트**: {자동}  
**다음 리뷰**: 매주 금요일
```

---

## 🏗️ 코드 작성 규칙

### Entity 템플릿

```typescript
// src/domain/{feature}/entities/{Entity}.ts
import { Entity } from '@/domain/shared/Entity';
import { Result } from '@/shared/types/Result';

interface {Entity}Props {
  // 속성 정의
}

export class {Entity} extends Entity<{Entity}Props> {
  private constructor(props: {Entity}Props, id?: string) {
    super(props, id);
  }

  // Factory Method
  public static create(
    props: {Entity}Props,
    id?: string
  ): Result<{Entity}> {
    // 비즈니스 규칙 검증
    if (/* 조건 */) {
      return Result.fail('에러 메시지');
    }

    const entity = new {Entity}(props, id);
    
    if (!id) {
      entity.addDomainEvent(new {Entity}Created(entity.id));
    }
    
    return Result.ok(entity);
  }

  // Getters
  get property(): Type {
    return this.props.property;
  }

  // 비즈니스 메서드
  public doSomething(): Result<void> {
    // 로직
    this.addDomainEvent(new SomethingHappened(this.id));
    return Result.ok();
  }
}
```

### UseCase 템플릿

```typescript
// src/application/use-cases/{feature}/{Action}{Entity}UseCase.ts
import { Result } from '@/shared/types/Result';

export class {Action}{Entity}UseCase {
  constructor(
    private {entity}Repository: I{Entity}Repository,
    private logger: ILogger
  ) {}

  async execute(request: {Action}Request): Promise<Result<{Action}Response>> {
    try {
      // 1. 입력 검증
      const valueOrError = ValueObject.create(request.value);
      if (valueOrError.isFailure) {
        return Result.fail(valueOrError.error);
      }

      // 2. 비즈니스 로직
      const entityOrError = {Entity}.create(props);
      if (entityOrError.isFailure) {
        return Result.fail(entityOrError.error);
      }

      // 3. 영속화
      const entity = entityOrError.getValue();
      await this.{entity}Repository.save(entity);

      // 4. 응답
      return Result.ok({ id: entity.id });

    } catch (error) {
      this.logger.error('{Action}{Entity} failed', error);
      return Result.fail('Internal error');
    }
  }
}
```

### Repository 템플릿

```typescript
// src/infrastructure/database/repositories/{Database}{Entity}Repository.ts
export class {Database}{Entity}Repository implements I{Entity}Repository {
  constructor(
    private db: DrizzleClient,
    private cache: Redis
  ) {}

  async save(entity: {Entity}): Promise<void> {
    const data = this.toPersistence(entity);
    
    await this.db.insert(schema.{table})
      .values(data)
      .onConflictDoUpdate({
        target: schema.{table}.id,
        set: data,
      });

    await this.cache.del(`{entity}:${entity.id}`);
  }

  async findById(id: string): Promise<{Entity} | null> {
    // L1: 캐시
    const cached = await this.cache.get(`{entity}:${id}`);
    if (cached) return this.toDomain(JSON.parse(cached));

    // L2: DB
    const data = await this.db.query.{table}.findFirst({
      where: eq(schema.{table}.id, id),
    });
    
    if (!data) return null;

    // 캐시 저장
    const entity = this.toDomain(data);
    await this.cache.set(
      `{entity}:${id}`,
      JSON.stringify(data),
      'EX',
      3600
    );

    return entity;
  }

  private toDomain(data: any): {Entity} {
    const entityOrError = {Entity}.create(props, data.id);
    return entityOrError.getValue();
  }

  private toPersistence(entity: {Entity}): any {
    return {
      id: entity.id,
      // 매핑
    };
  }
}
```

---

## ⚡ 성능 최적화 규칙

### 1. 데이터베이스

```sql
-- 복합 인덱스
CREATE INDEX idx_{table}_compound 
ON {table}(filter_col, sort_col DESC);

-- 부분 인덱스
CREATE INDEX idx_{table}_active 
ON {table}(column) 
WHERE status = 'active';

-- 커버링 인덱스
CREATE INDEX idx_{table}_covering 
ON {table}(filter_col) 
INCLUDE (select_col1, select_col2);

-- N+1 해결
SELECT p.*, u.name 
FROM posts p 
JOIN users u ON p.user_id = u.id;
```

### 2. 캐싱 (3-Tier)

```typescript
async getData(id: string) {
  // L1: Memory (60초)
  let data = memCache.get(id);
  if (data) return data;

  // L2: Redis (1시간)
  data = await redis.get(id);
  if (data) {
    memCache.set(id, data, 60);
    return data;
  }

  // L3: DB
  data = await db.find(id);
  await redis.set(id, data, 'EX', 3600);
  memCache.set(id, data, 60);
  
  return data;
}
```

### 3. React 최적화

```typescript
// 메모이제이션
const Component = memo(({data}) => {
  const processed = useMemo(() => expensive(data), [data]);
  const handler = useCallback(() => {}, []);
  return <div>{processed}</div>;
});

// 코드 스플리팅
const Heavy = lazy(() => import('./Heavy'));

// Virtual Scrolling
import { FixedSizeList } from 'react-window';
```

---

## 🔐 보안 체크리스트

```typescript
// 1. JWT 미들웨어
export const authMiddleware = async (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  const payload = jwt.verify(token, SECRET);
  req.user = payload;
  next();
};

// 2. RBAC
export const authorize = (...roles: string[]) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Forbidden' });
    }
    next();
  };
};

// 3. Zod 검증
const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8).regex(/[A-Z]/).regex(/[0-9]/),
});

// 4. Rate Limiting
app.use(rateLimit({
  windowMs: 60 * 1000,
  max: 100,
}));

// 5. RLS (Supabase)
CREATE POLICY "Users view own data"
ON {table} FOR SELECT
USING (auth.uid() = user_id);
```

---

## 🤖 Git 자동화 규칙

### 새 프로젝트 시작 시

```bash
# AI가 자동 실행
gh repo create {프로젝트명} \
  --private \
  --description "프로젝트 설명"

git init
git remote add origin https://YOUR_TOKEN_HERE@github.com/junginsu-make/{프로젝트명}.git

# 초기 문서 생성
touch PRD.md LLD.md PLAN.md README.md

# 첫 커밋
git add .
git commit -m "chore: 프로젝트 초기 설정

- PRD, LLD, PLAN 문서 생성
- Next.js + TypeScript 프로젝트 설정
- Drizzle ORM 설정"

git push -u origin main
```

### Day별 자동 커밋

```bash
# 각 Day 작업 완료 시 AI가 자동 실행

# HTTP 버퍼 크기 증가
git config http.postBuffer 524288000

# 변경사항 스테이징
git add .

# 의미 있는 커밋 메시지
git commit -m "feat: Week {X} Day {Y} - {작업 내용}

- {세부 사항 1}
- {세부 사항 2}
- PLAN.md 진행 상황 업데이트"

# 푸시 (작은 단위로)
git push origin main

# 에러 시 작은 커밋으로 분할하여 재시도
```

### 커밋 메시지 규칙

```bash
# Conventional Commits 형식
<type>(<scope>): <subject>

<body>

<footer>

# Type
feat:     새 기능
fix:      버그 수정
docs:     문서 수정
style:    UI 변경
refactor: 리팩토링
perf:     성능 개선
test:     테스트 추가
chore:    빌드/설정

# 예시
feat(auth): implement JWT authentication

- Add JWT middleware
- Add refresh token logic
- Add RBAC authorization
- Update LLD.md

Closes #123
```

### PLAN.md 자동 업데이트

```bash
# 각 작업 완료 시 AI가 자동으로 체크박스 업데이트
- [x] 완료된 작업
- [ ] 진행 중인 작업

# 진행률 자동 계산 및 업데이트
전체: ████████░░ 80% (40/50)
```

---

## 🚀 AI 작업 요청 템플릿

### 프로젝트 시작 시

```markdown
다음 프로젝트를 시작합니다:

프로젝트명: {이름}
설명: {한 줄 설명}
핵심 기능: {1, 2, 3}

GitHub Personal Access Token: YOUR_TOKEN_HERE

다음 순서로 진행해주세요:

1. PRD.md 작성 (제공된 템플릿 사용)
   - Executive Summary
   - MoSCoW 기능 분류
   - 비기능 요구사항
   - 성공 지표

2. LLD.md 작성 (헥사고날 아키텍처 기반)
   - C4 다이어그램
   - ERD (3NF 정규화)
   - API 설계
   - 인덱싱 전략
   - 보안 설계

3. PLAN.md 작성 (Week/Day 체크리스트)
   - Week 1-5까지 계획
   - 완료 기준 명시
   - 기술 부채 추적

4. GitHub 저장소 생성
   - gh CLI 사용
   - private 저장소
   - 초기 문서 커밋

5. 프로젝트 초기화
   - Next.js 14 + TypeScript
   - Drizzle ORM 설정
   - Supabase 연결
   - 환경 변수 설정

모든 작업은 RULES.md의 아키텍처 원칙을 준수해주세요:
- 헥사고날 아키텍처
- SOLID 원칙
- DDD 패턴
```

### 기능 개발 요청 시

```markdown
PLAN.md의 "Week {X} Day {Y}: {기능명}"을 구현해주세요.

## 컨텍스트
- 참고: PRD.md 섹션 {X}, LLD.md 섹션 {Y}
- 아키텍처: {Domain/Application/Infrastructure/Presentation} 레이어

## 아키텍처 준수 사항
- 헥사고날 아키텍처: {레이어} 레이어 구현
- SOLID 원칙: {특히 지킬 원칙}
- DDD 패턴: {Entity/ValueObject/Aggregate}

## 성능 요구사항
- 응답 시간: p95 < {X}ms
- 처리량: {Y} TPS
- 캐싱: {전략}

## 구현 요구사항
1. Domain Layer
   - Entity: {Entity명}
   - Value Objects: {ValueObject들}
   - Repository Interface: I{Entity}Repository

2. Application Layer
   - UseCase: {Action}{Entity}UseCase
   - DTO: {Action}Request, {Action}Response

3. Infrastructure Layer
   - Repository: Drizzle{Entity}Repository
   - 캐싱: Redis (TTL: {시간})

4. Presentation Layer
   - Controller: {Entity}Controller
   - Validator: Zod 스키마

## 보안 체크리스트
- [ ] JWT 검증
- [ ] RBAC {역할}
- [ ] RLS 정책
- [ ] Rate Limiting: {제한}
- [ ] 입력 검증: Zod

## 테스트 요구사항
- [ ] 단위 테스트 > 90%
- [ ] 통합 테스트 (주요 시나리오)
- [ ] E2E 테스트

## 파일 생성 위치
```
src/
├── domain/{feature}/
│   ├── entities/{Entity}.ts
│   ├── value-objects/{ValueObject}.ts
│   └── repositories/I{Entity}Repository.ts
├── application/use-cases/{feature}/
│   └── {Action}{Entity}UseCase.ts
├── infrastructure/database/repositories/
│   └── Drizzle{Entity}Repository.ts
└── presentation/api/controllers/
    └── {Entity}Controller.ts
```

## 완료 조건
- [ ] 모든 테스트 통과
- [ ] TypeScript 에러 0
- [ ] ESLint 경고 0
- [ ] 성능 벤치마크 통과
- [ ] PLAN.md 체크박스 업데이트
- [ ] Git 자동 커밋 및 푸시

## Supabase 연결 정보
URL: https://wlgjnlrufrdgxorkicxy.supabase.co
Anon Key: eyJhbGci...
DB Password: a20616050!

구현 후 다음을 자동으로 실행:
1. git add .
2. git commit -m "feat: Week {X} Day {Y} - {기능명}"
3. git push origin main
4. PLAN.md 업데이트
```

---

## 📊 품질 게이트

### 코드 머지 전 필수 체크

```markdown
## 아키텍처
- [ ] 헥사고날 아키텍처 준수
- [ ] Domain은 외부 의존성 없음
- [ ] 의존성 방향 올바름 (외부→내부)

## SOLID 원칙
- [ ] 단일 책임 원칙
- [ ] 인터페이스 분리
- [ ] 의존성 역전

## 코드 품질
- [ ] TypeScript strict mode 통과
- [ ] ESLint 0 경고
- [ ] Prettier 포맷팅 완료

## 테스트
- [ ] 단위 테스트 커버리지 > 90%
- [ ] 통합 테스트 통과
- [ ] E2E 테스트 (주요 흐름)

## 성능
- [ ] API 응답 p95 < 200ms
- [ ] DB 쿼리 < 50ms
- [ ] 캐시 히트율 > 80%
- [ ] 번들 크기 < 200KB (gzipped)

## 보안
- [ ] OWASP Top 10 체크
- [ ] JWT 검증 구현
- [ ] RLS 정책 설정
- [ ] Rate Limiting 적용
- [ ] 입력 검증 (Zod)

## 문서
- [ ] PRD/LLD 동기화
- [ ] PLAN.md 체크박스 업데이트
- [ ] 코드 주석 (복잡한 로직만)
- [ ] README 업데이트 (필요시)
```

---

## 🔍 모니터링 & 로깅

### Structured Logging

```typescript
// src/shared/logging/logger.ts
import winston from 'winston';

export const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: 'api' },
  transports: [
    new winston.transports.File({ 
      filename: 'error.log', 
      level: 'error' 
    }),
    new winston.transports.File({ 
      filename: 'combined.log' 
    }),
  ],
});

// 사용
logger.info('User created', {
  user_id: user.id,
  email: user.email,
  ip: req.ip,
  trace_id: req.headers['x-trace-id'],
});
```

### Prometheus 메트릭

```typescript
// src/shared/monitoring/metrics.ts
import { Counter, Histogram, register } from 'prom-client';

export const httpRequestTotal = new Counter({
  name: 'http_requests_total',
  help: 'Total HTTP requests',
  labelNames: ['method', 'route', 'status'],
});

export const httpRequestDuration = new Histogram({
  name: 'http_request_duration_seconds',
  help: 'HTTP request duration',
  labelNames: ['method', 'route'],
  buckets: [0.1, 0.3, 0.5, 1, 3, 5],
});

// 미들웨어
app.use((req, res, next) => {
  const start = Date.now();
  
  res.on('finish', () => {
    const duration = (Date.now() - start) / 1000;
    
    httpRequestTotal.inc({
      method: req.method,
      route: req.route?.path || 'unknown',
      status: res.statusCode,
    });
    
    httpRequestDuration.observe(
      { method: req.method, route: req.route?.path },
      duration
    );
  });
  
  next();
});

// 메트릭 엔드포인트
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});
```

### Sentry 에러 추적

```typescript
// src/shared/monitoring/sentry.ts
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 0.1,
  beforeSend(event, hint) {
    // PII 제거
    if (event.user) {
      delete event.user.email;
      delete event.user.ip_address;
    }
    return event;
  },
});

// 사용
try {
  await riskyOperation();
} catch (error) {
  Sentry.captureException(error, {
    tags: {
      feature: 'payment',
      severity: 'high',
    },
    extra: {
      userId: user.id,
      orderId: order.id,
    },
  });
  throw error;
}
```

---

## 🧪 테스트 전략

### 단위 테스트 (Vitest)

```typescript
// src/domain/user/entities/User.spec.ts
import { describe, it, expect } from 'vitest';
import { User } from './User';
import { Email } from '../value-objects/Email';

describe('User Entity', () => {
  describe('create', () => {
    it('should create user with valid data', () => {
      const email = Email.create('test@example.com').getValue();
      
      const result = User.create({
        email,
        name: 'John Doe',
        age: 25,
      });

      expect(result.isSuccess).toBe(true);
      expect(result.getValue().name).toBe('John Doe');
    });

    it('should fail when age < 18', () => {
      const email = Email.create('test@example.com').getValue();
      
      const result = User.create({
        email,
        name: 'John Doe',
        age: 17,
      });

      expect(result.isFailure).toBe(true);
      expect(result.error).toContain('at least 18');
    });
  });

  describe('changeEmail', () => {
    it('should emit EmailChangeRequested event', () => {
      const user = createTestUser();
      const newEmail = Email.create('new@example.com').getValue();

      user.changeEmail(newEmail);

      const events = user.getDomainEvents();
      expect(events).toHaveLength(1);
      expect(events[0]).toBeInstanceOf(EmailChangeRequested);
    });
  });
});
```

### 통합 테스트

```typescript
// tests/integration/user/CreateUser.test.ts
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { testDb } from '@/tests/utils/testDb';
import { CreateUserUseCase } from '@/application/use-cases/user/CreateUser';

describe('CreateUser Integration', () => {
  beforeEach(async () => {
    await testDb.migrate();
  });

  afterEach(async () => {
    await testDb.rollback();
  });

  it('should create user and save to database', async () => {
    const useCase = new CreateUserUseCase(
      userRepository,
      emailService,
      logger
    );

    const result = await useCase.execute({
      email: 'test@example.com',
      name: 'John Doe',
      age: 25,
    });

    expect(result.isSuccess).toBe(true);

    // DB에서 확인
    const saved = await userRepository.findByEmail(
      Email.create('test@example.com').getValue()
    );
    expect(saved).toBeDefined();
    expect(saved?.name).toBe('John Doe');
  });
});
```

### E2E 테스트 (Playwright)

```typescript
// tests/e2e/auth/signup.spec.ts
import { test, expect } from '@playwright/test';

test.describe('User Signup', () => {
  test('should complete signup flow', async ({ page }) => {
    // 회원가입 페이지 접속
    await page.goto('/signup');

    // 폼 작성
    await page.fill('[name=email]', 'test@example.com');
    await page.fill('[name=password]', 'Password123!');
    await page.fill('[name=name]', 'John Doe');

    // 제출
    await page.click('button[type=submit]');

    // 대시보드로 이동 확인
    await expect(page).toHaveURL('/dashboard');
    await expect(page.locator('h1')).toContainText('Welcome');
  });

  test('should show error for invalid email', async ({ page }) => {
    await page.goto('/signup');
    
    await page.fill('[name=email]', 'invalid-email');
    await page.fill('[name=password]', 'Password123!');
    await page.click('button[type=submit]');

    await expect(page.locator('.error')).toContainText('Invalid email');
  });
});
```

---

## 🚢 배포 프로세스

### Vercel 배포

```yaml
# vercel.json
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

### GitHub Actions CI/CD

```yaml
# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          
      - name: Install pnpm
        run: npm install -g pnpm
        
      - name: Install dependencies
        run: pnpm install
        
      - name: Type check
        run: pnpm type-check
        
      - name: Lint
        run: pnpm lint
        
      - name: Unit tests
        run: pnpm test:unit
        
      - name: Integration tests
        run: pnpm test:integration
        
      - name: Build
        run: pnpm build
        
      - name: E2E tests
        run: pnpm test:e2e

  deploy:
    needs: test
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
```

---

## 📌 AI에게 매번 강조할 사항

```markdown
작업 시작 전 필수 확인:

1. 📐 아키텍처
   - [ ] 헥사고날 아키텍처 준수?
   - [ ] Domain은 독립적인가?
   - [ ] 의존성 방향 올바른가? (외부→내부)

2. 🏗️ SOLID 원칙
   - [ ] 단일 책임 원칙?
   - [ ] 인터페이스 분리?
   - [ ] 의존성 역전?

3. ⚡ 성능
   - [ ] DB 인덱스 추가?
   - [ ] 캐싱 전략 적용?
   - [ ] N+1 문제 해결?

4. 🔐 보안
   - [ ] JWT 검증?
   - [ ] RBAC 구현?
   - [ ] RLS 정책?
   - [ ] 입력 검증 (Zod)?

5. 🧪 테스트
   - [ ] 단위 테스트 > 90%?
   - [ ] 통합 테스트?
   - [ ] E2E 테스트?

6. 📝 문서
   - [ ] PLAN.md 체크박스 업데이트?
   - [ ] PRD/LLD 동기화?

7. 🚀 Git
   - [ ] 의미 있는 커밋 메시지?
   - [ ] 자동 푸시 실행?

위 7가지를 모두 확인한 후 작업을 시작하세요.
```

---

## 🎯 빠른 시작 가이드

### 1. 새 프로젝트 시작

```markdown
AI에게 복사-붙여넣기:

"다음 프로젝트를 시작합니다:

프로젝트명: {이름}
설명: {한 줄 설명}
핵심 기능: {1, 2, 3}

RULES.md에 따라 다음 순서로 진행해주세요:
1. PRD.md 작성
2. LLD.md 작성
3. PLAN.md 작성
4. GitHub 저장소 생성 (Token: YOUR_TOKEN_HERE)
5. 프로젝트 초기화 (Next.js + Drizzle + Supabase)

Supabase 정보:
- URL: https://wlgjnlrufrdgxorkicxy.supabase.co
- Anon Key: eyJhbGci...
- DB Password: a20616050!"
```

### 2. 기능 개발

```markdown
AI에게 복사-붙여넣기:

"PLAN.md의 Week {X} Day {Y} 작업을 구현해주세요.

헥사고날 아키텍처와 SOLID 원칙을 준수하고,
완료 후 자동으로 커밋 및 푸시해주세요."
```

### 3. 배포

```markdown
AI에게 복사-붙여넣기:

"배포 준비를 해주세요:
1. 모든 테스트 실행
2. 성능 벤치마크
3. 보안 체크리스트 확인
4. Vercel 배포 설정
5. 환경 변수 확인"
```

---

## 🔄 문서 버전 관리

```markdown
이 규칙 문서는 프로젝트와 함께 진화합니다.

버전: 5.0 (완결판)
최종 수정: 2025-10-03
다음 검토: 프로젝트 완료 시

변경 이력:
- v5.0: 첨부 문서와 통합 (환경 설정 + 아키텍처)
- v4.0: 시니어급 패턴 추가
- v3.0: 성능 최적화 강화
```

---

**이 규칙의 핵심 가치**:

✅ **빠른 시작**: Replit처럼 즉시 개발 시작  
✅ **전문가급 품질**: 10년차 개발자의 설계 패턴 자동 적용  
✅ **완벽한 문서화**: PRD, LLD, PLAN 체계적 관리  
✅ **자동화**: Git 커밋, 배포, 모니터링 자동 설정  
✅ **유지보수성**: 다른 개발자가 즉시 이해 가능한 구조

**초보자가 이 규칙만 따르면 → 시니어가 만든 시스템 완성** 