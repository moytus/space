import React from 'react';
import dayjs from 'dayjs';
import ArticleList from '@/components/ArticleList/ArticleList';
import { TwitterIcon, GithubIcon, CodeIcon, UserIcon, BriefcaseIcon, HeartIcon, AwardIcon, CodepenIcon } from 'lucide-react';

export default function Home() {
  const calculateAge = () => {
    const birthDate = dayjs('20040405');
    const today = dayjs();
    return today.diff(birthDate, 'year');
  };

  return (
    <main className="bg-gray-100 flex flex-col">
      <div className="flex-grow p-4 font-sans">
        <div className="max-w-3xl mx-auto">
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
    </main>
  );
}
