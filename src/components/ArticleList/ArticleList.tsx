import React from 'react';
import { allArticles } from 'contentlayer/generated';
import Link from 'next/link';
import dayjs from 'dayjs';
import { FileText, Calendar, Clock, ChevronRight } from 'lucide-react';

export default function ArticleList() {
  return (
    <main className="min-h-screen bg-gray-100 p-4 font-mono">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
          <FileText className="w-6 h-6 mr-2" />
          ブログ記事一覧
        </h1>
        <ul className="space-y-6">
          {allArticles.sort((a, b) => dayjs(b.publishedAt).diff(dayjs(a.publishedAt))).map((article) => (
            <li key={article.id} className="border-b border-gray-200 pb-4">
              <Link href={`/articles/${article.id}`} className="block hover:bg-gray-50 transition duration-150 ease-in-out">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{article.title}</h2>
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="mr-4">{dayjs(article.publishedAt).format('YYYY-MM-DD')}</span>
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{`${article.body.raw.length} 文字`}</span>
                </div>
                <div className="flex items-center text-blue-700 hover:underline">
                  <span className="mr-1">続きを読む</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
