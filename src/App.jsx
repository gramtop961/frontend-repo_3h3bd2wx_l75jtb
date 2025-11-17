import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <CTA />
      <footer className="py-10 border-t border-white/10 bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sky-100/70">
          <p>© {new Date().getFullYear()} BlueWhale — All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="/test" className="hover:text-white">System Check</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
