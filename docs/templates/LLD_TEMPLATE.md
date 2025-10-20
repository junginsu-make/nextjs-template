# LLD: {프로젝트명}

## 1. 시스템 아키텍처

### C4 Model - Context Diagram

```
[사용자] 
   ↓
[{시스템명}]
   ↓ 
   ├→ [Supabase] (인증, DB, 저장소)
   ├→ [외부 API] (예: 결제, 이메일)
   └→ [Vercel] (호스팅)
```

### Hexagonal Architecture

```
┌─────────────────────────────────────┐
│       Presentation Layer            │
│  (API Routes, Next.js Pages)       │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│     Application Layer               │
│  (Use Cases, DTOs, Ports)          │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│       Domain Layer                  │
│  (Entities, Value Objects)         │
│  (Pure Business Logic)             │
└──────────────▲──────────────────────┘
               │
┌──────────────┴──────────────────────┐
│    Infrastructure Layer             │
│  (Database, Cache, External APIs)  │
└─────────────────────────────────────┘
```

### 의존성 규칙
- Domain ← Application ← Presentation
- Domain ← Infrastructure
- **역방향 의존 금지**

---

## 2. 데이터베이스 설계

### ERD (Entity Relationship Diagram)

```
users (Supabase Auth)
  ↓ 1:1
profiles
  ↓ 1:N
projects
  ↓ 1:N
tasks
```

### 테이블 스키마

```sql
-- profiles (사용자 프로필)
CREATE TABLE profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE,
  display_name TEXT NOT NULL,
  avatar_url TEXT,
  role VARCHAR(50) DEFAULT 'user', -- admin, user, viewer
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- projects
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(user_id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  status VARCHAR(50) DEFAULT 'active', -- active, archived
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- tasks
CREATE TABLE tasks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  status VARCHAR(50) DEFAULT 'todo', -- todo, in_progress, done
  priority INT DEFAULT 1,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

### 인덱스 전략

```sql
-- 조회 성능
CREATE INDEX idx_profiles_user_id ON profiles(user_id);
CREATE INDEX idx_projects_user_id ON projects(user_id);
CREATE INDEX idx_tasks_project_id ON tasks(project_id);

-- 복합 인덱스
CREATE INDEX idx_tasks_project_status 
ON tasks(project_id, status);

-- 부분 인덱스 (활성만)
CREATE INDEX idx_projects_active 
ON projects(user_id) 
WHERE status = 'active';
```

### RLS (Row Level Security) 정책

```sql
-- profiles 테이블
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users view own profile"
ON profiles FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users update own profile"
ON profiles FOR UPDATE
USING (auth.uid() = user_id);

-- projects 테이블
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users view own projects"
ON projects FOR SELECT
USING (user_id = auth.uid());

CREATE POLICY "Users create projects"
ON projects FOR INSERT
WITH CHECK (user_id = auth.uid());
```

---

## 3. API 설계

### RESTful 엔드포인트

```
# 인증
POST   /api/v1/auth/signup
POST   /api/v1/auth/login
POST   /api/v1/auth/logout
POST   /api/v1/auth/refresh

# 프로필
GET    /api/v1/profiles/me
PATCH  /api/v1/profiles/me

# 프로젝트
GET    /api/v1/projects              # 목록
POST   /api/v1/projects              # 생성
GET    /api/v1/projects/:id          # 조회
PATCH  /api/v1/projects/:id          # 수정
DELETE /api/v1/projects/:id          # 삭제

# 작업
GET    /api/v1/projects/:projectId/tasks
POST   /api/v1/projects/:projectId/tasks
PATCH  /api/v1/tasks/:taskId
DELETE /api/v1/tasks/:taskId
```

### 표준 응답 형식

**성공 응답 (200 OK)**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "title": "Project Name",
    "created_at": "2025-01-01T00:00:00Z"
  },
  "meta": {
    "page": 1,
    "per_page": 10,
    "total": 100
  }
}
```

