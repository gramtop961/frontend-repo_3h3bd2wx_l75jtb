import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient ocean vibes */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-900 to-sky-700"></div>

      {/* Spline 3D scene */}
      <div className="relative h-[560px] md:h-[700px]">
        <Spline scene="https://prod.spline.design/poZi6bJ4-Htwt04i/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto max-w-7xl px-6 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sky-100 ring-1 ring-white/20">
              <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse"></span>
              Blue Whale Marketing SaaS
            </div>
            <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-white">
              Make your brand make waves
            </h1>
            <p className="mt-4 text-lg md:text-xl text-sky-100/90">
              Campaigns, analytics, and automation in a sleek, ocean‑themed workspace. Launch in minutes.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#pricing" className="px-6 py-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-white shadow-lg shadow-sky-500/30">Start free</a>
              <a href="#contact" className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white ring-1 ring-white/20">Book a demo</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
