'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Sun, Moon, Monitor, Menu, X, Search } from 'lucide-react';
import SearchModal from '@/components/UI/SearchModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const navigation = [
    { name: 'About', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: 'Projects', href: '/projects' },
    { name: 'Repositories', href: '/repositories' },
    { name: 'CV', href: '/cv' },
    { name: 'Contact', href: '/contact' },
  ];

  // Handle Ctrl+K keyboard shortcut
  const handleSearchKeyboard = (e: React.KeyboardEvent) => {
    if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      setIsSearchOpen(true);
    }
  };

  // Cycle through themes: system -> light -> dark -> system
  const cycleTheme = () => {
    if (theme === 'system') {
      setTheme('light');
    } else if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('system');
    }
  };

  // Get the appropriate icon based on current theme
  const getThemeIcon = () => {
    if (theme === 'system') {
      return <Monitor className="h-4 w-4" />;
    } else if (theme === 'light') {
      return <Sun className="h-4 w-4" />;
    } else {
      return <Moon className="h-4 w-4" />;
    }
  };

  return (
    <>
      <header className="al-folio-nav sticky top-0 z-50" onKeyDown={handleSearchKeyboard}>
        <div className="al-folio-container">
          <div className="flex justify-between items-center py-4">
            {/* Logo/Name */}
            <Link href="/" className="text-xl font-bold al-folio-heading">
              Rishab Chaudhary
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="al-folio-link text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right side controls */}
            <div className="flex items-center space-x-4">
              {/* Search button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="theme-toggle flex items-center"
                aria-label="Search"
                title="Search"
              >
                <Search className="h-4 w-4" />
                <span className="hidden sm:inline ml-1 text-xs al-folio-text">ctrl k</span>
              </button>

              {/* Theme switcher - al-folio style */}
              <button
                onClick={cycleTheme}
                className="theme-toggle"
                aria-label="Change theme"
                title="Change theme"
              >
                {getThemeIcon()}
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden theme-toggle"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t mobile-nav" style={{ borderColor: 'var(--global-border-color)' }}>
              <nav className="flex flex-col space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="al-folio-link px-2 py-1 text-sm font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default Header;

