## 📝 문서 작성 원칙

### 점진적 문서화
- Phase 1: PRD/LLD는 **간소화** (2-3페이지)
- Phase 2-5: 구현하면서 **점진적 업데이트**
- PLAN.md가 가장 중요 (5-10페이지 상세)

### 문서 구조
```
docs/
├── PRD.md (초기: 2-3페이지, 점진적 확장)
├── LLD.md (초기: 2-3페이지, 점진적 확장)
├── PLAN.md (상세: 5-10페이지, 모든 작업 명시) ⭐
└── phases/
    ├── phase-2-detail.md (상세 설계)
    ├── phase-3-tests.md (테스트 리포트)
    └── phase-4-cicd.md (배포 가이드)
```

### 각 Phase에서 문서 업데이트
- 코드 구현 후 즉시 PRD/LLD 업데이트
- PLAN.md에 어느 섹션을 업데이트할지 명시
- 상세 내용은 phase-N-detail.md에 작성
