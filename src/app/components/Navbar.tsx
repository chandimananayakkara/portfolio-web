import React from 'react';
import { SocialLinks } from './SocialLinks';
import { Logo } from './Logo';
import { motion } from 'motion/react';

export function Navbar() {
  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact Me', href: '#connect' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3 flex-shrink-0">
            <Logo className="w-8 h-8" showText={true} />
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <SocialLinks className="hidden md:flex" />
            
            {/* <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button> */}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}