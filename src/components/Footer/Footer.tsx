import { CodeIcon, ExternalLinkIcon } from "lucide-react"

export default function Footer() {
  return (
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
  )
}
