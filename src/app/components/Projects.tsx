import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink, TestTubes } from 'lucide-react';
import { SiCypress, SiSelenium, SiCucumber, SiGithubactions } from 'react-icons/si';
import { SocialLinks } from './SocialLinks';

const projects = [
  {
    id: 1,
    title: 'E-Commerce End-to-End Automation',
    overview: 'A robust automation framework built with Playwright and TypeScript for a high-traffic e-commerce platform. Covers complete user journeys including auth, checkout, and payment gateways.',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjB0ZXN0aW5nJTIwYXV0b21hdGlvbiUyMGNvZGV8ZW58MXx8fHwxNzgwMjgxMjA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    github: 'https://github.com',
    category: 'Playwright',
    tech: [
      { name: 'Playwright', icon: TestTubes, color: 'text-orange-500' },
      { name: 'GitHub Actions', icon: SiGithubactions, color: 'text-blue-500' }
    ]
  },
  {
    id: 2,
    title: 'Financial Dashboard UI Testing',
    overview: 'Comprehensive component and E2E testing using Cypress for a real-time financial dashboard. Integrated with CI/CD pipelines to ensure zero regressions on UI updates.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbWF0ZWQlMjB0ZXN0aW5nJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc4MDI4MTIxMnww&ixlib=rb-4.1.0&q=80&w=1080',
    github: 'https://github.com',
    category: 'Cypress',
    tech: [
      { name: 'Cypress', icon: SiCypress, color: 'text-gray-500 dark:text-gray-300' }
    ]
  },
  {
    id: 3,
    title: 'Legacy System BDD Implementation',
    overview: 'Behavior-Driven Development approach applied to legacy enterprise software. Bridged the gap between business requirements and technical implementation using Cucumber & Selenium.',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjB0ZXN0aW5nJTIwYXV0b21hdGlvbiUyMGNvZGV8ZW58MXx8fHwxNzgwMjgxMjA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    github: 'https://github.com',
    category: 'Selenium',
    tech: [
      { name: 'Selenium', icon: SiSelenium, color: 'text-green-600' },
      { name: 'Cucumber', icon: SiCucumber, color: 'text-green-500' }
    ]
  }
];

const categories = ['All', 'Playwright', 'Cypress', 'Selenium'];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = projects.filter(project => 
    activeCategory === 'All' ? true : project.category === activeCategory
  );

  return (
    <section id="projects" className="py-24 bg-transparent transition-colors overflow-hidden relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-8"
          >
            Real-world testing scenarios and automated frameworks I've built to ensure product quality.
          </motion.p>
          
          {/* Category Filter Menu */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
                    : 'bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-xl flex flex-col group"
              >
                {/* Image side */}
                <div className="w-full h-48 md:h-64 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-transparent transition-colors z-10 duration-500" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                {/* Content side */}
                <div className="p-8 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-sm md:text-base">
                      {project.overview}
                    </p>
                    
                    <div className="flex flex-wrap gap-3 mb-8">
                      {project.tech.map((t) => (
                        <div key={t.name} className="flex items-center gap-2 bg-gray-50/80 dark:bg-gray-800/80 px-3 py-1.5 rounded-full border border-gray-100 dark:border-gray-700">
                          <t.icon className={`w-4 h-4 ${t.color}`} />
                          <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{t.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100 dark:border-gray-800">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      Source Code
                    </a>
                    <a 
                      href="#"
                      className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-all"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <div className="mt-16 flex justify-center">
          <SocialLinks className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm border border-gray-100 dark:border-gray-800" />
        </div>
      </div>
    </section>
  );
}