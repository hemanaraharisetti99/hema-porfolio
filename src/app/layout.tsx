import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: "Hema's Portfolio",
  description: 'A Civil Engineer building a modern tech journey',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white font-sans">
        {/* 🔻 NAVBAR */}
        <nav className="bg-gray-800 shadow-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <Link href="/" className="text-xl font-bold text-blue-400 hover:text-white transition">
                Hema’s Portfolio
              </Link>

              {/* Navigation Links */}
              <div className="space-x-6 hidden md:flex">
                <Link href="/" className="hover:text-blue-400 transition">Home</Link>
                <Link href="/about" className="hover:text-blue-400 transition">About</Link>
                <Link href="/projects" className="hover:text-blue-400 transition">Projects</Link>
                <Link href="/resume" className="hover:text-blue-400 transition">Resume</Link>
                <Link href="/contact" className="hover:text-blue-400 transition">Contact</Link>
              </div>
            </div>
          </div>
        </nav>

        {/* 🔻 MAIN CONTENT */}
        <main>{children}</main>
      </body>
    </html>
  )
}
