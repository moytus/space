import { allArticles } from 'contentlayer/generated'
import dayjs from 'dayjs';

export default async function Page({ params }: { params: { slug: string } }) {
  const article = allArticles.find(a => a.id === params.slug)

  if(!article) {
    return <div>404</div>
  }

  return (
    <div>
      <div>
        <p>{dayjs(article.publishedAt).format('YYYY年MM月DD日')}</p>
        <h2>{article.title}</h2>
      </div>

      <div>
        <div dangerouslySetInnerHTML={{ __html: article.body.html }} />
      </div>
    </div>
  );
}
