import React from 'react';
import { ExternalLinkIcon, GithubIcon, TwitterIcon, InstagramIcon, GlobeIcon } from 'lucide-react';
import LinkList, { LinkItem } from '@/components/Link/Link';

export const runtime = 'edge';

const links: LinkItem[] = [
  { name: 'GitHub', url: 'https://github.com/moytus', icon: GithubIcon, color: 'bg-gray' },
  { name: 'Twitter', url: 'https://twitter.com/moytus', icon: TwitterIcon, color: 'bg-blue' },
  { name: 'Instagram', url: 'https://instagram.com/moytus.i', icon: InstagramIcon, color: 'from-pink-500 to-purple-500' },
  { name: 'Personal Website', url: 'https://example.com', icon: GlobeIcon, color: 'bg-green' },
];

export default function LinksPage() {
  return (
    <main className="py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10"></div>
      <div className="max-w-md mx-auto relative z-10">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-12 text-center tracking-tight">Links</h1>
        <div className="space-y-4">
          <LinkList links={links} />
        </div>
      </div>
    </main>
  );
}
