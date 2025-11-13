# Low Level Design Document - Next.js SysArch Template

## 1. System Architecture Overview

### 1.1 Architectural Philosophy
The Next.js SysArch Template follows a **modular, scalable architecture** optimized for:
- AI-assisted development workflow
- Progressive enhancement
- Type-safe implementation
- Horizontal scalability
- Maintainable codebase

### 1.2 High-Level Architecture Diagram
```
┌─────────────────────────────────────────────────────────────┐
│                  Frontend (Next.js 14)                       │
│  ┌──────────────┬──────────────┬──────────────────────┐    │
│  │   Pages/     │   Components │   State Management   │    │
│  │   App Router │   (Shadcn)   │   (Zustand + React   │    │
│  │              │              │    Query)            │    │
│  └──────────────┴──────────────┴──────────────────────┘    │
├─────────────────────────────────────────────────────────────┤
│                    API Layer (Next.js API Routes)            │
│  ┌──────────────┬──────────────┬──────────────────────┐    │
│  │   REST       │   Server     │   Middleware         │    │
│  │   Endpoints  │   Actions    │   (Auth, CORS)       │    │
│  └──────────────┴──────────────┴──────────────────────┘    │
├─────────────────────────────────────────────────────────────┤
│                    Business Logic Layer                      │
│  ┌──────────────┬──────────────┬──────────────────────┐    │
│  │   Services   │   Validators │   Utils              │    │
│  │   (Zod)      │              │                      │    │
│  └──────────────┴──────────────┴──────────────────────┘    │
├─────────────────────────────────────────────────────────────┤
│                    Data Access Layer                         │
│  ┌──────────────┬──────────────┬──────────────────────┐    │
│  │   Drizzle    │   Repository │   Cache Layer        │    │
│  │   ORM        │   Pattern    │   (Optional)         │    │
│  └──────────────┴──────────────┴──────────────────────┘    │
├─────────────────────────────────────────────────────────────┤
│                    Database (PostgreSQL + Supabase)          │
└─────────────────────────────────────────────────────────────┘
```

## 2. Technology Stack Deep Dive

### 2.1 Frontend Technologies
```yaml
Framework: Next.js 14
  - App Router for better performance
  - Server Components by default
  - Streaming and Suspense
  - Built-in optimization

UI Library: React 18
  - Concurrent features
  - Automatic batching
  - Transitions API

Language: TypeScript 5.x
  - Strict mode enabled
  - Path aliases configured
  - Decorators support

Styling: Tailwind CSS 3.4
  - JIT compilation
  - Custom design tokens
  - Responsive utilities
  - Dark mode support

Components: Shadcn/ui + Lucide Icons
  - Customizable components
  - Accessible by default
  - Copy-paste approach
```

### 2.2 Backend Technologies
```yaml
Database ORM: Drizzle ORM
  - Type-safe queries
  - SQL-like syntax
  - Zero runtime overhead
  - Migration management

Database: PostgreSQL 15 + Supabase
  - ACID compliance
  - JSON support
  - Full-text search
  - Row-level security (Supabase)
  - Real-time subscriptions (Supabase)

Validation: Zod
  - Schema validation
  - Type inference
  - Error handling
  - Transform utilities
```

### 2.3 State Management
```yaml
Global State: Zustand
  - Minimal boilerplate
  - No context providers needed
  - DevTools support
  - Middleware support (persist, immer)

Server State: React Query (@tanstack/react-query)
  - Caching strategy
  - Background refetching
  - Optimistic updates
  - Pagination/Infinite scroll

Form State: React Hook Form
  - Uncontrolled components
  - Validation integration (Zod)
  - Performance optimized
```

### 2.4 Testing Stack
```yaml
Unit Testing: Vitest
  - Fast execution
  - Jest-compatible API
  - UI for test results
  - Coverage reporting

E2E Testing: Playwright
  - Cross-browser support
  - Auto-wait mechanisms
  - Parallel execution
  - Video/screenshot capture
```

## 3. Project Structure

