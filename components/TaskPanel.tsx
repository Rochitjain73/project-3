"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

export default function TaskPanel() {
  const [openCategories, setOpenCategories] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
    setOpenCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const taskCategories = [
    {
      id: 'python',
      title: "Python Tasks",
      icon: "🐍",
      tasks: [
        {
          title: "Sent WhatsApp messages using Twilio API",
          description: "Built automated messaging system with Twilio integration",
          emoji: "📤"
        },
        {
          title: "Sent emails using SMTP and SendGrid",
          description: "Implemented email automation with multiple service providers",
          emoji: "📧"
        },
        {
          title: "Built a menu-driven CLI tool to automate tasks",
          description: "Created interactive command-line interface for task automation",
          emoji: "🎮"
        }
      ]
    },
    {
      id: 'javascript',
      title: "JavaScript Tasks",
      icon: "🟨",
      tasks: [
        {
          title: "Captured photo using webcam access in JavaScript",
          description: "Implemented browser-based photo capture using WebRTC API",
          emoji: "📸"
        },
        {
          title: "Sent emails using EmailJS and a custom backend",
          description: "Integrated email functionality with multiple service approaches",
          emoji: "📧"
        },
        {
          title: "Recorded video using MediaRecorder and sent it via email",
          description: "Built complete video capture and sharing solution",
          emoji: "🎥"
        }
      ]
    },
    {
      id: 'docker',
      title: "Docker Tasks",
      icon: "🐳",
      tasks: [
        {
          title: "Ran a Flask app inside a Docker container",
          description: "Containerized web application with proper Docker configuration",
          emoji: "🌐"
        },
        {
          title: "Containerized a Python Linear Regression model",
          description: "Dockerized ML model for scalable deployment",
          emoji: "📦"
        },
        {
          title: "Set up Docker-in-Docker for CI/CD experiments",
          description: "Implemented nested containers for advanced pipeline scenarios",
          emoji: "🐳"
        },
        {
          title: "Installed Firefox browser in Docker (GUI setup)",
          description: "Configured GUI application with X11 forwarding",
          emoji: "🦊"
        }
      ]
    },
    {
      id: 'git',
      title: "Git & GitHub Tasks",
      icon: "🐙",
      tasks: [
        {
          title: "Created and pushed a new GitHub repo from scratch",
          description: "Set up repository with proper initialization and version control",
          emoji: "📁"
        },
        {
          title: "Worked with branches and merged without conflicts",
          description: "Implemented proper branching strategy and conflict resolution",
          emoji: "🌿"
        },
        {
          title: "Contributed to open source via fork + pull request",
          description: "Made meaningful contributions to open source projects",
          emoji: "🍴"
        }
      ]
    },
    {
      id: 'automation',
      title: "Automation Panels",
      icon: "🎨",
      tasks: [
        {
          title: "Built an automation dashboard using Streamlit",
          description: "Created comprehensive task management interface",
          emoji: "📊"
        },
        {
          title: "Created task automation UI using Gradio",
          description: "Built user-friendly interface for automation workflows",
          emoji: "🎛️"
        }
      ]
    }
  ];

  return (
    <section id="tasks" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">Task Panel</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            A collection of technical tasks and projects I've completed across different technology stacks.
          </p>
        </motion.div>

        <div className="space-y-6">
          {taskCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: openCategories.includes(category.id) ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronRight className="h-5 w-5 text-gray-500" />
                </motion.div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openCategories.includes(category.id) ? 'auto' : 0,
                  opacity: openCategories.includes(category.id) ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 space-y-4">
                  {category.tasks.map((task, taskIndex) => (
                    <motion.div
                      key={taskIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ 
                        opacity: openCategories.includes(category.id) ? 1 : 0,
                        x: openCategories.includes(category.id) ? 0 : -20
                      }}
                      transition={{ 
                        duration: 0.3, 
                        delay: openCategories.includes(category.id) ? taskIndex * 0.1 : 0 
                      }}
                      className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-800 dark:text-white mb-2 flex items-center gap-2">
                            <span>{task.emoji}</span>
                            {task.title}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                            {task.description}
                          </p>
                          <a
                            href="#"
                            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm flex items-center gap-1 transition-colors"
                          >
                            📎 View my LinkedIn post
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}