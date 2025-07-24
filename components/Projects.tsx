"use client";

import { motion } from 'framer-motion';
import { ExternalLink, Github, Linkedin, Code, Server, Database, Container } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "🔧 DevOps AI Deployment",
      description: "Complete CI/CD pipeline for AI applications using Flask, Docker, Jenkins, and RHEL VM. Automates build, test, and deploy processes inside Docker containers.",
      tech: ["Flask", "Docker", "Jenkins", "RHEL VM", "CI/CD", "AI"],
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
      color: "from-blue-500 to-purple-600",
      github: "https://github.com/Rochitjain73/flask-devops-ci",
      linkedin: "https://www.linkedin.com/posts/rochit-jain-b90408248_devops-jenkins-docker-activity-7347796689547685888-rPcQ",
      icon: <Server className="h-6 w-6" />,
      features: [
        "Automated CI/CD Pipeline",
        "Docker Containerization", 
        "Jenkins Integration",
        "RHEL VM Deployment"
      ]
    },
    {
      id: 2,
      title: "⚙️ DevOps Microservices Project",
      description: "Modular microservices architecture using Flask, PostgreSQL, Redis, and Docker Compose. Includes retry logic, caching, error handling, and container orchestration.",
      tech: ["Flask", "PostgreSQL", "Redis", "Docker Compose", "Microservices"],
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
      color: "from-green-500 to-blue-600",
      github: "https://github.com/Rochitjain73/devops-microservices",
      linkedin: "https://www.linkedin.com/posts/rochit-jain-b90408248_devops-docker-microservices-activity-7352783207311790081-LLfd",
      icon: <Container className="h-6 w-6" />,
      features: [
        "Microservices Architecture",
        "Container Orchestration",
        "Redis Caching",
        "Error Handling & Retry Logic"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            🛠️ DevOps Projects Showcase
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Complete CI/CD pipelines, microservices architectures, and containerized deployments showcasing modern DevOps practices and automation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 relative">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-85`}></div>
                  
                  {/* Project Icon */}
                  <div className="absolute top-6 left-6 p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
                    <div className="text-white">
                      {project.icon}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="absolute top-6 right-6 flex gap-3">
                    <Button 
                      size="sm" 
                      variant="secondary" 
                      className="p-3 bg-white/20 hover:bg-white/30 text-white border-none backdrop-blur-sm rounded-xl transition-all duration-300"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="h-5 w-5" />
                    </Button>
                    <Button 
                      size="sm" 
                      variant="secondary" 
                      className="p-3 bg-white/20 hover:bg-white/30 text-white border-none backdrop-blur-sm rounded-xl transition-all duration-300"
                      onClick={() => window.open(project.linkedin, '_blank')}
                    >
                      <Linkedin className="h-5 w-5" />
                    </Button>
                  </div>

                  {/* Project Title Overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-base">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-3 uppercase tracking-wide">
                      Key Features
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs px-3 py-1 border-blue-200 text-blue-700 dark:border-blue-800 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* External Links */}
                  <div className="flex gap-4 mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1 border-blue-200 text-blue-700 hover:bg-blue-50 dark:border-blue-700 dark:text-blue-300 dark:hover:bg-blue-900/30"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1 border-blue-200 text-blue-700 hover:bg-blue-50 dark:border-blue-700 dark:text-blue-300 dark:hover:bg-blue-900/30"
                      onClick={() => window.open(project.linkedin, '_blank')}
                    >
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Information Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                🚀 DevOps Excellence
              </h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                These projects demonstrate comprehensive DevOps practices including automated CI/CD pipelines, 
                containerization with Docker, microservices architecture, and cloud deployment strategies. 
                Each project showcases real-world implementation of modern DevOps tools and methodologies.
              </p>
              <div className="flex justify-center gap-8 mt-8">
                <div className="text-center">
                  <Code className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">CI/CD</p>
                </div>
                <div className="text-center">
                  <Container className="h-8 w-8 mx-auto mb-2 text-green-600" />
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Docker</p>
                </div>
                <div className="text-center">
                  <Server className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Microservices</p>
                </div>
                <div className="text-center">
                  <Database className="h-8 w-8 mx-auto mb-2 text-orange-600" />
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Database</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}