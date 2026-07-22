import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: '성경 지도 탐험',
  description: '장소와 여정으로 성경의 맥락을 탐색합니다.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
