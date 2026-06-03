import React from "react";
import { motion } from "motion/react";
import { Carousel, CarouselContent, CarouselItem } from "./carousel";
import aboutImage from "@/imports/1.png";

export function About() {
  return (
    <section
      id="about"
      className="min-h-screen py-20 bg-transparent transition-colors relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_0_40px_rgba(168,85,247,0.5),0_0_80px_rgba(236,72,153,0.3)] hover:shadow-[0_0_50px_rgba(168,85,247,0.7),0_0_100px_rgba(236,72,153,0.4)] transition-shadow duration-500"
          >
            <img
              src={aboutImage}
              alt="About Chandima"
              className="w-full h-full object-cover min-h-[420px]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <p className="text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-[0.3em] text-sm mb-3">
                About Me
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                Engineering Confidence Through Quality
              </h2>
            </div>

            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <p className="text-lg leading-relaxed">
                Hi, I'm{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  Chandima Nanayakkara
                </span>
                . I believe Quality Assurance is more than just catching bugs —
                it's about building confidence across the whole product lifecycle.
              </p>
              <p className="text-lg leading-relaxed">
                I am currently pursuing a{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  Bachelor of Information Technology (External)
                </span>{" "}
                at the University of Moratuwa, and I love turning manual testing
                problems into automated solutions using modern tools.
              </p>
            </div>

            <Carousel
              opts={{
                align: "start",
                containScroll: "trimSnaps",
                dragFree: false,
                draggable: true,
              }}
            >
              <CarouselContent className="flex gap-4">
                <CarouselItem className="min-w-[320px] rounded-[2rem] border border-white/10 bg-slate-50/80 dark:bg-slate-900/80 p-8 flex flex-col">
                  <p className="text-xs uppercase tracking-[0.3em] text-purple-600 dark:text-purple-300 mb-4 font-bold">
                    Education
                  </p>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    University of Moratuwa
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                    Bachelor of IT (External) • 2022 - Present
                  </p>
                  <div className="w-1 h-8 bg-gradient-to-b from-purple-400 to-transparent mb-6" />
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    Focusing on software quality assurance, automation frameworks, and modern testing methodologies.
                  </p>
                </CarouselItem>

                <CarouselItem className="min-w-[320px] rounded-[2rem] border border-white/10 bg-slate-50/80 dark:bg-slate-900/80 p-8 flex flex-col">
                  <p className="text-xs uppercase tracking-[0.3em] text-blue-600 dark:text-blue-300 mb-4 font-bold">
                    Experience
                  </p>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    QA Automation Intern
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                    6 months • Tech Company
                  </p>
                  <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-transparent mb-6" />
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-5">
                    Built automated test suites for e-commerce and dashboard applications.
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 pt-4 border-t border-white/10">
                    Selenium • Cypress • JavaScript
                  </p>
                </CarouselItem>

                <CarouselItem className="min-w-[320px] rounded-[2rem] border border-white/10 bg-slate-50/80 dark:bg-slate-900/80 p-8 flex flex-col">
                  <p className="text-xs uppercase tracking-[0.3em] text-pink-600 dark:text-pink-300 mb-4 font-bold">
                    Certifications
                  </p>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    ISTQB Foundation
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                    Certified • 2024
                  </p>
                  <div className="w-1 h-8 bg-gradient-to-b from-pink-400 to-transparent mb-6" />
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    International Software Testing Qualifications Board certification in testing fundamentals.
                  </p>
                </CarouselItem>

                <CarouselItem className="min-w-[320px] rounded-[2rem] border border-white/10 bg-slate-50/80 dark:bg-slate-900/80 p-8 flex flex-col">
                  <p className="text-xs uppercase tracking-[0.3em] text-purple-600 dark:text-purple-300 mb-4 font-bold">
                    Skills
                  </p>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                    Testing Tools
                  </h4>
                  <div className="w-1 h-8 bg-gradient-to-b from-purple-400 to-transparent mb-6" />
                  <div className="flex flex-wrap gap-3">
                    <span className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-2 rounded-full">
                      Selenium
                    </span>
                    <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-2 rounded-full">
                      Cypress
                    </span>
                    <span className="text-xs bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 px-3 py-2 rounded-full">
                      Playwright
                    </span>
                    <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-2 rounded-full">
                      JavaScript
                    </span>
                  </div>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </motion.div>
        </div>
      </div>
    </section>
  );
}