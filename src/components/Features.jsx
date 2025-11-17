import { BarChart3, Compass, Send, Waves } from 'lucide-react'

const items = [
  {
    icon: Waves,
    title: 'Automated Journeys',
    desc: 'Drag-and-drop flows that nurture leads from first splash to loyal fan.'
  },
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    desc: 'Track conversions, cohorts, and ROI with beautiful ocean-blue charts.'
  },
  {
    icon: Send,
    title: 'Multi-channel Campaigns',
    desc: 'Email, socials, and SMS — coordinate launches that ripple across channels.'
  },
  {
    icon: Compass,
    title: 'Audience Segments',
    desc: 'Pinpoint your ideal customers with dynamic traits and intent signals.'
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="absolute inset-x-0 -top-20 h-40 bg-gradient-to-b from-sky-500/10 to-transparent blur-2xl" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Everything you need to launch</h2>
          <p className="mt-3 text-sky-100/80">All the tools to plan, build, and measure campaigns that make a splash.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sky-100/90 hover:bg-white/10 transition">
              <it.icon className="w-6 h-6 text-sky-400" />
              <h3 className="mt-4 text-white font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
