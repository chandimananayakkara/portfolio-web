import React from 'react';
import { SocialLinks } from './SocialLinks';
import { Logo } from './Logo';
import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-950 py-12 border-t border-gray-200 dark:border-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 flex-shrink-0 mb-2">
              <Logo className="w-6 h-6" />
              <div className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                Chandima
              </div>
            </div>
            <p className="text-sm font-normal text-gray-500 dark:text-gray-400 text-center md:text-left">
              Building bulletproof software through automation.
            </p>
          </div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center"
          >
            <SocialLinks />
          </motion.div>
          
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Chandima. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
