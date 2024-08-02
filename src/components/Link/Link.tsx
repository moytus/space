import React from 'react';
import { ExternalLink, LucideProps } from 'lucide-react';

export type LinkItem = {
  name: string;
  url: string;
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
  color: string;
};

type LinkProps = {
  links: LinkItem[];
};

const Link: React.FC<LinkProps> = ({ links }) => {
  return (
    <div className="space-y-2">
      {links.map((link, index) => {
        const IconComponent = link.icon;
        return (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-between overflow-hidden relative"
          >
            <div className={`absolute left-0 right-0 top-0 h-0.5 ${link.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            <div className="flex items-center z-10">
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${link.color} bg-opacity-20 mr-4`}>
                <IconComponent className="w-5 h-5 text-gray-700" />
              </div>
              <span className="text-lg font-medium text-gray-800">{link.name}</span>
            </div>
            <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors duration-300" />
          </a>
        );
      })}
    </div>
  );
};

export default Link;
