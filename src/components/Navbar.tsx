'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-400">
          Hema.dev
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex gap-6 font-medium">
          <Link href="/projects" className="hover:text-blue-400">Projects</Link>
          <Link href="/resume" className="hover:text-blue-400">Resume</Link>
          <Link href="/contact" className="hover:text-blue-400">Contact</Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="flex flex-col gap-4 mt-4 md:hidden text-center">
          <Link href="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="/resume" onClick={() => setIsOpen(false)}>Resume</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  )
}
