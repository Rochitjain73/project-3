"use client";

import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      title: "Marketing Secretary",
      organization: "MNIT Jaipur",
      event: "Blitzschlag'25",
      period: "2024 - Present",
      description: "Leading marketing initiatives for one of India's largest technical festivals."
    },
    {
      title: "Marketing Executive",
      organization: "Technical Society",
      period: "2023 - 2024",
      description: "Executed marketing strategies and campaigns for technical events and workshops."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200 dark:bg-blue-800 rounded-full"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}
            >
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                    {exp.title}
                  </h3>
                  <h4 className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                    {exp.organization} {exp.event && `- ${exp.event}`}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    {exp.period}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {exp.description}
                  </p>
                </div>
              </div>

              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}