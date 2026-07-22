import Link from 'next/link';

type BookCardProps = {
  title: string;
  description: string;
  href: string;
};

export function BookCard({ title, description, href }: BookCardProps) {
  return (
    <article className="book-card">
      <p className="eyebrow">성경 맥락 여정</p>
      <h2>{title}</h2>
      <p>{description}</p>
      <Link className="button" href={href}>
        {title} 탐험 시작
      </Link>
    </article>
  );
}
