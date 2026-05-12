'use client'

import { FormEvent, useState } from 'react'
import Link from 'next/link'
import { MessageCircle, Send } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'


export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)
  const [error, setError] = useState<string | null>(null)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    if (!name || !email || !message) {
      setError('Please fill in your name, email, and message.')
      return
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address.')
      return
    }
    setSent(true)
    setName('')
    setEmail('')
    setPhone('')
    setSubject('')
    setMessage('')
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavbarShell />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#F5F1E8]">
        <div className="absolute inset-0 opacity-40 pointer-events-none" aria-hidden>
          <div className="absolute top-10 right-10 h-72 w-72 rounded-full bg-[#FFC531]/25 blur-3xl" />
          <div className="absolute bottom-10 left-10 h-56 w-56 rounded-full bg-[#1B2A5B]/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1B2A5B]/15 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#1B2A5B]">
            <MessageCircle className="h-3.5 w-3.5" />
            Get In Touch
          </div>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-[#1B2A5B] sm:text-5xl lg:text-6xl">
            We&apos;d Love To Hear From You
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600">
            Have a question about our listings? Looking to add your business? Need retirement advice?
            Our team is ready to help — pick the method that works best for you.
          </p>
        </div>
      </section>

      {/* Form + Map */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] bg-white p-8 shadow-lg border border-slate-100 sm:p-10">
            <div className="text-[11px] font-bold uppercase tracking-widest text-slate-500">Send A Message</div>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#1B2A5B] sm:text-4xl">
              Tell Us How We Can Help
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Fill out the form and one of our advisors will reach out within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-semibold text-[#1B2A5B]">Full Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Doe"
                    className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none focus:border-[#1B2A5B] focus:bg-white focus:ring-2 focus:ring-[#FFC531]/40"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1B2A5B]">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none focus:border-[#1B2A5B] focus:bg-white focus:ring-2 focus:ring-[#FFC531]/40"
                  />
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-semibold text-[#1B2A5B]">Phone (optional)</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(123) 456-7890"
                    className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none focus:border-[#1B2A5B] focus:bg-white focus:ring-2 focus:ring-[#FFC531]/40"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1B2A5B]">Subject</label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="How can we help?"
                    className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none focus:border-[#1B2A5B] focus:bg-white focus:ring-2 focus:ring-[#FFC531]/40"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#1B2A5B]">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  placeholder="Tell us a little about what you're looking for..."
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-[#1B2A5B] focus:bg-white focus:ring-2 focus:ring-[#FFC531]/40"
                />
              </div>

              {error ? (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>
              ) : null}
              {sent ? (
                <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                  Thanks for reaching out! We&apos;ll get back to you within 24 hours.
                </div>
              ) : null}

              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#FFC531] px-6 text-sm font-bold text-[#1B2A5B] shadow-lg shadow-[#FFC531]/30 hover:bg-[#f3b91d]"
              >
                Send Message
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="overflow-hidden rounded-[2rem] border border-slate-100 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.222222!2d-73.948!3d40.747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzQ5LjIiTiA3M8KwNTYnNTIuOCJX!5e0!3m2!1sen!2sus!4v1600000000"
                width="100%"
                height="320"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office location"
              />
            </div>

            <Link
              href="/help"
              className="block rounded-[2rem] border border-slate-200 bg-[#F5F1E8] p-8 hover:shadow-lg transition-all"
            >
              <div className="text-[11px] font-bold uppercase tracking-widest text-slate-500">Need Answers Faster?</div>
              <h3 className="mt-2 text-xl font-bold text-[#1B2A5B]">Visit Our Help Centre</h3>
              <p className="mt-2 text-sm text-slate-600">Browse common questions and detailed guides before reaching out.</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#1B2A5B]">
                Open Help Centre →
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

