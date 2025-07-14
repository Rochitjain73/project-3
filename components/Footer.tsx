"use client";

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="flex items-center justify-center gap-2 text-gray-400">
            Made with <Heart className="h-4 w-4 text-red-500" fill="currentColor" /> by Rochit Jain
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © 2025 Rochit Jain. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}