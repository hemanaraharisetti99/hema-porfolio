'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const lastUpdated = 'June 29, 2025' // change when updated

export default function Resume() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 flex flex-col items-center">
      <motion.h1
        className="text-4xl font-bold text-blue-400 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Hema Naraharisetti
      </motion.h1>

      <p className="text-sm text-gray-400 mb-8">Last updated: {lastUpdated}</p>

      {/* Contact Buttons */}
      <motion.div
        className="flex gap-6 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Link href="mailto:hemanaraharisetti@gmail.com" target="_blank" className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white font-medium transition">
          📧 Email
        </Link>
        <Link href="https://www.linkedin.com/in/naraharisetti-hema-664625280/" target="_blank" className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-lg text-white font-medium transition">
          🔗 LinkedIn
        </Link>
        <Link href="https://github.com/hemanaraharisetti99" target="_blank" className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg text-white font-medium transition">
          🐙 GitHub
        </Link>
      </motion.div>

      {/* Resume Content */}
      <motion.div
        className="max-w-3xl space-y-6 text-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <section>
          <h2 className="text-2xl font-semibold text-blue-300">Objective</h2>
          <p>Highly motivated 3rd-year civil engineering student with strong programming and problem-solving skills. Passionate about innovative tech and ready to tackle new challenges.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-300">Education</h2>
          <ul className="list-disc ml-6">
            <li>B.Tech in Civil Engineering, Vishnu Institute of Technology (2022–2026), CGPA: 8.0</li>
            <li>Intermediate (MPC), NRI Junior College (2020–2022), 69%</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-300">Skills</h2>
          <p>C++, Python, HTML, CSS, JavaScript, UI/UX, React, Tailwind, MySQL, Git/GitHub</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-300">Certifications</h2>
          <p>Generative AI (Microsoft), Python (Great Learning), AI, DSA, OOPs, NoSQL, DBMS</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-300">Experience</h2>
          <ul className="list-disc ml-6">
            <li>Bharath Intern – Full-Stack Developer (Mar–Apr 2024)</li>
            <li>Coding Raja – Web Development Intern (Feb–Apr 2024)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-300">Projects</h2>
          <ul className="list-disc ml-6">
            <li><strong>Snake Game:</strong> Built with Python + Pygame</li>
            <li><strong>GameHub:</strong> Modular Python game suite using OOP</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-300">Extra-Curricular</h2>
          <ul className="list-disc ml-6">
            <li>Smart India Hackathon – UI/UX design + hardware prototype</li>
            <li>Class Representative – leadership & communication</li>
            <li>State Football Player (Under-18)</li>
          </ul>
        </section>

        {/* Resume Download */}
        <div className="mt-6">
          <Link href="/hema-resume.pdf" download className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold transition">
            ⬇️ Download PDF
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
