import { getSiteUrl } from '../../lib/site-url';

export async function GET() {
  const siteUrl = getSiteUrl();
  const content = `# 성경 지도 탐험

> 성경의 장소, 사건, 인물의 연결을 지도와 성경 구절로 탐색하는 한국어 학습 웹앱입니다.

성경 지도 탐험은 성경 본문을 대체하지 않습니다. 장소와 여정의 맥락을 이해하도록 돕고, 각 설명에는 관련 성경 구절 참조를 함께 제공합니다. 논쟁적 위치와 해석은 단정하지 않으며, 출처와 확실성 표기가 필요한 콘텐츠를 우선합니다.

## 주요 페이지

- [홈](${siteUrl}/): 서비스 목적과 로마서 탐험 시작점
- [출애굽 여정](${siteUrl}/books/exodus): 이집트에서 시내산까지의 핵심 사건과 지도 맥락
- [여호수아 지도 탐험](${siteUrl}/books/joshua): 요단 도하, 가나안 정복, 땅 분배와 세겜 언약
- [느헤미야 지도 탐험](${siteUrl}/books/nehemiah): 수산 궁의 기도, 예루살렘 성벽 재건, 말씀과 공동체 회복
- [사도행전 지도 탐험](${siteUrl}/books/acts): 교회의 확장, 바울의 선교 여행, 로마 도착
- [로마서 지도 탐험](${siteUrl}/books/romans): 로마서의 수신지, 기록 배경, 관련 지역과 구절

## 데이터와 범위

- 현재 탐험 대상은 출애굽 여정, 여호수아, 느헤미야, 사도행전, 로마서입니다.
- 장소별 설명은 짧은 요약과 성경 참조를 포함합니다.
- 성경 번역문과 역사·지리 정보의 이용 조건은 별도로 확인해야 합니다.
`;

  return new Response(content, {
    headers: { 'content-type': 'text/plain; charset=utf-8' },
  });
}
