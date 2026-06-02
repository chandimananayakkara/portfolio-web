import React from 'react';
import { motion } from 'motion/react';
import { 
  SiSelenium, SiCypress, SiPostman, SiCucumber, 
  SiJunit5, SiApachejmeter, SiJenkins, SiGit, SiGithub, SiGithubactions, SiDocker 
} from 'react-icons/si';
import { FileText, CheckSquare, Bot, BarChart, PieChart, ShieldCheck, Database, TestTubes } from 'lucide-react';
import { SocialLinks } from './SocialLinks';

const skillsRow1 = [
  { name: 'Test Documentation', icon: FileText, color: 'text-blue-500' },
  { name: 'Selenium', icon: SiSelenium, color: 'text-green-600' },
  { name: 'Cypress', icon: SiCypress, color: 'text-gray-500 dark:text-gray-300' },
  { name: 'Rest Assured', icon: Database, color: 'text-green-700' },
  { name: 'TestNG', icon: ShieldCheck, color: 'text-red-500' },
  { name: 'JMeter', icon: SiApachejmeter, color: 'text-red-500' },
  { name: 'Git', icon: SiGit, color: 'text-orange-600' },
  { name: 'GitHub Actions', icon: SiGithubactions, color: 'text-blue-500' },
  { name: 'Generative AI', icon: Bot, color: 'text-purple-500' },
  { name: 'Allure Reports', icon: PieChart, color: 'text-yellow-500' },
];

const skillsRow2 = [
  { name: 'Manual Testing', icon: CheckSquare, color: 'text-green-500' },
  { name: 'Playwright', icon: TestTubes, color: 'text-orange-500' },
  { name: 'Postman', icon: SiPostman, color: 'text-orange-600' },
  { name: 'Cucumber', icon: SiCucumber, color: 'text-green-500' },
  { name: 'JUnit', icon: SiJunit5, color: 'text-red-600' },
  { name: 'Jenkins', icon: SiJenkins, color: 'text-red-700' },
  { name: 'GitHub', icon: SiGithub, color: 'text-gray-900 dark:text-white' },
  { name: 'Docker', icon: SiDocker, color: 'text-blue-600' },
  { name: 'Extent Reports', icon: BarChart, color: 'text-indigo-500' },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-transparent transition-colors relative z-10 overflow-hidden">
      <div className="max-w-[100vw] mx-auto">
        <div className="text-center mb-16 px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            My Technical Arsenal
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            A comprehensive set of tools and technologies I use to ensure robust quality and reliable automation.
          </motion.p>
        </div>

        <style>{`
          @keyframes marqueeLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-50% - 0.75rem)); }
          }
          @keyframes marqueeRight {
            0% { transform: translateX(calc(-50% - 0.75rem)); }
            100% { transform: translateX(0); }
          }
          .animate-marquee-left {
            animation: marqueeLeft 80s linear infinite;
          }
          .animate-marquee-right {
            animation: marqueeRight 80s linear infinite;
          }
          .group:hover .animate-marquee-left,
          .group:hover .animate-marquee-right {
            animation-play-state: paused;
          }
        `}</style>

        <div className="flex flex-col gap-6 overflow-hidden w-full group py-4">
          {/* Row 1: Left to Right */}
          <div className="flex w-max animate-marquee-left gap-6">
            {[...skillsRow1, ...skillsRow1, ...skillsRow1, ...skillsRow1, ...skillsRow1].map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={`row1-${skill.name}-${index}`}
                  className="flex flex-col items-center justify-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm transition-all min-w-[160px]"
                >
                  <Icon className={`w-12 h-12 mb-4 ${skill.color}`} />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Row 2: Right to Left */}
          <div className="flex w-max animate-marquee-right gap-6">
            {[...skillsRow2, ...skillsRow2, ...skillsRow2, ...skillsRow2, ...skillsRow2].map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={`row2-${skill.name}-${index}`}
                  className="flex flex-col items-center justify-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm transition-all min-w-[160px]"
                >
                  <Icon className={`w-12 h-12 mb-4 ${skill.color}`} />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="mt-16 flex justify-center">
          <SocialLinks className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm border border-gray-100 dark:border-gray-700" />
        </div>
      </div>
    </section>
  );
}