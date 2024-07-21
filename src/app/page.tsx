import { Construction } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100">
      <div className="text-center">
        <Construction className="w-24 h-24 text-yellow-500 mx-auto mb-8" />
        <h1 className="text-4xl font-bold mb-4 text-black">サイト開発中</h1>
        <p className="text-xl mb-8 text-gray-600">
          申し訳ありませんが、現在サイトを開発中です。<br />
          もうしばらくお待ちください。
        </p>
      </div>
    </main>
  );
}
