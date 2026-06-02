import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { SocialLinks } from "./SocialLinks";
import profileImg from "../../imports/profile.png";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const Typewriter = ({
  text,
  delay = 0,
  repeatInterval = 30000,
}: {
  text: string;
  delay?: number;
  repeatInterval?: number;
}) => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!isTyping) {
      // Wait for the repeat interval, then reset to type again
      timer = setTimeout(() => {
        setDisplayText("");
        setIsTyping(true);
      }, repeatInterval);
      return () => clearTimeout(timer);
    }

    let i = 0;
    // Initial delay before starting typing
    const startDelay = setTimeout(() => {
      timer = setInterval(() => {
        if (i < text.length) {
          setDisplayText(text.substring(0, i + 1));
          i++;
        } else {
          clearInterval(timer);
          setIsTyping(false);
        }
      }, 100);
    }, delay * 1000); // converting delay to ms

    return () => {
      clearTimeout(startDelay);
      clearInterval(timer);
    };
  }, [text, isTyping, repeatInterval, delay]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-[3px] h-[1em] bg-blue-500 ml-1 align-middle"
      />
    </motion.span>
  );
};

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 bg-transparent transition-colors relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase text-sm mb-3">
                Hello, I'm
              </h2>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
                Chandima Nanayakkara
              </h1>
              <div className="text-2xl md:text-4xl font-medium text-gray-600 dark:text-gray-300 h-12 mb-8 whitespace-pre-line">
                <Typewriter
                  text={"Quality Assurance Engineer\n( Manual/Automation )"}
                  delay={0.2}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 mt-4 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium border border-green-200 dark:border-green-800"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              Open to Work
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start pt-4"
            >
              <a
                href="#projects"
                className="px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30"
              >
                View Work
              </a>
              <a
                href="#connect"
                className="px-8 py-3 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors shadow-lg"
              >
                Hire Me
              </a>
              <SocialLinks className="bg-white dark:bg-gray-900 px-6 py-3 rounded-full shadow-sm border border-gray-100 dark:border-gray-800" />
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 flex justify-center lg:justify-end lg:items-end relative"
          >
           <motion.div
  animate={{ y: [0, -15, 0] }}
  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
  className="relative w-full max-w-[800px] h-[380px] md:h-[480px] lg:h-[560px] overflow-hidden rounded-3xl"
>
  <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.45),transparent_25%),radial-gradient(circle_at_bottom_left,_rgba(168,85,247,0.35),transparent_25%)] blur-3xl opacity-90 pointer-events-none" />
  <div className="absolute inset-0 rounded-3xl shadow-[0_0_120px_rgba(59,130,246,0.25),0_0_80px_rgba(168,85,247,0.2)] pointer-events-none" />
  <ImageWithFallback
    src={profileImg}
    alt="Chandima"
    className="absolute inset-0 w-full h-full object-cover"
  />
</motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