### 3.1 Recommended Directory Structure
```
project-root/
├── src/
│   ├── app/                      # Next.js 14 App Router
│   │   ├── (auth)/              # Route groups
│   │   │   ├── login/
│   │   │   └── register/
│   │   ├── (dashboard)/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── api/                 # API routes
│   │   │   ├── auth/
│   │   │   └── users/
│   │   ├── layout.tsx           # Root layout
│   │   └── page.tsx             # Home page
│   ├── components/              # React components
│   │   ├── ui/                  # Shadcn components
│   │   ├── features/            # Feature-specific
│   │   └── layouts/             # Layout components
│   ├── lib/                     # Core libraries
│   │   ├── db/                  # Database setup
│   │   │   ├── schema.ts
│   │   │   ├── migrations/
│   │   │   └── client.ts
│   │   ├── validations/         # Zod schemas
│   │   ├── utils/               # Helper functions
│   │   └── constants/           # Constants
│   ├── stores/                  # Zustand stores
│   │   ├── authStore.ts
│   │   └── uiStore.ts
│   ├── hooks/                   # Custom React hooks
│   │   ├── useAuth.ts
│   │   └── useUser.ts
│   ├── services/                # Business logic
│   │   ├── authService.ts
│   │   └── userService.ts
│   └── types/                   # TypeScript types
│       ├── models.ts
│       └── api.ts
├── public/                      # Static assets
├── tests/                       # Test files
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── docs/                        # Documentation
│   ├── PRD.md
│   ├── LLD.md
│   └── PLAN.md
├── .cursorrules                 # AI coding rules
├── drizzle.config.ts           # Drizzle configuration
├── next.config.js              # Next.js configuration
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── package.json
```

## 4. Database Design Patterns

### 4.1 Drizzle ORM Setup
```typescript
// lib/db/client.ts
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const connectionString = process.env.DATABASE_URL!;
const client = postgres(connectionString);

export const db = drizzle(client);
```

### 4.2 Schema Definition Example
```typescript
// lib/db/schema.ts
import { pgTable, uuid, varchar, timestamp, text } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  name: varchar('name', { length: 255 }),
  passwordHash: text('password_hash').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const posts = pgTable('posts', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').references(() => users.id).notNull(),
  title: varchar('title', { length: 500 }).notNull(),
  content: text('content'),
  published: boolean('published').default(false),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
```

### 4.3 Migration Strategy
```bash
# Generate migration
npm run db:generate

# Apply migration
npm run db:migrate

# Seed database (optional)
npm run db:seed
```

## 5. API Design Patterns

### 5.1 REST API Conventions
```typescript
// app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db/client';
import { users } from '@/lib/db/schema';
import { createUserSchema } from '@/lib/validations/user';

// GET /api/users
export async function GET(request: NextRequest) {
  try {
    const allUsers = await db.select().from(users);
    return NextResponse.json(allUsers);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch users' },
      { status: 500 }
    );
  }
}

// POST /api/users
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = createUserSchema.parse(body);

    const newUser = await db.insert(users).values(validated).returning();
    return NextResponse.json(newUser[0], { status: 201 });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: error.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: 'Failed to create user' },
      { status: 500 }
    );
  }
}
```

### 5.2 Server Actions Pattern
```typescript
// app/actions/user.ts
'use server';

import { db } from '@/lib/db/client';
import { users } from '@/lib/db/schema';
import { revalidatePath } from 'next/cache';

export async function createUser(formData: FormData) {
  const email = formData.get('email') as string;
  const name = formData.get('name') as string;

  try {
    await db.insert(users).values({ email, name });
    revalidatePath('/users');
    return { success: true };
  } catch (error) {
    return { success: false, error: 'Failed to create user' };
  }
}
```

## 6. State Management Patterns

### 6.1 Zustand Store Example
```typescript
// stores/authStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: (user) => set({ user, isAuthenticated: true }),
      logout: () => set({ user: null, isAuthenticated: false }),
    }),
    {
      name: 'auth-storage',
    }
  )
);
```

### 6.2 React Query Setup
```typescript
// app/providers.tsx
'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000, // 1 minute
            cacheTime: 5 * 60 * 1000, // 5 minutes
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
```

### 6.3 Custom Hook Example
```typescript
// hooks/useUsers.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export function useUsers() {
  return useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetch('/api/users');
      if (!res.ok) throw new Error('Failed to fetch users');
      return res.json();
    },
  });
}

export function useCreateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (userData: CreateUserInput) => {
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });
      if (!res.ok) throw new Error('Failed to create user');
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
}
```

## 7. Validation Patterns

### 7.1 Zod Schema Definition
```typescript
// lib/validations/user.ts
import { z } from 'zod';

export const createUserSchema = z.object({
  email: z.string().email('Invalid email address'),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export const updateUserSchema = createUserSchema.partial();

export type CreateUserInput = z.infer<typeof createUserSchema>;
export type UpdateUserInput = z.infer<typeof updateUserSchema>;
```

### 7.2 Form Validation with React Hook Form
```typescript
// components/forms/CreateUserForm.tsx
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createUserSchema, CreateUserInput } from '@/lib/validations/user';

export function CreateUserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateUserInput>({
    resolver: zodResolver(createUserSchema),
  });

  const onSubmit = async (data: CreateUserInput) => {
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email')} />
      {errors.email && <span>{errors.email.message}</span>}

      <input {...register('name')} />
      {errors.name && <span>{errors.name.message}</span>}

      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </form>
  );
}
```

