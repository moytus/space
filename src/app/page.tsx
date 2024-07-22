import React from 'react';
import dayjs from 'dayjs';
import ArticleList from '@/components/ArticleList/ArticleList';
import { TwitterIcon, GithubIcon, ExternalLinkIcon, CodeIcon, UserIcon, BriefcaseIcon, HeartIcon, AwardIcon, CodepenIcon } from 'lucide-react';

export default function Home() {
  const calculateAge = () => {
    const birthDate = dayjs('20040405');
    const today = dayjs();
    return today.diff(birthDate, 'year');
  };

  return (
    <main className="bg-gray-100 flex flex-col min-h-screen">
      <div className="flex-grow p-4 font-sans">
        <div className="max-w-3xl mx-auto">
          <header className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">moytus.dev</h1>
            <p className="text-xl text-gray-700 mb-6">
              moyです。生存報告も兼ねてこのサイトを運営しようと思っています。
            </p>
            <div className="flex justify-center space-x-4">
              <a 
                href="https://twitter.com/moytus" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-6 h-6" />
              </a>
              <a 
                href="https://github.com/moytus" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-700 text-white p-2 rounded-full hover:bg-gray-800 transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-6 h-6" />
              </a>
            </div>
          </header>

          <section className="mb-12 bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <UserIcon className="w-6 h-6 mr-2" /> About Me
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center">
                <UserIcon className="w-5 h-5 mr-3 text-gray-500" />
                <div>
                  <p className="font-semibold text-gray-700">名前</p>
                  <p className="text-gray-600">moytux</p>
                </div>
              </div>
              <div className="flex items-center">
                <BriefcaseIcon className="w-5 h-5 mr-3 text-gray-500" />
                <div>
                  <p className="font-semibold text-gray-700">職業</p>
                  <p className="text-gray-600">大学生 / プログラマ / 合同会社代表社員</p>
                </div>
              </div>
              <div className="flex items-center">
                <HeartIcon className="w-5 h-5 mr-3 text-gray-500" />
                <div>
                  <p className="font-semibold text-gray-700">趣味</p>
                  <p className="text-gray-600">プログラミング、音楽鑑賞、アニメ視聴、豆知識集め</p>
                </div>
              </div>
              <div className="flex items-center">
                <CodepenIcon className="w-5 h-5 mr-3 text-gray-500" />
                <div>
                  <p className="font-semibold text-gray-700">最近の取り組み</p>
                  <p className="text-gray-600">数学を勉強中</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <CodeIcon className="w-6 h-6 mr-2" /> Skills & Licenses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">プログラミング言語</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-24 font-semibold text-gray-700">Go</span>
                    <span className="text-gray-600">仕事で使用経験あり</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-24 font-semibold text-gray-700">TypeScript</span>
                    <span className="text-gray-600">仕事・趣味で使用中</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-24 font-semibold text-gray-700">Ruby</span>
                    <span className="text-gray-600">過去に使用経験あり</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                  <AwardIcon className="w-5 h-5 mr-2" /> 資格
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>普通自動車第一種運転免許</li>
                  <li>三級陸上特殊無線技士</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Latest Articles</h2>
            <ArticleList />
          </section>
        </div>
      </div>

      <footer className="p-4 text-center text-gray-600 bg-gray-200">
        <p>© 2024 moy. All rights reserved.</p>
        <div className="flex justify-center items-center space-x-4 mt-2">
          <a 
            href="https://moytus.dev" 
            className="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors"
          >
            moytus.dev <ExternalLinkIcon className="w-4 h-4 ml-1" />
          </a>
          <a 
            href="https://github.com/moytus/space" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-gray-500 hover:text-gray-600 transition-colors"
            aria-label="View source code on GitHub"
          >
            <CodeIcon className="w-5 h-5" />
          </a>
        </div>
      </footer>
    </main>
  );
}
