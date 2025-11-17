export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Simple, transparent pricing</h2>
          <p className="mt-3 text-sky-100/80">Start free, grow when you’re ready.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {name:'Free', price:'$0', features:['1 workspace','Basic automations','Community support'], cta:'Start free', highlight:false},
            {name:'Pro', price:'$29', features:['Unlimited campaigns','Advanced analytics','Priority support'], cta:'Choose Pro', highlight:true},
            {name:'Scale', price:'$99', features:['Multichannel orchestration','Team roles & SSO','Dedicated success'], cta:'Choose Scale', highlight:false},
          ].map((p, i)=> (
            <div key={i} className={`rounded-2xl border ${p.highlight? 'border-sky-400/40 bg-gradient-to-br from-sky-900/40 to-blue-900/40':'border-white/10 bg-white/5'} p-6 text-white`}>
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <span className="text-3xl font-bold">{p.price}<span className="text-sm font-normal text-sky-200/80">/mo</span></span>
              </div>
              <ul className="mt-6 space-y-2 text-sky-100/90">
                {p.features.map((f, j)=>(<li key={j} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-sky-400" /> {f}</li>))}
              </ul>
              <a href="#contact" className={`mt-8 inline-block w-full text-center px-4 py-2 rounded-lg ${p.highlight? 'bg-sky-500 hover:bg-sky-400':'bg-white/10 hover:bg-white/20'} transition`}>{p.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