## 8. Error Handling Strategy

### 8.1 Error Types
```typescript
// lib/errors.ts
export class AppError extends Error {
  constructor(
    public message: string,
    public statusCode: number = 500,
    public code?: string
  ) {
    super(message);
    this.name = 'AppError';
  }
}

export class ValidationError extends AppError {
  constructor(message: string) {
    super(message, 400, 'VALIDATION_ERROR');
  }
}

export class NotFoundError extends AppError {
  constructor(resource: string) {
    super(`${resource} not found`, 404, 'NOT_FOUND');
  }
}

export class UnauthorizedError extends AppError {
  constructor(message: string = 'Unauthorized') {
    super(message, 401, 'UNAUTHORIZED');
  }
}
```

### 8.2 Global Error Handler
```typescript
// lib/errorHandler.ts
import { NextResponse } from 'next/server';
import { ZodError } from 'zod';
import { AppError } from './errors';

export function handleError(error: unknown) {
  console.error('Error:', error);

  if (error instanceof AppError) {
    return NextResponse.json(
      { error: error.message, code: error.code },
      { status: error.statusCode }
    );
  }

  if (error instanceof ZodError) {
    return NextResponse.json(
      { error: 'Validation failed', details: error.errors },
      { status: 400 }
    );
  }

  return NextResponse.json(
    { error: 'Internal server error' },
    { status: 500 }
  );
}
```

## 9. Testing Strategy

### 9.1 Unit Test Example (Vitest)
```typescript
// tests/unit/utils/formatDate.test.ts
import { describe, it, expect } from 'vitest';
import { formatDate } from '@/lib/utils/formatDate';

describe('formatDate', () => {
  it('should format date correctly', () => {
    const date = new Date('2024-01-15');
    expect(formatDate(date)).toBe('2024-01-15');
  });

  it('should handle invalid dates', () => {
    expect(formatDate(null)).toBe('Invalid date');
  });
});
```

### 9.2 E2E Test Example (Playwright)
```typescript
// tests/e2e/auth.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Authentication', () => {
  test('should login successfully', async ({ page }) => {
    await page.goto('/login');

    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill('input[name="password"]', 'password123');
    await page.click('button[type="submit"]');

    await expect(page).toHaveURL('/dashboard');
    await expect(page.locator('h1')).toContainText('Dashboard');
  });
});
```

## 10. Performance Optimization

### 10.1 Image Optimization
```typescript
import Image from 'next/image';

<Image
  src="/hero.jpg"
  alt="Hero"
  width={1200}
  height={600}
  priority
  placeholder="blur"
/>
```

### 10.2 Code Splitting
```typescript
// Dynamic imports for heavy components
import dynamic from 'next/dynamic';

const HeavyChart = dynamic(() => import('@/components/HeavyChart'), {
  loading: () => <div>Loading chart...</div>,
  ssr: false,
});
```

### 10.3 Caching Strategy
```typescript
// Route segment config
export const revalidate = 3600; // Revalidate every hour
export const dynamic = 'force-static'; // Force static generation
```

## 11. Security Best Practices

### 11.1 Environment Variables
```typescript
// lib/env.ts
import { z } from 'zod';

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  NEXTAUTH_SECRET: z.string().min(32),
  NEXTAUTH_URL: z.string().url(),
});

export const env = envSchema.parse(process.env);
```

### 11.2 Input Sanitization
```typescript
// Always validate and sanitize user input
import { createUserSchema } from '@/lib/validations/user';

const safeData = createUserSchema.parse(untrustedInput);
```

### 11.3 API Route Protection
```typescript
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth-token');

  if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/api/protected/:path*'],
};
```

## 12. Deployment Architecture

### 12.1 Docker Configuration
```dockerfile
# Dockerfile
FROM node:20-alpine AS base

FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

### 12.2 Environment Setup
```env
# .env.example
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/dbname

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# Authentication
NEXTAUTH_SECRET=your-secret-key-min-32-chars
NEXTAUTH_URL=http://localhost:3000
```

## Appendix A: TypeScript Configuration

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

## Appendix B: Key Design Decisions

| Decision | Rationale | Trade-offs |
|----------|-----------|------------|
| Drizzle ORM over Prisma | Type-safety, performance, SQL-like | Smaller ecosystem |
| Zustand over Redux | Simplicity, less boilerplate | Less middleware options |
| Vitest over Jest | Faster, modern, ESM support | Smaller community |
| Tailwind CSS | Utility-first, fast development | Learning curve |
| Server Components | Better performance, SEO | More complex patterns |
