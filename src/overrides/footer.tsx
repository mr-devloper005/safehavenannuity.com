import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/site-config'

export const FOOTER_OVERRIDE_ENABLED = true

const HOURS = [
  { day: 'Mon – Fri', time: '9:00 AM – 6:00 PM' },
  { day: 'Sat', time: '9:00 AM – 3:00 PM' },
  { day: 'Sun', time: 'Closed (Emergency Only)' },
]

const QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/listings' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'FAQs', href: '/help' },
]

const INSTA_IMAGES = [
  'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=180&q=80',
  'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=180&q=80',
  'https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=180&q=80',
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=180&q=80',
  'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=180&q=80',
  'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=180&q=80',
]

export function FooterOverride() {
  return (
    <footer className="relative bg-[#F5F1E8] text-[#1B2A5B]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr_1.2fr]">
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-slate-500">Working Hours</h3>
            <dl className="mt-5 space-y-4">
              {HOURS.map((h) => (
                <div key={h.day} className="flex items-start justify-between gap-3 border-b border-slate-200 pb-3">
                  <dt className="text-sm font-semibold">{h.day}</dt>
                  <dd className="text-sm text-slate-600 text-right">{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-slate-500">Quick Links</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-slate-700 hover:text-[#1B2A5B] hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-slate-500">Instagram Post</h3>
            <div className="mt-5 grid grid-cols-3 gap-2">
              {INSTA_IMAGES.map((src, i) => (
                <a
                  key={i}
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative aspect-square overflow-hidden rounded-xl"
                >
                  <img src={src} alt="Instagram post" className="h-full w-full object-cover hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 border-t border-slate-300 pt-6 sm:flex-row sm:justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200/80">
              <img
                src="/favicon.png?v=20260423"
                alt={`${SITE_CONFIG.name} logo`}
                width={40}
                height={40}
                className="h-full w-full object-contain p-0.5"
              />
            </div>
            <span className="text-lg font-bold text-[#1B2A5B]">{SITE_CONFIG.name}</span>
          </Link>
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
            <span>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
