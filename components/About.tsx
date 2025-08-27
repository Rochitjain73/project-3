"use client";

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

export default function About() {
  const skills = [
 
    "Python", "C++", "Docker", "Jenkins", "Ansible", "CI/CD Pipeline", "Kubernetes", "OpenShift", "GitHub Actions", "Docker Compose", "AWS EC2", "S3", "Terraform", "OpenAI API", "LangChain", "Hugging Face", "Prometheus", "Grafana", "Postman", "VS Code", "Linux (Ubuntu)", "API Testing"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
                🚀 My Story
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
               Highly motivated DevOps enthusiast with hands-on experience in deploying full-stack and machine learning applications. Proficient in Docker, CI/CD pipelines, cloud infrastructure (AWS/GCP), and version control systems. Skilled in building scalable and automated deployment workflows, infrastructure as code, and back-end systems to ensure reliable and efficient software delivery.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
                🛠️ Skills & Technologies
              </h3>
              <motion.div
                className="flex flex-wrap gap-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {skills.map((skill, index) => (
                  <motion.div key={skill} variants={itemVariants}>
                    <Badge
                      variant="secondary"
                      className="px-3 py-1 bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-200 dark:hover:bg-blue-800 transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}