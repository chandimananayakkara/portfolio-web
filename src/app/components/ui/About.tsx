import React from "react";
import { motion } from "motion/react";

export function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-20 bg-transparent transition-colors relative"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Section Title */}
          <div>
            <h2 className="text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase text-sm mb-3">
              About Me
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Engineering Confidence Through Quality
            </h1>
          </div>

          {/* Content Box with gradient border */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative p-8 md:p-10 rounded-2xl bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-blue-200/30 dark:border-blue-400/30 shadow-lg"
          >
            {/* Decorative gradient blur */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative space-y-6 text-gray-700 dark:text-gray-300">
              {/* Paragraph 1 */}
              <p className="text-xl leading-relaxed italic font-light text-gray-600 dark:text-gray-400 border-l-4 border-blue-600 dark:border-blue-400 pl-6">
                Hi, I'm{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  Chandima Nanayakkara
                </span>
                . I believe that Quality Assurance is more than just catching
                mistakes at the end of a pipeline—it's about engineering
                confidence from day one. Currently pursuing my{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  Bachelor of Information Technology (External)
                </span>{" "}
                at the{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  University of Moratuwa
                </span>
                , I approach testing with a developer's mindset and a user's
                empathy.
              </p>

              {/* Paragraph 2 */}
              <p className="text-xl leading-relaxed italic font-light text-gray-600 dark:text-gray-400 border-l-4 border-purple-600 dark:border-purple-400 pl-6">
                My focus is on designing robust, maintainable automation
                frameworks that allow development teams to move fast without
                breaking things. I specialize in writing clean, reliable test
                scripts using{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  Java, JavaScript, and TypeScript
                </span>
                , paired with modern automation tools like{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  Selenium, Cypress, and Playwright
                </span>
                .
              </p>

              {/* Paragraph 3 */}
              <p className="text-xl leading-relaxed italic font-light text-gray-600 dark:text-gray-400 border-l-4 border-blue-600 dark:border-blue-400 pl-6">
                I am currently seeking a QA Automation internship where I can
                contribute to a culture of continuous quality, apply my academic
                foundation to enterprise-level software, and learn how modern
                teams scale their automated testing.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
