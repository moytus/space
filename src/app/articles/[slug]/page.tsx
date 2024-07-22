import React from 'react';
import { allArticles } from 'contentlayer/generated';
import dayjs from 'dayjs';
import { FileText, Calendar, Clock, ArrowLeft, ExternalLink } from 'lucide-react';

export const runtime = 'edge';

export default async function Page({ params }: { params: { slug: string } }) {
  const article = allArticles.find(a => a.id === params.slug);

  if (!article) {
    return (
      <main className="min-h-screen bg-gray-100 p-4 font-mono">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-xl font-bold text-gray-800 mb-4">404 - 記事が見つかりません</h1>
          <a href="/articles" className="text-blue-700 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 inline-flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" />
            記事一覧に戻る
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 p-4 font-mono">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <FileText className="w-6 h-6 mr-2" />
          {article.title}
        </h1>
        <div className="mb-8">
          <div className="text-sm text-gray-600 mb-4 flex items-center">
            <ExternalLink className="w-4 h-4 mr-2" />
            <a href={`/articles/${article.id}.md`} className="text-blue-700 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500">
              {`/${article.id}.md`}
            </a>
          </div>
          <div className="text-sm text-gray-700 mb-2 flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            <span className="mr-4">{dayjs(article.publishedAt).format('YYYY-MM-DD')}</span>
            <Clock className="w-4 h-4 mr-2" />
            <span>{`${article.body.raw.length} 文字`}</span>
          </div>
        </div>

        <div className="prose prose-sm max-w-none text-gray-800">
          <div dangerouslySetInnerHTML={{ __html: article.body.html }} />
        </div>

        <div className="mt-8">
          <a href="/articles" className="text-blue-700 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 inline-flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" />
            記事一覧に戻る
          </a>
        </div>
      </div>
    </main>
  );
}
