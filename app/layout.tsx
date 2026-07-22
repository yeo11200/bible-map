import type { Metadata } from 'next';

import { getSiteUrl } from '../lib/site-url';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: '성경 지도 탐험 | 장소와 이야기로 읽는 성경',
    template: '%s | 성경 지도 탐험',
  },
  description: '성경 속 장소, 사건, 인물의 연결을 지도와 관련 구절로 탐색하는 한국어 성경 학습 서비스입니다.',
  keywords: ['성경 지도', '성경 공부', '로마서', '성경 지리', '바울', '기독교'],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    siteName: '성경 지도 탐험',
    title: '성경 지도 탐험 | 장소와 이야기로 읽는 성경',
    description: '성경 속 장소, 사건, 인물의 연결을 지도와 관련 구절로 탐색합니다.',
  },
  twitter: {
    card: 'summary',
    title: '성경 지도 탐험',
    description: '장소와 이야기로 읽는 성경',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
