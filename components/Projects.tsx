"use client";

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "DevOps Microservices Project",
      description: "A fully containerized microservices architecture using modern DevOps tools and best practices. Features Flask APIs, PostgreSQL database, Redis caching, and Docker orchestration with service health checks and retry mechanisms.",
      tech: ["Flask", "PostgreSQL", "Redis", "Docker", "Docker Compose", "cURL"],
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
      color: "from-blue-500 to-purple-600",
      github: "https://github.com/Rochitjain73/devops-microservices-"
    },
    {
      id: 2,
      title: "Gesture-Controlled Subway Surfers",
      description: "Revolutionary gaming experience using hand gesture recognition to control Subway Surfers. Utilizes MediaPipe for real-time gesture detection and PyAutoGUI for seamless game control.",
      tech: ["Python", "OpenCV", "MediaPipe", "PyAutoGUI", "Computer Vision"],
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
      color: "from-green-500 to-blue-600"
    },
    {
      id: 3,
      title: "DevOps AI Deployment",
      description: "Complete CI/CD pipeline for AI applications using Docker containerization, Jenkins automation, and RHEL VM deployment. Features a Flask backend with automated testing and deployment.",
      tech: ["Docker", "Jenkins", "GitHub", "VM", "Flask", "CI/CD"],
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in AI, machine learning, and DevOps.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-80`}></div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Button 
                      size="sm" 
                      variant="secondary" 
                      className="p-2 bg-white/20 hover:bg-white/30 text-white border-none"
                      onClick={() => project.github && window.open(project.github, '_blank')}
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="p-2 bg-white/20 hover:bg-white/30 text-white border-none">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs border-blue-200 text-blue-700 dark:border-blue-800 dark:text-blue-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}