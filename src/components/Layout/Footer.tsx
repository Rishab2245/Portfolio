import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="al-folio-container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="al-folio-text text-sm">
              © 2025 Rishab Chaudhary. Powered by{' '}
              <Link href="https://nextjs.org" className="al-folio-link">
                Next.js
              </Link>
              .
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link
              href="https://github.com/rishab2245"
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors al-folio-text hover:text-gray-900 dark:hover:text-gray-100"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/rishab-chaudhary-1622b8253"
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors al-folio-text hover:text-gray-900 dark:hover:text-gray-100"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
            <Link
              href="mailto:rishabchaudhary2245@gmail.com"
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors al-folio-text hover:text-gray-900 dark:hover:text-gray-100"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

