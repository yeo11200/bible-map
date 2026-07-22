# 성경 지도 탐험

로마서를 선택하면 수신지·기록 배경·연결 사건을 지도와 구절 참조로 탐색하는 MVP입니다.

## 실행

```bash
npm install
cp .env.example .env.local
npm run dev
```

MapTiler 키를 `.env.local`의 `NEXT_PUBLIC_MAPTILER_KEY`에 넣으면 실제 베이스맵 위에 GeoJSON 장소·경로 레이어가 표시됩니다. 키가 없어도 하이라이트 목록과 상세 패널은 동작합니다.

## Vercel 배포 설정

이 프로젝트는 Vercel이 Next.js 앱으로 자동 인식한다. Git 저장소를 Vercel에 Import한 뒤 Root Directory를 이 프로젝트 폴더로 지정하면 된다.

1. Vercel 프로젝트의 **Settings → Environment Variables**에서 `NEXT_PUBLIC_MAPTILER_KEY`와 `NEXT_PUBLIC_SITE_URL`을 추가한다.
2. 해당 변수는 실제 지도를 표시할 **Preview**와 **Production** 환경에 적용한다. 키가 없으면 지도 대신 장소 목록이 표시된다.
3. MapTiler 콘솔에서는 이 키의 허용 origin을 배포 도메인과 Preview 도메인으로 제한한다.
4. Deploy를 실행한다. Vercel은 `npm run build`를 자동으로 사용한다.

`NEXT_PUBLIC_MAPTILER_KEY`와 `NEXT_PUBLIC_SITE_URL`은 브라우저에서 사용되는 공개 설정값이므로, 비밀 API 키나 개인 자격 증명은 이 변수에 넣지 않는다. `NEXT_PUBLIC_SITE_URL`은 `https://bible-map-eta.vercel.app`을 사용한다. Vercel 환경 변수는 배포 시점에 주입되므로, 새 키를 등록하거나 바꾼 경우 재배포한다.

## 데이터

- `app/api/books/romans/route.ts`: 로마서 맥락·본문을 제공하는 서버 API
- `app/api/books/romans/map/route.ts`: 지도 GeoJSON을 제공하는 서버 API
- `data/romans-context.ts`: 서버 API가 읽는 제목, 요약, 성경 구절 참조
- `lib/context.ts`: 선택한 지도 항목을 찾는 인터페이스

개역한글 본문은 SWORD 모듈에서 변환한 JSON을 별도 데이터 소스로 연결할 예정입니다. 현재는 저작권·배포 범위를 명확히 하기 위해 본문 전문 대신 구절 참조만 표시합니다.
