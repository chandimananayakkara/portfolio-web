import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "./carousel";
import aboutImage from "@/imports/1.png";

const AUTO_PLAY_DELAY = 4200;

export function About() {
  const [emblaApi, setEmblaApi] = useState<CarouselApi | null>(null);
  const [isInView, setIsInView] = useState(false);
  const aboutRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      {
        root: null,
        threshold: 0.35,
      },
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!emblaApi || !isInView) return;

    const timer = window.setTimeout(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, AUTO_PLAY_DELAY);

    return () => window.clearTimeout(timer);
  }, [emblaApi, isInView]);

  return (
    <section
      ref={aboutRef}
      id="about"
      className="min-h-screen py-12 md:py-20 bg-transparent transition-colors relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl md:rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_0_40px_rgba(168,85,247,0.5),0_0_80px_rgba(236,72,153,0.3)] hover:shadow-[0_0_50px_rgba(168,85,247,0.7),0_0_100px_rgba(236,72,153,0.4)] transition-shadow duration-500"
          >
            <img
              src={aboutImage}
              alt="About Chandima"
              className="w-full h-full object-cover min-h-[300px] md:min-h-[350px] lg:min-h-[420px]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4 md:space-y-6 lg:space-y-8"
          >
            <div>
              <p className="text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-[0.3em] text-xs md:text-sm mb-2 md:mb-3">
                About Me
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                Engineering Confidence Through Quality
              </h2>
            </div>

            <div className="space-y-3 md:space-y-4 lg:space-y-6 text-gray-700 dark:text-gray-300">
              <p className="text-base md:text-lg leading-relaxed">
                Hi, I'm{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  Chandima Nanayakkara
                </span>
                . I believe Quality Assurance is more than just catching bugs —
                it's about building confidence across the whole product lifecycle.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                I am currently pursuing a{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  Bachelor of Information Technology (External)
                </span>{" "}
                at the University of Moratuwa, and I enjoy turning manual testing
                problems into automated solutions using modern tools.
              </p>
            </div>

            <Carousel
              setApi={setEmblaApi}
              opts={{
                align: "start",
                containScroll: "trimSnaps",
              }}
            >
              <CarouselContent className="flex gap-3 md:gap-4">
                {/* Education */}
                <CarouselItem className="min-w-[calc(100%-1rem)] sm:min-w-[320px] md:min-w-[340px] lg:min-w-[380px] rounded-lg md:rounded-[2rem] border border-white/10 bg-slate-50/80 dark:bg-slate-900/80 p-4 md:p-6 lg:p-8">
                  <p className="text-xs uppercase tracking-[0.3em] text-purple-600 dark:text-purple-300 mb-3 font-bold">
                    Education
                  </p>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                        Bachelor of Information Technology (External)
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        University of Moratuwa
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        2025 - Present
                      </p>
                    </div>

                    <div>
                      <h4 className="text-md font-semibold text-gray-900 dark:text-white">
                        School Education
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        St. Aloysius College — Galle
                      </p>
                      <p className="text-xs text-gray-400 mt-1">2013 - 2015</p>
                    </div>

                    <div>
                      <h4 className="text-md font-semibold text-gray-900 dark:text-white">
                        School Education
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        G. Christ Church Boys' College — Baddegama
                      </p>
                      <p className="text-xs text-gray-400 mt-1">2001 - 2015</p>
                    </div>
                  </div>
                </CarouselItem>

                {/* Certifications (scrollable) */}
                <CarouselItem className="min-w-[calc(100%-1rem)] sm:min-w-[320px] md:min-w-[340px] lg:min-w-[380px] rounded-lg md:rounded-[2rem] border border-white/10 bg-slate-50/80 dark:bg-slate-900/80 p-4 md:p-6 lg:p-8">
                  <p className="text-xs uppercase tracking-[0.3em] text-pink-600 dark:text-pink-300 mb-3 font-bold">
                    Certifications
                  </p>

                  <div className="max-h-[300px] overflow-y-auto pr-3 space-y-4 cert-scroll">
                    <CertificationRow
                      title="Test Automation Foundations"
                      issuer="LinkedIn"
                      date="May 2026"
                    />
                    <CertificationRow
                      title="Java: Automated API Testing with REST Assured"
                      issuer="LinkedIn"
                      date="May 2026"
                    />
                    <CertificationRow
                      title="Postman Essential Training"
                      issuer="LinkedIn"
                      date="May 2026"
                    />
                    <CertificationRow
                      title="API Testing Foundations"
                      issuer="LinkedIn"
                      date="May 2026"
                    />
                    <CertificationRow
                      title="Introduction to Maven"
                      issuer="LinkedIn"
                      date="May 2026"
                    />
                    <CertificationRow
                      title="Advanced JMeter"
                      issuer="LinkedIn"
                      date="May 2026"
                    />
                    <CertificationRow
                      title="Test Automation with Selenium WebDriver for Java"
                      issuer="LinkedIn"
                      date="May 2026"
                    />
                    <CertificationRow
                      title="Learning Jenkins: Automating Software Development and System Administration"
                      issuer="LinkedIn"
                      date="May 2026"
                    />
                    <CertificationRow
                      title="API Beginner"
                      issuer="Postman"
                      date="May 2026"
                    />
                    <CertificationRow
                      title="API Testing Path (v12)"
                      issuer="Postman"
                      date="May 2026"
                    />
                    <CertificationRow
                      title="Python for Beginners"
                      issuer="University of Moratuwa"
                      date="2022"
                    />
                    <CertificationRow
                      title="Web Design for Beginners"
                      issuer="University of Moratuwa"
                      date="2022"
                    />
                    <CertificationRow
                      title="Flutter Fast Start Course"
                      issuer="Franklin Training"
                      date="2022"
                    />
                    <CertificationRow
                      title="Cisco Certified Entry Networking Technician"
                      issuer="Great Lake Holdings"
                      date="2021"
                    />
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

function CertificationRow({
  title,
  issuer,
  date,
}: {
  title: string;
  issuer: string;
  date: string;
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-0">
      <div>
        <div className="text-sm font-semibold text-gray-900 dark:text-white">
          {title}
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-400">{issuer}</div>
      </div>
      <div className="text-xs text-gray-400 mt-2 sm:mt-0">{date}</div>
    </div>
  );
}