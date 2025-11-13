# Low Level Design Document - Marketing AI Platform

## 1. System Architecture Overview

### 1.1 High-Level Architecture
```
┌─────────────────────────────────────────────────────────────┐
│                     Frontend (Next.js)                       │
├─────────────────────────────────────────────────────────────┤
│                    API Gateway (Express)                     │
├─────────────────────────────────────────────────────────────┤
│                  Supervisor Agent (GPT-4)                    │
├─────────────────────────────────────────────────────────────┤
│                      Sub-Agents Layer                        │
│  ┌─────────┬──────────┬───────────┬──────────┬─────────┐  │
│  │   Web   │  Market  │Competitor │Customer  │Strategy │  │
│  │Analyzer │ Research │ Analysis  │ Insight  │  Agent  │  │
│  └─────────┴──────────┴───────────┴──────────┴─────────┘  │
├─────────────────────────────────────────────────────────────┤
│                    Data Collection Layer                     │
│  ┌─────────┬──────────┬───────────┬──────────┬─────────┐  │
│  │  APIs   │ Crawlers │   News    │Community │ Official │  │
│  │         │          │   APIs    │ Scraping │   Data   │  │
│  └─────────┴──────────┴───────────┴──────────┴─────────┘  │
├─────────────────────────────────────────────────────────────┤
│            Storage (PostgreSQL + Redis + S3)                 │
└─────────────────────────────────────────────────────────────┘
```

## 2. Technology Stack

### 2.1 Frontend
```yaml
Framework: Next.js 14 (App Router)
Styling: 
  - Tailwind CSS 3.4
  - Shadcn/ui components
State Management: Zustand
Real-time: Socket.io-client
Charts: Recharts
PDF Generation: jsPDF
Type Safety: TypeScript 5.x
```

### 2.2 Backend
```yaml
Runtime: Node.js 20 LTS
Framework: Express.js
Language: TypeScript
AI/LLM:
  - LangChain.js
  - OpenAI SDK
  - Anthropic SDK
  - Google AI SDK
Queue: Bull + Redis
Database: 
  - PostgreSQL 15 (primary)
  - Redis (cache + queue)
  - MongoDB (documents)
Web Scraping:
  - Playwright
  - Puppeteer
  - Cheerio
```

## 3. Database Schema

### 3.1 PostgreSQL Tables
```sql
-- Users table
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255),
    company VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Reports table
CREATE TABLE reports (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    industry VARCHAR(100),
    keyword VARCHAR(255),
    status VARCHAR(50), -- pending, processing, completed, failed
    metadata JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    completed_at TIMESTAMP
);

-- Conversations table
CREATE TABLE conversations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    report_id UUID REFERENCES reports(id),
    messages JSONB,
    context JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Data cache table
CREATE TABLE data_cache (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    cache_key VARCHAR(255) UNIQUE,
    data_type VARCHAR(100),
    data JSONB,
    source VARCHAR(255),
    expires_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 3.2 MongoDB Collections
```javascript
// Report Templates Collection
{
  _id: ObjectId,
  industry: "legal",
  template: {
    sections: [...],
    prompts: {...},
    dataRequirements: [...]
  },
  version: "1.0.0"
}

// Analysis Results Collection
{
  _id: ObjectId,
  reportId: "uuid",
  agentName: "MarketResearchAgent",
  results: {...},
  metadata: {
    processingTime: 1234,
    llmTokensUsed: 5678
  },
  timestamp: ISODate()
}
```

## 4. API Endpoints

### 4.1 RESTful API
```typescript
// Authentication
POST   /api/auth/register
POST   /api/auth/login
POST   /api/auth/logout
GET    /api/auth/me

// Reports
POST   /api/reports/create
GET    /api/reports/:id
GET    /api/reports/list
DELETE /api/reports/:id
GET    /api/reports/:id/download

// Conversations
POST   /api/conversations/start
POST   /api/conversations/:id/message
GET    /api/conversations/:id/history
DELETE /api/conversations/:id

// Analysis
POST   /api/analyze/website
POST   /api/analyze/market
POST   /api/analyze/competitor
GET    /api/analyze/status/:jobId
```

### 4.2 WebSocket Events
```typescript
// Client → Server
socket.emit('start_analysis', { url, type, options })
socket.emit('send_message', { conversationId, message })
socket.emit('request_section', { reportId, section })

// Server → Client
socket.emit('analysis_progress', { step, progress, message })
socket.emit('analysis_complete', { reportId, summary })
socket.emit('stream_response', { chunk, isComplete })
socket.emit('error', { code, message })
```

## 5. Agent Implementation Details

### 5.1 Supervisor Agent
```typescript
interface SupervisorAgent {
  // Core methods
  analyzeIntent(input: string): Promise<Intent>;
  routeToAgent(intent: Intent): Promise<Agent>;
  orchestrate(plan: ExecutionPlan): Promise<Result>;
  
  // Configuration
  llm: ChatOpenAI | Claude;
  temperature: 0.7;
  maxTokens: 4000;
  
  // Prompts
  intentPrompt: string;
  planningPrompt: string;
  synthesisPrompt: string;
}
```

### 5.2 Sub-Agents Structure
```typescript
abstract class BaseAgent {
  abstract name: string;
  abstract description: string;
  abstract tools: Tool[];
  
  abstract async execute(input: AgentInput): Promise<AgentOutput>;
  
  protected async validate(data: any): Promise<boolean>;
  protected async cache(key: string, data: any): Promise<void>;
  protected async getCached(key: string): Promise<any>;
}

