import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { SocialLinks } from "./SocialLinks";
import profileImg from "../../imports/profile.png";
import profileLightImg from "../../imports/profileLight.png";
import { useTheme } from "./ThemeContext";
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
      timer = setTimeout(() => {
        setDisplayText("");
        setIsTyping(true);
      }, repeatInterval);
      return () => clearTimeout(timer);
    }

    let i = 0;
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
    }, delay * 1000);

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
  const { isDark } = useTheme();
  const heroImage = isDark ? profileImg : profileLightImg;
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const appRef = useRef<any>(null);

  useEffect(() => {
    let mounted = true;

    const randomColors = (count: number) =>
      new Array(count).fill(0).map(
        () =>
          "#" +
          Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, "0"),
      );

    const handleBodyClick = () => {
      const app = appRef.current;
      if (!app?.tubes) return;

      app.tubes.setColors(randomColors(3));
      app.tubes.setLightsColors(randomColors(4));
    };

    const effectOptions = isDark
      ? {
          colors: ["#f967fb", "#53bc28", "#6958d5"],
          lights: {
            intensity: 200,
            colors: ["#83f36e", "#fe8a2e", "#ff008a", "#60aed5"],
          },
          minRadius: 0.007,
          maxRadius: 0.01,
        }
      : {
          colors: ["#fae8c8", "#9dd8ff", "#d8b4fe"],
          lights: {
            intensity: 120,
            colors: ["#fef3c7", "#bfdbfe", "#ede9fe", "#f8fafc"],
          },
          minRadius: 0.007,
          maxRadius: 0.01,
        };

    async function initEffect() {
      if (!canvasRef.current) return;

      try {
        const module =
          await import(
            "https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js"
          );
        const TubesCursor = (module as any).default ?? (module as any);

        if (!mounted || !TubesCursor) return;

        const existingApp = appRef.current;
        if (existingApp?.dispose) existingApp.dispose();
        if (existingApp?.destroy) existingApp.destroy();

        appRef.current = TubesCursor(canvasRef.current, {
          tubes: effectOptions,
        });

        document.body.addEventListener("click", handleBodyClick);
      } catch (error) {
        console.error("Failed to load TubesCursor effect", error);
      }
    }

    initEffect();

    return () => {
      mounted = false;
      document.body.removeEventListener("click", handleBodyClick);

      const app = appRef.current;
      if (app?.dispose) app.dispose();
      if (app?.destroy) app.destroy();
    };
  }, [isDark]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 bg-gray-50 dark:bg-gray-950 transition-colors overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
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
                className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 text-white font-medium hover:from-purple-700 hover:via-pink-600 hover:to-pink-500 transition transform hover:scale-105 shadow-lg shadow-pink-500/30 focus:outline-none focus:ring-4 focus:ring-pink-300/30 dark:focus:ring-pink-700/40"
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
              <ImageWithFallback
                src={heroImage}
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