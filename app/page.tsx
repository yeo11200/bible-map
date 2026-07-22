import { BookCard } from '../components/book-card';
import { getSiteUrl } from '../lib/site-url';

export default function HomePage() {
  const siteUrl = getSiteUrl();
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: '성경 지도 탐험',
    url: siteUrl,
    inLanguage: 'ko-KR',
    description: '성경 속 장소, 사건, 인물의 연결을 지도와 관련 구절로 탐색하는 한국어 성경 학습 서비스입니다.',
  };

  return (
    <main className="home-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <section className="hero">
        <p className="eyebrow">BIBLE MAP</p>
        <h1>지도에서 성경의 장소와 이야기를 만나보세요.</h1>
        <p>장소를 따라가며 사건의 맥락을 살펴보고, 연결된 본문을 함께 읽어보세요.</p>
      </section>
      <section aria-labelledby="books-heading">
        <h2 id="books-heading">탐험할 성경</h2>
        <div className="book-list">
          <BookCard title="로마서" description="수신지, 기록 배경, 바울의 로마행을 지도에서 연결해 봅니다." href="/books/romans" />
          <BookCard title="출애굽 여정" description="이집트에서 시내산까지, 사건과 이동 경로를 함께 살펴봅니다." href="/books/exodus" />
        </div>
      </section>
      <section className="about-service" aria-labelledby="about-heading">
        <h2 id="about-heading">성경 지도 탐험이란?</h2>
        <p>성경에 나오는 도시와 지역, 이동 경로를 따라가며 사건의 지리적 맥락을 살펴보는 서비스입니다.</p>
        <p>각 장소는 짧은 설명과 관련 성경 구절을 함께 제공하며, 지도에서 발견한 내용을 본문 읽기로 이어갈 수 있습니다.</p>
      </section>
    </main>
  );
}
