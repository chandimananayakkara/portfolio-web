import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

interface SocialLinksProps {
  className?: string;
  iconClass?: string;
}

export function SocialLinks({ className = "", iconClass = "w-5 h-5" }: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <a 
        href="https://linkedin.com" 
        target="_blank" 
        rel="noreferrer" 
        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin className={iconClass} />
      </a>
      <a 
        href="mailto:chandimananayakkara94@gmail.com" 
        className="text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
        aria-label="Email"
      >
        <Mail className={iconClass} />
      </a>
      <a 
        href="https://github.com" 
        target="_blank" 
        rel="noreferrer" 
        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        aria-label="GitHub"
      >
        <Github className={iconClass} />
      </a>
    </div>
  );
}
