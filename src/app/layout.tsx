import './globals.css'
import Navbar from '@/components/Navbar' // ✅ Import your Navbar

export const metadata = {
  title: "Hema's Portfolio",
  description: 'A Civil Engineer building a modern tech journey',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white font-sans">
        {/* ✅ Navbar from the separate folder */}
        <Navbar />

        {/* ✅ Page content */}
        <main>{children}</main>
      </body>
    </html>
  )
}
