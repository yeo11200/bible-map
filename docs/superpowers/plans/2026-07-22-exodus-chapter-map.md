# Exodus Chapter Map Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Connect every Exodus chapter (1–40) to an educational map journey from Egypt to Sinai.

**Architecture:** Extend server-owned Exodus map items with chapter summaries. The context panel renders these summaries as buttons that control the existing full-book reader. The map displays geographic event zones rather than stacking forty markers on Sinai.

**Tech Stack:** Next.js 15, React 19, TypeScript, MapLibre GL, Vitest, KorRV JSON.

## Global Constraints

- Chapters 1 through 40 must each occur exactly once in `chapterItems`.
- Uncertain modern coordinates remain labeled as educational `추정 위치`.
- `/api/books/exodus` remains the source of context data and KorRV chapters.
- Verify with Vitest and `npx tsc --noEmit` before the final push.

---

### Task 1: Add complete chapter coverage to Exodus context data

**Files:**
- Modify: `data/exodus-context.ts`
- Modify: `app/api/books/exodus/route.test.ts`

**Interfaces:**
- Add `ExodusChapterItem = { chapter: number; title: string; summary: string }`.
- Add `chapterItems: ExodusChapterItem[]` to every `ExodusContextItem`.

- [ ] **Step 1: Write a failing chapter-coverage test**

```ts
const mappedChapters = data.contextItems
  .flatMap((item: { chapterItems: { chapter: number }[] }) => item.chapterItems)
  .map((item: { chapter: number }) => item.chapter)
  .sort((left: number, right: number) => left - right);

expect(mappedChapters).toEqual(Array.from({ length: 40 }, (_, index) => index + 1));
expect(data.contextItems).toEqual(expect.arrayContaining([
  expect.objectContaining({ id: 'egypt-oppression' }),
  expect.objectContaining({ id: 'sinai-tabernacle' }),
]));
```

- [ ] **Step 2: Run the test and confirm RED**

Run: `npm run test -- app/api/books/exodus/route.test.ts`

Expected: FAIL because `chapterItems` does not exist.

- [ ] **Step 3: Implement chapter groups**

Add groups and chapter ownership exactly as follows: `egypt-oppression` owns 1–2; `horeb-calling` owns 3–4; `egypt-plagues` owns 5–11; `passover-departure` owns 12; existing wilderness groups own 13–18; `sinai-covenant` owns 19–24; `sinai-tabernacle` owns 25–40. Give every chapter a Korean title and one-sentence event summary.

- [ ] **Step 4: Run the test and confirm GREEN**

Run: `npm run test -- app/api/books/exodus/route.test.ts`

Expected: PASS with the sorted range `1..40`.

- [ ] **Step 5: Commit**

```bash
git add data/exodus-context.ts app/api/books/exodus/route.test.ts
git commit -m "[main] feat: 출애굽기 장별 지도 데이터 추가"
```

### Task 2: Add chapter navigation inside each map context

**Files:**
- Modify: `components/exodus-reader.tsx`
- Modify: `components/exodus-context-panel.tsx`
- Create: `components/exodus-context-panel.test.tsx`

**Interfaces:**
- `ExodusReader` receives `chapters`, `chapter`, and `onChapterChange`.
- `ExodusContextPanel` renders `item.chapterItems` and owns `readerChapter` state.

- [ ] **Step 1: Write a failing reader-navigation test**

```tsx
render(<ExodusContextPanel item={egyptPlaguesItem} chapters={exodus.chapters} />);
fireEvent.click(screen.getByRole('button', { name: '10장 · 메뚜기와 흑암' }));
expect(screen.getByRole('heading', { name: '출애굽기 10장' })).toBeInTheDocument();
```

- [ ] **Step 2: Run the test and confirm RED**

Run: `npm run test -- components/exodus-context-panel.test.tsx`

Expected: FAIL because the chapter button is absent.

- [ ] **Step 3: Implement the controlled reader**

Use this reader prop shape:

```ts
type ExodusReaderProps = {
  chapters: Record<string, { verse: number; text: string }[]>;
  chapter: number;
  onChapterChange: (chapter: number) => void;
};
```

Render buttons labeled `{chapter}장 · {title}` in a section titled `이 지점에서 읽을 장`. On click, set `readerChapter`; reset it to the first chapter when the selected map item changes.

- [ ] **Step 4: Run the component tests and confirm GREEN**

Run: `npm run test -- components/exodus-context-panel.test.tsx components/exodus-reader.test.tsx`

Expected: PASS; selecting a chapter updates the full reader.

- [ ] **Step 5: Commit**

```bash
git add components/exodus-reader.tsx components/exodus-context-panel.tsx components/exodus-context-panel.test.tsx components/exodus-reader.test.tsx
git commit -m "[main] feat: 지도 구간별 장 본문 탐색 추가"
```

### Task 3: Add Egypt and Sinai map zones

**Files:**
- Modify: `public/data/exodus.geojson`
- Modify: `components/exodus-explorer.tsx`
- Create or modify: `app/api/books/exodus/map/route.test.ts`

**Interfaces:**
- Every GeoJSON point `properties.id` exactly matches an `ExodusContextItem.id`.

- [ ] **Step 1: Write a failing map-feature test**

```ts
expect(featureIds).toEqual(expect.arrayContaining([
  'egypt-oppression', 'horeb-calling', 'egypt-plagues',
  'passover-departure', 'sinai-tabernacle',
]));
```

- [ ] **Step 2: Run the test and confirm RED**

Run: `npm run test -- app/api/books/exodus/map/route.test.ts`

Expected: FAIL because Egypt and Sinai chapter-zone IDs are missing.

- [ ] **Step 3: Add educational map points**

Add `egypt-oppression`, `egypt-plagues`, `passover-departure` in Egypt, `horeb-calling` near the Sinai wilderness route, and `sinai-tabernacle` beside the existing Sinai point. Extend the route line in chapter order. Adjust the initial view to include Egypt through Sinai.

- [ ] **Step 4: Run the map test and confirm GREEN**

Run: `npm run test -- app/api/books/exodus/map/route.test.ts`

Expected: PASS with all five feature IDs.

- [ ] **Step 5: Commit**

```bash
git add public/data/exodus.geojson components/exodus-explorer.tsx app/api/books/exodus/map/route.test.ts
git commit -m "[main] feat: 애굽과 시내산 장별 지도 구간 추가"
```

### Task 4: Verify and publish

**Files:**
- Verify changes from Tasks 1–3.

- [ ] **Step 1: Run full verification**

Run: `npm run test && npx tsc --noEmit`

Expected: all tests pass and TypeScript exits 0.

- [ ] **Step 2: Verify the local API**

Run: `curl -sS http://127.0.0.1:3001/api/books/exodus`

Expected: `chapterItems` includes chapters 1 and 40, and `chapters` includes all 40 KorRV chapters.

- [ ] **Step 3: Push the verified commits**

```bash
git push
```

Expected: Git-connected Vercel deployment begins.
