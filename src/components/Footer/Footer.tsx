import React from 'react';
import Link from 'next/link'
import { Users } from "lucide-react";

const friendLinks = [
  { name: "sh1ma", image: "/icon-sh1ma.png", twitter: "https://twitter.com/sh1ma", homepage: "https://blog.sh1ma.dev/", intro: "プログラマ友達" },
  // 必要に応じて追加のフレンドリンクをここに追加
];

export default function Footer() {
  return (
    <footer className="bg-gray-200 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center">
            <Users className="w-5 h-5 mr-2 text-blue-400" />
            フレンドリンク
          </h3>
          <div className="space-y-4">
            {friendLinks.map((friend, index) => (
              <Link
                key={index} 
                href={friend.homepage}
              >
                <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 bg-opacity-70 rounded-lg transition-all duration-300 ease-in-out group-hover:bg-opacity-100 group-hover:shadow-md group-hover:scale-[1.02] transform">
                  <img src={friend.image} alt={friend.name} className="w-16 h-16 rounded-full" />
                  <div className="flex-grow">
                    <p className="font-medium text-gray-700 mb-1 flex items-center">
                      {friend.name}
                    </p>
                    <p className="text-sm text-gray-600 mb-2">{friend.intro}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        <div className="text-center text-gray-500 text-sm">
          <p>© 2024 moy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
