import { allArticles } from 'contentlayer/generated';
import Link from 'next/link';
import dayjs from 'dayjs';

export default function ArticleList() {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">ブログ記事一覧</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allArticles.reverse().map((article) => (
            <Link legacyBehavior href={`/articles/${article.id}`} key={article.id}>
              <a className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">{article.title}</h2>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{dayjs(article.publishedAt).format('YYYY年MM月DD日')}</span>
                    <span className="text-sm font-medium text-indigo-600 hover:text-indigo-800">
                      続きを読む
                    </span>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
