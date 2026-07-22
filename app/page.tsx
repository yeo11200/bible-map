import { BookCard } from '../components/book-card';

export default function HomePage() {
  return (
    <main className="home-page">
      <section className="hero">
        <p className="eyebrow">BIBLE MAP</p>
        <h1>지도에서 성경의 장소와 이야기를 만나보세요.</h1>
        <p>장소를 따라가며 사건의 맥락을 살펴보고, 연결된 본문을 함께 읽어보세요.</p>
      </section>
      <section aria-labelledby="books-heading">
        <h2 id="books-heading">로마서로 시작하기</h2>
        <BookCard
          title="로마서"
          description="수신지, 기록 배경, 바울의 로마행을 지도에서 연결해 봅니다."
          href="/books/romans"
        />
      </section>
    </main>
  );
}
