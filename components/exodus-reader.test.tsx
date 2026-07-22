import { fireEvent, render, screen } from '@testing-library/react';
import { useState } from 'react';
import { describe, expect, it } from 'vitest';

import exodus from '../data/korrv-exodus.json';
import { ExodusReader } from './exodus-reader';

describe('ExodusReader', () => {
  it('shows the selected chapter from the complete Exodus JSON', () => {
    function ReaderHarness() {
      const [chapter, setChapter] = useState(1);
      return <ExodusReader chapters={exodus.chapters} chapter={chapter} onChapterChange={setChapter} />;
    }

    render(<ReaderHarness />);

    fireEvent.click(screen.getByRole('button', { name: '20장' }));

    expect(screen.getByRole('heading', { name: '출애굽기 20장' })).toBeInTheDocument();
    expect(screen.getByText(/너는 나 외에는 다른 신들을 네게 있게 말지니라/i)).toBeInTheDocument();
  });
});