class MarketResearchAgent extends BaseAgent {
  name = "MarketResearch";
  tools = [
    new NaverAdsAPI(),
    new KosisAPI(),
    new GoogleTrendsAPI()
  ];
  
  async execute(input: AgentInput) {
    // Implementation
  }
}
```

## 6. Data Flow

### 6.1 Report Generation Flow
```mermaid
sequenceDiagram
    participant U as User
    participant F as Frontend
    participant S as Supervisor
    participant A as Sub-Agents
    participant D as Data Sources
    participant DB as Database
    
    U->>F: Input URL/Keywords
    F->>S: Start Analysis Request
    S->>S: Analyze Intent
    S->>A: Delegate Tasks
    A->>D: Fetch Data
    D-->>A: Return Data
    A->>A: Process & Analyze
    A-->>S: Return Results
    S->>S: Synthesize
    S->>DB: Save Report
    S-->>F: Stream Results
    F-->>U: Display Report
```

## 7. Security Considerations

### 7.1 Authentication & Authorization
```typescript
// JWT Token Structure
interface JWTPayload {
  userId: string;
  email: string;
  permissions: string[];
  iat: number;
  exp: number;
}

// Middleware
middleware.authenticate()
middleware.authorize(['create_report', 'view_report'])
middleware.rateLimit({ windowMs: 15 * 60 * 1000, max: 100 })
```

### 7.2 Data Security
- All API keys stored in environment variables
- Database connections use SSL
- Sensitive data encrypted at rest
- Input sanitization for web scraping
- CORS configuration for frontend

## 8. Performance Optimization

### 8.1 Caching Strategy
```typescript
interface CacheConfig {
  redis: {
    ttl: {
      marketData: 3600,      // 1 hour
      newsData: 1800,         // 30 minutes
      webAnalysis: 86400,    // 24 hours
      report: 604800          // 7 days
    }
  },
  invalidation: {
    onUpdate: true,
    scheduled: "0 0 * * *"  // Daily at midnight
  }
}
```

### 8.2 Parallel Processing
```typescript
// Concurrent agent execution
const results = await Promise.allSettled([
  marketResearchAgent.execute(input),
  competitorAgent.execute(input),
  customerInsightAgent.execute(input)
]);
```

## 9. Error Handling

### 9.1 Error Types
```typescript
enum ErrorCode {
  INVALID_INPUT = 'E001',
  API_LIMIT_EXCEEDED = 'E002',
  SCRAPING_FAILED = 'E003',
  LLM_ERROR = 'E004',
  DATABASE_ERROR = 'E005',
  TIMEOUT = 'E006'
}

class AppError extends Error {
  constructor(
    public code: ErrorCode,
    public message: string,
    public statusCode: number = 500,
    public isOperational: boolean = true
  ) {
    super(message);
  }
}
```

## 10. Deployment Architecture

### 10.1 Docker Configuration
```yaml
version: '3.8'
services:
  frontend:
    build: ./frontend
    ports:
      - "3000:3000"
    environment:
      - NEXT_PUBLIC_API_URL=http://backend:4000
  
  backend:
    build: ./backend
    ports:
      - "4000:4000"
    environment:
      - DATABASE_URL=${DATABASE_URL}
      - REDIS_URL=${REDIS_URL}
    depends_on:
      - postgres
      - redis
  
  postgres:
    image: postgres:15
    volumes:
      - postgres_data:/var/lib/postgresql/data
  
  redis:
    image: redis:7-alpine
    
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
```

### 10.2 Scaling Strategy
- Horizontal scaling for backend services
- Load balancing with NGINX
- Queue-based job processing
- CDN for static assets
- Database read replicas

## 11. Monitoring & Logging

### 11.1 Metrics
```typescript
interface Metrics {
  system: {
    cpu: number;
    memory: number;
    disk: number;
  };
  application: {
    requestsPerMinute: number;
    averageResponseTime: number;
    errorRate: number;
  };
  business: {
    reportsGenerated: number;
    averageCompletionTime: number;
    userSatisfaction: number;
  };
}
```

### 11.2 Logging Strategy
- Structured logging with Winston
- Log levels: ERROR, WARN, INFO, DEBUG
- Centralized log aggregation
- Real-time error alerts

## 12. Testing Strategy

### 12.1 Test Coverage
```yaml
Unit Tests: 80% coverage
  - Agent logic
  - Data processors
  - Utility functions

Integration Tests:
  - API endpoints
  - Database operations
  - External API calls

E2E Tests:
  - Complete user flows
  - Report generation
  - WebSocket communication

Performance Tests:
  - Load testing
  - Stress testing
  - Spike testing
```

## Appendix A: Environment Variables

```env
# Application
NODE_ENV=production
PORT=4000
FRONTEND_URL=https://app.example.com

# Database
DATABASE_URL=postgresql://user:pass@localhost:5432/marketing_ai
REDIS_URL=redis://localhost:6379
MONGODB_URI=mongodb://localhost:27017/marketing_ai

# LLM APIs
OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...
GOOGLE_AI_API_KEY=...

# External APIs
NAVER_CLIENT_ID=...
NAVER_CLIENT_SECRET=...
KOSIS_API_KEY=...
BIGKINDS_API_KEY=...

# Security
JWT_SECRET=...
ENCRYPTION_KEY=...

# Rate Limiting
RATE_LIMIT_WINDOW=900000
RATE_LIMIT_MAX=100
```
