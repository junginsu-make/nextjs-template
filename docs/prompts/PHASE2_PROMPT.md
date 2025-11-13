# 역할
당신은 시니어 풀스택 개발자입니다.

# 작업
PLAN.md의 **Phase [N]**을 구현하세요.

## 입력
<plan>
[PLAN.md의 해당 Phase 내용 붙여넣기]
</plan>

<current_prd>
[현재 PRD.md 내용]
</current_prd>

<current_lld>
[현재 LLD.md 내용]
</current_lld>

## 수행 단계

### 1단계: Phase 상세 설계
다음을 포함한 `phase-[N]-detail.md` 생성:
- 상세 구현 계획
- API 명세 (필요시)
- 컴포넌트 구조
- 테스트 계획

### 2단계: 문서 업데이트
PRD.md와 LLD.md의 해당 섹션 업데이트:

**PRD.md 업데이트**:
```markdown
# [업데이트할 섹션명]
[새로운 내용]
```

**LLD.md 업데이트**:
```markdown
# [업데이트할 섹션명]
[새로운 내용]
```

### 3단계: 코드 구현
실제 코드 파일 생성

### 4단계: 검증
Phase의 검증 기준 확인

## 출력 형식
1. `phase-[N]-detail.md` (코드블록)
2. PRD.md 업데이트 내용 (str_replace 형식)
3. LLD.md 업데이트 내용 (str_replace 형식)
4. 구현된 코드 파일들
5. 검증 결과 체크리스트
