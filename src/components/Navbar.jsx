import { Whale, Menu } from 'lucide-react'
import { useState } from 'react'

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-500 to-blue-700 flex items-center justify-center shadow-lg shadow-sky-500/30">
        {/* Simple whale mark */}
        <svg viewBox="0 0 64 64" className="w-6 h-6 text-white" fill="currentColor" aria-hidden>
          <path d="M52 30c0 10.5-8.5 19-19 19S14 40.5 14 30c0-6.6 5.4-12 12-12 4.6 0 8.5 2.6 10.5 6.4 1.2-1 2.8-1.6 4.5-1.6 4 0 7 3 7 7zM26 27a2 2 0 110-4 2 2 0 010 4z"/>
        </svg>
      </div>
      <span className="text-white font-bold text-xl tracking-tight">BlueWhale</span>
    </div>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="relative z-20">
      <nav className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <Logo />
        <div className="hidden md:flex items-center gap-8 text-sky-100/90">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#testimonials" className="hover:text-white">Love</a>
          <a href="#contact" className="px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-400 text-white shadow">Get Demo</a>
        </div>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <Menu />
        </button>
      </nav>
      {open && (
        <div className="md:hidden mx-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur p-4 text-sky-50 space-y-3">
          <a href="#features" className="block">Features</a>
          <a href="#pricing" className="block">Pricing</a>
          <a href="#testimonials" className="block">Love</a>
          <a href="#contact" className="block">Get Demo</a>
        </div>
      )}
    </header>
  )
}
