'use client' 

import { motion } from 'framer-motion' 

export default function Home() {
  return (
     <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 2, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold text-blue-400 mb-4">Hi, I’m Hema 👋</h1>
        <p className="text-lg text-gray-300">A Civil Engineer exploring tech and innovation.</p>
      </motion.div>
    </div>
  );
}
