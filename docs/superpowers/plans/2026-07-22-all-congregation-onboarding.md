# 모든 교인을 위한 시작 안내 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 모든 교인이 하나의 로마서 지도 탐험 경로로 명확하게 시작할 수 있는 홈 화면을 만든다.

**Architecture:** `app/page.tsx`는 서버 컴포넌트로 유지하며, 홈 화면의 정적 콘텐츠와 로마서 탐험 링크를 렌더링한다. `BookCard` 하나가 유일한 진입점이다.

**Tech Stack:** Next.js 15, React 19, TypeScript, Vitest, Testing Library, CSS.

## Global Constraints

- 주요 대상은 특정 숙련도나 연령대가 아닌 모든 교인이다.
- 홈 화면에는 `/books/romans`로 이동하는 로마서 카드 하나만 둔다.
- 기존 로마서 지도·구절 탐색 기능은 변경하지 않는다.
- 사용자 상태 저장이나 로그인 기능은 추가하지 않는다.

---

### Task 1: 초심자 시작 안내 카드 구현

**Files:**
- Create: `components/getting-started-card.tsx`
- Create: `components/getting-started-card.test.tsx`

**Interfaces:**
- Produces: `GettingStartedCard(): JSX.Element`
- Produces: 접근 가능한 `3단계로 시작하기` 링크와 장소 선택·사건 요약·본문 읽기 단계 목록.

- [x] **Step 1: Write the failing test**

```tsx
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { GettingStartedCard } from './getting-started-card';

describe('GettingStartedCard', () => {
  it('shows three beginner steps and links to the Romans explorer', () => {
    render(<GettingStartedCard />);

    expect(screen.getByRole('heading', { name: '처음 오셨나요?' })).toBeInTheDocument();
    expect(screen.getByText('장소를 선택해요')).toBeInTheDocument();
    expect(screen.getByText('사건을 살펴봐요')).toBeInTheDocument();
    expect(screen.getByText('본문을 읽어요')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: '3단계로 시작하기' })).toHaveAttribute(
      'href',
      '/books/romans',
    );
  });
});
```

- [x] **Step 2: Run test to verify it fails**

Run: `npm run test -- components/getting-started-card.test.tsx`

Expected: FAIL because `./getting-started-card` does not exist.

- [x] **Step 3: Write minimal implementation**

```tsx
import Link from 'next/link';

const START_STEPS = ['장소를 선택해요', '사건을 살펴봐요', '본문을 읽어요'];

export function GettingStartedCard() {
  return (
    <section className="getting-started-card" aria-labelledby="getting-started-heading">
      <p className="eyebrow">성경 지도 사용법</p>
      <h2 id="getting-started-heading">처음 오셨나요?</h2>
      <p>세 단계로 장소와 이야기, 본문을 자연스럽게 이어서 살펴보세요.</p>
      <ol className="getting-started-card__steps">
        {START_STEPS.map((step, index) => (
          <li key={step}>
            <span aria-hidden="true">{index + 1}</span>
            {step}
          </li>
        ))}
      </ol>
      <Link className="button" href="/books/romans">
        3단계로 시작하기
      </Link>
    </section>
  );
}
```

- [x] **Step 4: Run test to verify it passes**

Run: `npm run test -- components/getting-started-card.test.tsx`

Expected: PASS with one test.

### Task 2: 홈 화면에 두 가지 진입 경로 배치

**Files:**
- Modify: `app/page.tsx`
- Create: `app/page.test.tsx`
- Modify: `app/globals.css`

**Interfaces:**
- Consumes: `GettingStartedCard()` from `components/getting-started-card.tsx`.
- Produces: 홈 화면에서 초심자 안내와 로마서 직접 탐험 카드를 순서대로 표시한다.

- [x] **Step 1: Write the failing test**

```tsx
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import HomePage from './page';

describe('HomePage', () => {
  it('offers guided and direct paths to the Romans explorer', () => {
    render(<HomePage />);

    expect(screen.getByRole('link', { name: '3단계로 시작하기' })).toHaveAttribute(
      'href',
      '/books/romans',
    );
    expect(screen.getByRole('link', { name: '로마서 탐험 시작' })).toHaveAttribute(
      'href',
      '/books/romans',
    );
  });
});
```

- [x] **Step 2: Run test to verify it fails**

Run: `npm run test -- app/page.test.tsx`

Expected: FAIL because the guided link is absent.

- [x] **Step 3: Update the home page and styles**

```tsx
import { BookCard } from '../components/book-card';
import { GettingStartedCard } from '../components/getting-started-card';

export default function HomePage() {
  return (
    <main className="home-page">
      <section className="hero">
        <p className="eyebrow">BIBLE MAP</p>
        <h1>지도에서 성경의 장소와 이야기를 만나보세요.</h1>
        <p>장소를 따라가며 사건의 맥락을 살펴보고, 연결된 본문을 함께 읽어보세요.</p>
      </section>
      <section className="home-page__paths" aria-label="성경 지도 탐험 시작 방법">
        <GettingStartedCard />
        <div>
          <h2>바로 탐험하기</h2>
          <BookCard
            title="로마서"
            description="수신지, 기록 배경, 바울의 로마행을 지도에서 연결해 봅니다."
            href="/books/romans"
          />
        </div>
      </section>
    </main>
  );
}
```

```css
.home-page__paths { display: grid; gap: 28px; grid-template-columns: repeat(2, minmax(0, 1fr)); }
.getting-started-card { padding: 28px; border: 1px solid #dfd4c2; border-radius: 18px; background: #f0e4cc; }
.getting-started-card h2 { margin: 8px 0; font-size: 2rem; }
.getting-started-card__steps { display: grid; gap: 10px; padding: 0; list-style: none; }
.getting-started-card__steps li { display: flex; align-items: center; gap: 10px; }
.getting-started-card__steps span { display: grid; width: 24px; height: 24px; place-items: center; border-radius: 999px; background: #6f3d1f; color: #fff; font-size: .8rem; font-weight: 700; }
@media (max-width: 760px) { .home-page__paths { grid-template-columns: 1fr; } }
```

- [x] **Step 4: Run focused tests to verify they pass**

Run: `npm run test -- components/getting-started-card.test.tsx app/page.test.tsx`

Expected: PASS with two tests.

### Task 3: Regression verification

**Files:**
- Verify: `components/romans-explorer.test.tsx`
- Verify: `components/book-card.test.tsx`
- Verify: `components/romans-reader.test.tsx`

**Interfaces:**
- Verifies: 기존 로마서 장소 선택, 구절 표시, 독서 기능 및 직접 탐험 링크가 유지된다.

- [x] **Step 1: Run the complete test suite**

Run: `npm run test`

Expected: PASS with all test files green.

- [x] **Step 2: Run type checking**

Run: `npx tsc --noEmit`

Expected: command exits with code 0.

- [x] **Step 3: Run production build**

Run: `npm run build`

Expected: Next.js build completes successfully.
