'use client';

import { useEffect, useRef, useState, type ReactNode, type RefObject } from 'react';

type MobileContextPanelProps = {
  title: string;
  children: ReactNode;
  contentRef?: RefObject<HTMLDivElement | null>;
};

export function MobileContextPanel({ title, children, contentRef }: MobileContextPanelProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const hasMountedRef = useRef(false);

  useEffect(() => {
    if (!hasMountedRef.current) {
      hasMountedRef.current = true;
      return;
    }
    setIsCollapsed(false);
  }, [title]);

  useEffect(() => {
    if (!window.matchMedia) return;
    if (window.matchMedia('(max-width: 760px)').matches) setIsCollapsed(true);
  }, []);

  return (
    <aside className="context-panel" aria-live="polite" data-collapsed={isCollapsed}>
      <button hidden={!isCollapsed} className="mobile-panel-summary" type="button" aria-label={`${title} 패널 열기`} onClick={() => setIsCollapsed(false)}>{title}</button>
      <button className="mobile-panel-close" type="button" aria-label="패널 닫기" onClick={() => setIsCollapsed(true)}>×</button>
      <div ref={contentRef} className="mobile-panel-content">{children}</div>
    </aside>
  );
}
