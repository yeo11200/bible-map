# 여호수아 지도 탐험 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 개역개정 여호수아 1–24장을 지도 지점, 관련 구절, 전체 본문 리더로 탐험할 수 있게 만든다.

**Architecture:** 여호수아 지점 메타데이터와 전체 본문 JSON을 API에서 반환하고, 클라이언트 탐험기가 이를 지도·본문 패널에 렌더링한다. GeoJSON은 지도 경로와 지점을 별도로 보관한다.

**Tech Stack:** Next.js App Router, React, TypeScript, Vitest, Testing Library, MapLibre GeoJSON

## Global Constraints

- 원문은 사용자 제공 개역개정 HWP에서 추출한다.
- 커밋과 푸시는 수행하지 않는다.
- 각 구현 단위는 실패 테스트를 먼저 확인한 뒤 최소 코드로 통과시킨다.

---

### Task 1: 여호수아 API와 본문 데이터

**Files:**
- Create: `app/api/books/joshua/route.test.ts`
- Create: `app/api/books/joshua/route.ts`
- Create: `data/joshua-context.ts`
- Create: `data/gaeokgaejeong-joshua.json`
- Modify: `scripts/export-gaeokgaejeong.mjs`

- [x] **Step 1: Write the failing API test**

```ts
expect(data.contextItems[0]).toEqual(expect.objectContaining({ id: 'jordan-crossing', sequence: 1 }));
expect(mappedChapters).toEqual(Array.from({ length: 24 }, (_, index) => index + 1));
expect(data.chapters['1']).toEqual(expect.arrayContaining([
  expect.objectContaining({ verse: 1, text: expect.stringContaining('모세가 죽은 후에') }),
]));
```

- [x] **Step 2: Run the API test and verify it fails because the route is absent**

Run: `npm run test -- app/api/books/joshua/route.test.ts`

- [x] **Step 3: Add the exporter entry, source-derived JSON, context metadata, and route**

- [x] **Step 4: Run the API test and verify it passes**

Run: `npm run test -- app/api/books/joshua/route.test.ts`

### Task 2: 지도와 탐험 화면

**Files:**
- Create: `components/joshua-explorer.test.tsx`
- Create: `components/joshua-explorer.tsx`
- Create: `app/books/joshua/page.tsx`
- Create: `app/api/books/joshua/map/route.ts`
- Create: `public/data/joshua.geojson`
- Modify: `app/page.tsx`
- Modify: `app/sitemap.ts`
- Modify: `app/llms.txt/route.ts`

- [x] **Step 1: Write the failing component test**

```tsx
fireEvent.click(await screen.findByRole('button', { name: '가나안 정복' }));
expect(screen.getByRole('button', { name: /여리고 — 성읍 정복.*✓ 선택됨/i })).toBeInTheDocument();
fireEvent.click(screen.getByRole('button', { name: /6장 · 여리고 성읍/ }));
expect(screen.getByRole('heading', { name: '여호수아 6장' })).toBeInTheDocument();
```

- [x] **Step 2: Run the component test and verify it fails because the explorer is absent**

Run: `npm run test -- components/joshua-explorer.test.tsx`

- [x] **Step 3: Add the map route, GeoJSON, explorer, page, and discovery links**

- [x] **Step 4: Run the component test and verify it passes**

Run: `npm run test -- components/joshua-explorer.test.tsx`

### Task 3: Whole-project verification

**Files:**
- Modify: no production files unless a verification failure requires a focused correction

- [x] **Step 1: Run all tests**

Run: `npm run test`

- [x] **Step 2: Run the production build**

Run: `npm run build`

- [x] **Step 3: Check the working tree**

Run: `git status --short`

- [x] **Step 4: Do not commit or push**
