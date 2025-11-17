import { useState } from 'react'

export default function CTA() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const subscribe = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')
    try {
      const res = await fetch(`${baseUrl}/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })
      const data = await res.json()
      if (res.ok && data.ok) setMessage('Thanks! Check your inbox for a welcome email.')
      else setMessage('Something went wrong. Try again later.')
    } catch (err) {
      setMessage('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-sky-900/40 to-blue-900/40 p-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to make waves?</h2>
          <p className="mt-2 text-sky-100/80">Join early adopters and get updates, tips, and launch invites.</p>
          <form onSubmit={subscribe} className="mt-6 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <input value={email} onChange={(e)=>setEmail(e.target.value)} required type="email" placeholder="Your email" className="flex-1 rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-sky-200/60 focus:outline-none focus:ring-2 focus:ring-sky-400" />
            <button disabled={loading} className="px-6 py-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-white disabled:opacity-50">
              {loading ? 'Subscribing...' : 'Get updates'}
            </button>
          </form>
          {message && <p className="mt-3 text-sky-100/90">{message}</p>}
        </div>
      </div>
    </section>
  )
}
