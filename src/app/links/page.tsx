import React from 'react';
import { ExternalLinkIcon, GithubIcon, TwitterIcon, InstagramIcon, GlobeIcon } from 'lucide-react';

export const runtime = 'edge';

const links = [
  { name: 'GitHub', url: 'https://github.com/moytus', icon: GithubIcon, color: 'from-gray-700 to-gray-900' },
  { name: 'Twitter', url: 'https://twitter.com/moytus', icon: TwitterIcon, color: 'from-blue-400 to-blue-600' },
  { name: 'Instagram', url: 'https://instagram.com/moytus.i', icon: InstagramIcon, color: 'from-pink-500 to-purple-500' },
  { name: 'Personal Website', url: 'https://moytus.dev', icon: GlobeIcon, color: 'from-green-400 to-green-600' },
];

export default function LinksPage() {
  return (
    <main className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22none%22%20stroke%3D%22%23333%22%3E%3Cpath%20d%3D%22M0%2016h32M16%200v32%22%2F%3E%3C%2Fsvg%3E')] opacity-10"></div>
      <div className="max-w-md mx-auto relative z-10">
        <h1 className="text-5xl font-extrabold text-white mb-12 text-center tracking-tight">Links</h1>
        <div className="space-y-4">
          {links.map((link, index) => {
            const Icon = link.icon;
            const baseColor = link.color.split('-')[1];
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-between overflow-hidden relative"
              >
                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${link.color} opacity-75 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="flex items-center z-10">
                  <Icon className={`w-6 h-6 mr-3 text-${baseColor}-400 transition-colors duration-300`} />
                  <span className="text-lg font-medium text-white">{link.name}</span>
                </div>
                <ExternalLinkIcon className={`w-5 h-5 text-gray-400 group-hover:text-${baseColor}-400 transition-colors duration-300`} />
              </a>
            );
          })}
        </div>
      </div>
    </main>
  );
}