'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Projects() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-blue-400"
      >
        My Projects Coming Soon 🚀
      </motion.h1>
    </div>
  )
}
