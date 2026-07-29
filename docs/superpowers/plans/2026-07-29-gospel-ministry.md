# 공생애 여정 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 사복음서 전체 본문과 복음서별 선택 지도를 포함한 예수님의 공생애 여정을 제공한다.

**Architecture:** 기존 책별 explorer 패턴을 확장해 gospels 전용 컨텍스트 데이터, GeoJSON, 서버 라우트를 둔다. 클라이언트 explorer는 선택 탭에 맞는 장소와 본문 리더를 렌더링하고 공용 BibleMap을 재사용한다.

**Tech Stack:** Next.js App Router, React, TypeScript, Vitest, MapLibre, HWP5TXT.

## Global Constraints

- 원문은 사용자가 제공한 개역개정 HWP 파일에서 추출한다.
- 지도와 본문 데이터는 `/api/books/gospels` 및 `/api/books/gospels/map`에서 내려받는다.
- 기존 모바일 접이식 본문 패널을 재사용한다.

---

### Task 1: 사복음서 본문 추출

**Files:**
- Modify: `scripts/export-gaeokgaejeong.mjs`
- Create: `data/gaeokgaejeong-matthew.json`, `data/gaeokgaejeong-mark.json`, `data/gaeokgaejeong-luke.json`, `data/gaeokgaejeong-john.json`

- [ ] HWP 변환 대상에 마태(28장), 마가(16장), 누가(24장), 요한(21장)을 추가한다.
- [ ] 다운로드 폴더 원문으로 추출 명령을 실행한다.
- [ ] 각 JSON이 장 수와 첫 절을 보존하는지 확인한다.

### Task 2: 서버 데이터와 지도 API

**Files:**
- Create: `data/gospels-context.ts`, `public/data/gospels.geojson`
- Create: `app/api/books/gospels/route.ts`, `app/api/books/gospels/map/route.ts`
- Test: `app/api/books/gospels/route.test.ts`, `app/api/books/gospels/map/route.test.ts`

- [ ] 사복음서 탭과 공생애 핵심 장소·병행 본문 데이터를 기대하는 실패 테스트를 작성한다.
- [ ] 실패를 확인한다.
- [ ] API와 GeoJSON을 최소 구현한다.
- [ ] API 테스트를 통과시킨다.

### Task 3: 공생애 Explorer와 홈 진입점

**Files:**
- Create: `components/gospels-explorer.tsx`, `components/gospels-explorer.test.tsx`, `app/books/gospels/page.tsx`
- Modify: `app/page.tsx`

- [ ] 전체/마태/마가/누가/요한 탭, 전체 본문 리더, 선택 장소를 기대하는 실패 테스트를 작성한다.
- [ ] 실패를 확인한다.
- [ ] 기존 BibleMap·MobileContextPanel을 조합한 explorer와 홈 카드를 구현한다.
- [ ] 컴포넌트 테스트를 통과시킨다.

### Task 4: 지도 색상·검증

**Files:**
- Modify: `lib/map-style.ts`, `app/globals.css` (필요한 경우)
- Test: 관련 Explorer/API 테스트

- [ ] 복음서별 색·범례·모바일 선택 강조를 확인하는 테스트를 추가한다.
- [ ] 전체 테스트와 `npm run build`를 실행한다.