**실패 응답 (400 Bad Request)**
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input",
    "details": [
      {
        "field": "email",
        "message": "Invalid email format"
      }
    ]
  }
}
```

### 요청/응답 형식

```typescript
// DTO 정의 (Zod)
const CreateProjectInput = z.object({
  title: z.string().min(1).max(255),
  description: z.string().max(1000).optional(),
});

type CreateProjectInput = z.infer<typeof CreateProjectInput>;

// API Route
export async function POST(req: Request) {
  const body = await req.json();
  const input = CreateProjectInput.parse(body);
  
  const result = await createProjectUseCase.execute(input);
  
  if (result.isFailure) {
    return Response.json(
      { success: false, error: result.error },
      { status: 400 }
    );
  }
  
  return Response.json(
    { success: true, data: result.getValue() },
    { status: 201 }
  );
}
```

---

## 4. 보안 설계

### 인증 흐름

```
1. 사용자 로그인
   ↓
2. Supabase Auth 검증
   ↓
3. JWT 발급 (Access + Refresh)
   ↓
4. httpOnly 쿠키 저장
   ↓
5. 미들웨어에서 JWT 검증
   ↓
6. RBAC 권한 체크
```

### 보안 체크리스트

- [ ] **인증**
  - [ ] JWT 검증 (만료, 서명)
  - [ ] Refresh token 로직
  - [ ] 로그아웃 구현

- [ ] **권한**
  - [ ] RBAC 구현 (admin, user, viewer)
  - [ ] 리소스별 권한 확인
  - [ ] RLS 정책

- [ ] **입력 검증**
  - [ ] Zod 스키마
  - [ ] 클라이언트/서버 검증
  - [ ] SQL Injection 방지

- [ ] **통신**
  - [ ] HTTPS (TLS 1.3+)
  - [ ] CORS 정책
  - [ ] Rate limiting

- [ ] **데이터**
  - [ ] 민감한 정보 암호화
  - [ ] 환경 변수 사용
  - [ ] API 키 노출 방지

---

## 5. 성능 최적화

### 캐싱 전략

```
L1: Memory Cache (빠름, 작음, 60초)
    ↓ Miss
L2: Redis (중간, 큼, 1시간)
    ↓ Miss
L3: Database (느림, 무제한)
```

### 인덱싱

- **쿼리 성능**: user_id, project_id, status
- **복합 인덱스**: (project_id, status)
- **부분 인덱스**: WHERE status = 'active'

### 쿼리 최적화

- **N+1 방지**: Drizzle `with()` 메서드
- **필요한 필드만**: SELECT 칼럼 제한
- **배치**: 관계 데이터 배치 로드

---

## 6. 기술 스택

| 계층 | 기술 |
|------|------|
| Frontend | Next.js 14+, React 18, TypeScript |
| Styling | Tailwind CSS, shadcn/ui |
| State | Zustand, TanStack Query |
| Backend | Next.js API Routes |
| Database | PostgreSQL 15+ via Supabase |
| ORM | Drizzle ORM |
| Auth | Supabase Auth (JWT) |
| Validation | Zod |
| Hosting | Vercel |
| Monitoring | Sentry |

---

## 7. 폴더 구조

```
src/
├── domain/
│   ├── project/
│   │   ├── entities/Project.ts
│   │   ├── value-objects/
│   │   └── repositories/ProjectRepository.ts
│   ├── task/
│   └── shared/
├── application/
│   ├── use-cases/
│   │   ├── CreateProject.ts
│   │   └── ListProjects.ts
│   ├── dto/
│   └── ports/
├── infrastructure/
│   ├── database/
│   │   ├── drizzle/schema.ts
│   │   └── repositories/
│   ├── supabase/
│   └── cache/
├── presentation/
│   ├── api/
│   │   ├── projects/route.ts
│   │   └── tasks/route.ts
│   └── web/
│       └── app/
└── shared/
    ├── types/
    ├── errors/
    └── decorators/
```

---

## 8. 배포 전략

- **환경**: Development, Staging, Production
- **CI/CD**: GitHub Actions
- **호스팅**: Vercel
- **데이터베이스**: Supabase
- **모니터링**: Sentry

---

**버전**: 1.0  
**작성일**: {날짜}  
**마지막 수정**: {날짜}
