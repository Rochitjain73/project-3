"use client";

import { motion } from 'framer-motion';
import { ArrowDown, FileText, Mail, FolderOpen, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ResumeDownloadButton from '@components/ResumeDownloadButton'

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="blob absolute top-1/4 left-1/4 w-72 h-72 opacity-30"></div>
        <div className="blob absolute top-3/4 right-1/4 w-96 h-96 opacity-20"></div>
        <div className="blob absolute bottom-1/4 left-1/2 w-80 h-80 opacity-25"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <img
                src="/IMG_2564 2.jpeg"
                alt="Rochit Jain"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Rochit Jain
          </motion.h1>
          
          <motion.h2
            className="text-2xl md:text-3xl font-semibold mb-4 text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Business Analyst & DevOps Enthusiast
          </motion.h2>
          
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900 rounded-full">
              <GraduationCap className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span className="text-blue-800 dark:text-blue-200 font-medium">
                B.Tech Student at MNIT Jaipur
              </span>
            </div>
          </motion.div>
          
          <motion.p
            className="text-lg md:text-xl mb-8 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            "Turning smart ideas into real-world AI tools."
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Button
              onClick={() => scrollToSection('projects')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full flex items-center gap-2"
            >
              <FolderOpen className="h-4 w-4" />
              Projects
            </Button>
            <ResumeDownloadButton />
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950 px-8 py-3 rounded-full flex items-center gap-2"
            >
              <Mail className="h-4 w-4" />
              Contact
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="h-6 w-6 text-gray-400" />
        </motion.div>
      </div>
    </section>
  );
}