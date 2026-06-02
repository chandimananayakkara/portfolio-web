import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Logo } from './Logo';

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    // Keep splash screen visible for 2.5 seconds
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-950"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
        className="flex flex-col items-center gap-6"
      >
        <Logo className="w-24 h-24 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]" />
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="font-bold text-4xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
        >
          Chandima
        </motion.div>
        
        {/* Loading Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="h-1 w-48 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden mt-2 relative"
        >
          <motion.div 
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
            className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
