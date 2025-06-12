'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Command } from 'cmdk';
import { Search, FileText, Code, User, Mail, ExternalLink } from 'lucide-react';

interface SearchItem {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const searchItems: SearchItem[] = [
    // Pages
    { id: 'home', title: 'Home', description: 'About me and latest updates', url: '/', category: 'Pages', icon: User },
    { id: 'projects', title: 'Projects', description: 'My development projects and work', url: '/projects', category: 'Pages', icon: Code },
    { id: 'repositories', title: 'Repositories', description: 'GitHub repositories and open source', url: '/repositories', category: 'Pages', icon: Code },
    { id: 'cv', title: 'CV', description: 'My curriculum vitae and resume', url: '/cv', category: 'Pages', icon: FileText },
    { id: 'blog', title: 'Blog', description: 'Articles and thoughts on technology', url: '/blog', category: 'Pages', icon: FileText },
    { id: 'contact', title: 'Contact', description: 'Get in touch with me', url: '/contact', category: 'Pages', icon: Mail },
    
    // Projects
    // Projects
    { id: 'valohub', title: 'ValoHub', description: 'Full-stack Valorant skins platform', url: '/projects#valohub', category: 'Projects', icon: Code },
    { id: 'netflix-gpt', title: 'Netflix-GPT', description: 'AI-powered movie recommendations', url: '/projects#netflix-gpt', category: 'Projects', icon: Code },
    { id: 'gitfinder', title: 'GitFinder', description: 'GitHub user search interface', url: '/projects#gitfinder', category: 'Projects', icon: Code },
    { id: 'movieapp', title: 'MovieApp', description: 'Movie search and listing app', url: '/projects#movieapp', category: 'Projects', icon: Code },
    { id: 'obys-clone', title: 'Obys Clone', description: 'Pixel-perfect web clone with GSAP', url: '/projects#obys-clone', category: 'Projects', icon: Code },
    { id: 'refokus-clone', title: 'Refokus Clone', description: 'Animated React agency site clone', url: '/projects#refokus-clone', category: 'Projects', icon: Code },
    { id: 'calendar-app', title: 'Simple Calendar', description: 'Event calendar with views', url: '/projects#calendar-app', category: 'Projects', icon: Code },
    { id: 'chatapp', title: 'ChatApp', description: 'Real-time chat with Socket.IO', url: '/projects#chatapp', category: 'Projects', icon: Code },
    { id: 'chatapp2.0', title: 'ChatApp 2.0', description: 'Group chat with message statuses', url: '/projects#chatapp2.0', category: 'Projects', icon: Code },
    { id: 'coupon-frontend', title: 'Coupon Frontend', description: 'Coupon code management UI', url: '/projects#coupon-frontend', category: 'Projects', icon: Code },
    { id: 'portfolio', title: 'Portfolio Website', description: 'Personal portfolio with contact form', url: '/projects#portfolio', category: 'Projects', icon: Code },
    { id: 'rentDesigner', title: 'rentDesigner Website', description: 'Landing page for an interior design rental service', url: '/projects#rentDesigner', category: 'Projects', icon: Code },

    // Skills
    { id: 'javascript', title: 'JavaScript', description: 'Programming language expertise', url: '/cv#skills', category: 'Skills', icon: Code },
    { id: 'react', title: 'React', description: 'Frontend framework experience', url: '/cv#skills', category: 'Skills', icon: Code },
    { id: 'nodejs', title: 'Node.js', description: 'Backend development skills', url: '/cv#skills', category: 'Skills', icon: Code },
    { id: 'mongodb', title: 'MongoDB', description: 'Database management experience', url: '/cv#skills', category: 'Skills', icon: Code },
    
    // External Links
    { id: 'github', title: 'GitHub Profile', description: 'View my GitHub repositories', url: 'https://github.com/rishab2245', category: 'External', icon: ExternalLink },
    { id: 'linkedin', title: 'LinkedIn Profile', description: 'Connect with me on LinkedIn', url: 'https://www.linkedin.com/in/rishab-chaudhary-1622b8253', category: 'External', icon: ExternalLink },
  ];

  const filteredItems = searchItems.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.description.toLowerCase().includes(search.toLowerCase()) ||
    item.category.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (item: SearchItem) => {
    if (item.url.startsWith('http')) {
      window.open(item.url, '_blank');
    } else {
      router.push(item.url);
    }
    onClose();
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // This will be handled by the parent component
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-start justify-center pt-[10vh]">
      <div className="w-full max-w-2xl mx-4">
        <Command className="al-folio-card rounded-lg shadow-2xl overflow-hidden">
          <div className="flex items-center border-b border-gray-200 dark:border-gray-700 px-4">
            <Search className="h-4 w-4 al-folio-text mr-3" />
            <Command.Input
              value={search}
              onValueChange={setSearch}
              placeholder="Search pages, projects, skills..."
              className="flex-1 py-4 bg-transparent border-0 outline-none al-folio-text placeholder:text-gray-500"
            />
            <kbd className="hidden sm:inline-flex items-center gap-1 rounded border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 px-2 py-1 text-xs al-folio-text">
              ESC
            </kbd>
          </div>
          
          <Command.List className="max-h-96 overflow-y-auto p-2">
            <Command.Empty className="py-8 text-center al-folio-text">
              No results found for &quot;{search}&quot;
            </Command.Empty>
            
            {['Pages', 'Projects', 'Skills', 'External'].map(category => {
              const categoryItems = filteredItems.filter(item => item.category === category);
              if (categoryItems.length === 0) return null;
              
              return (
                <Command.Group key={category} heading={category} className="mb-2">
                  <div className="text-xs font-medium al-folio-text px-2 py-1 mb-1">
                    {category}
                  </div>
                  {categoryItems.map(item => {
                    const Icon = item.icon;
                    return (
                      <Command.Item
                        key={item.id}
                        value={`${item.title} ${item.description} ${item.category}`}
                        onSelect={() => handleSelect(item)}
                        className="flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors data-[selected=true]:bg-blue-100 dark:data-[selected=true]:bg-blue-900"
                      >
                        <Icon className="h-4 w-4 al-folio-text" />
                        <div className="flex-1 min-w-0">
                          <div className="font-medium al-folio-heading text-sm">
                            {item.title}
                          </div>
                          <div className="text-xs al-folio-text truncate">
                            {item.description}
                          </div>
                        </div>
                        {item.url.startsWith('http') && (
                          <ExternalLink className="h-3 w-3 al-folio-text" />
                        )}
                      </Command.Item>
                    );
                  })}
                </Command.Group>
              );
            })}
          </Command.List>
          
          <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-2 text-xs al-folio-text">
            <div className="flex items-center justify-between">
              <span>Navigate with ↑↓ arrows, select with Enter</span>
              <div className="flex items-center gap-2">
                <kbd className="inline-flex items-center gap-1 rounded border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5">
                  ⌘K
                </kbd>
                <span>to search</span>
              </div>
            </div>
          </div>
        </Command>
      </div>
    </div>
  );
}

