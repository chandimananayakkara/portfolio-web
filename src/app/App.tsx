import React, { useState } from 'react';
import { ThemeProvider } from './components/ThemeContext';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Connect } from './components/Connect';
import { Footer } from './components/Footer';
import { SplashScreen } from './components/SplashScreen';
import { motion, AnimatePresence } from 'motion/react';

const BackgroundMotion = () => (
  <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        x: [0, 150, 0],
        y: [0, 100, 0],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "linear"
      }}
      className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-blue-500/30 dark:bg-blue-600/20 blur-[140px]"
    />
    <motion.div
      animate={{
        scale: [1, 1.3, 1],
        x: [0, -150, 0],
        y: [0, -100, 0],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }}
      className="absolute top-[30%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-purple-500/30 dark:bg-purple-600/20 blur-[140px]"
    />
    <motion.div
      animate={{
        scale: [1, 1.1, 1],
        x: [0, 100, 0],
        y: [0, -150, 0],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "linear"
      }}
      className="absolute -bottom-[10%] left-[20%] w-[70vw] h-[70vw] rounded-full bg-pink-500/20 dark:bg-pink-600/10 blur-[140px]"
    />
  </div>
);

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <ThemeProvider>
      <style>{`
        html { scroll-behavior: smooth; font-family: 'Outfit', sans-serif; }
        body { overflow: ${showSplash ? 'hidden' : 'auto'}; }
      `}</style>
      
      <AnimatePresence>
        {showSplash && <SplashScreen key="splash" onComplete={() => setShowSplash(false)} />}
      </AnimatePresence>

      <div className="font-sans text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300 relative selection:bg-blue-500/30 selection:text-blue-900 dark:selection:text-blue-100 scroll-smooth">
        <BackgroundMotion />
        <CustomCursor />
        
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          
          <main className="flex-1">
            <Hero />
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-800 to-transparent w-full" />
            <Skills />
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-800 to-transparent w-full" />
            <Projects />
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-800 to-transparent w-full" />
            <Connect />
          </main>
          
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}
