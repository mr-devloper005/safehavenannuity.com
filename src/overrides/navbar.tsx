'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LogOut, Menu, Phone, User as UserIcon, X, ChevronDown } from 'lucide-react'
import { useAuth } from '@/lib/auth-context'
import { SITE_CONFIG } from '@/lib/site-config'
import { cn } from '@/lib/utils'

export const NAVBAR_OVERRIDE_ENABLED = true

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/listings',
    children: [
      { label: 'All Listings', href: '/listings' },
      { label: 'Categories', href: '/search' },
      { label: 'Featured', href: '/listings?featured=1' },
    ],
  },
  { label: 'Contact', href: '/contact' },
]

const PHONE = '(234) 345-4574'

export function NavbarOverride() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const pathname = usePathname()
  const { isAuthenticated, user, logout } = useAuth()

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white shadow-md ring-1 ring-slate-200/80">
            <img
              src="/favicon.png?v=20260423"
              alt={`${SITE_CONFIG.name} logo`}
              width={44}
              height={44}
              className="h-full w-full object-contain p-1"
            />
          </div>
          <span className="text-[22px] font-bold tracking-tight text-[#1B2A5B] hidden sm:block">{SITE_CONFIG.name}</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
            if (item.children) {
              return (
                <div key={item.label} className="relative group">
                  <button className={cn(
                    'flex items-center gap-1 text-[15px] font-medium transition-colors',
                    isActive ? 'text-[#1B2A5B]' : 'text-slate-700 hover:text-[#1B2A5B]'
                  )}>
                    {item.label}
                    <ChevronDown className="h-3.5 w-3.5" />
                  </button>
                  <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                    <div className="min-w-[180px] rounded-xl border border-slate-200 bg-white py-2 shadow-xl">
                      {item.children.map((child) => (
                        <Link key={child.href} href={child.href} className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#1B2A5B]">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-[15px] font-medium transition-colors',
                  isActive ? 'text-[#1B2A5B]' : 'text-slate-700 hover:text-[#1B2A5B]'
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          {isAuthenticated ? (
            <div className="relative hidden md:block group">
              <button className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1B2A5B] text-white hover:bg-[#142049] ring-2 ring-[#FFC531]/30 transition">
                {user?.name ? (
                  <span className="text-sm font-bold">{user.name.charAt(0).toUpperCase()}</span>
                ) : (
                  <UserIcon className="h-5 w-5" />
                )}
              </button>
              <div className="invisible absolute right-0 top-full pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                <div className="w-60 rounded-xl border border-slate-200 bg-white py-2 shadow-xl">
                  <div className="border-b border-slate-100 px-4 py-3">
                    <div className="text-sm font-bold text-[#1B2A5B] truncate">{user?.name || 'Account'}</div>
                    <div className="mt-0.5 text-xs text-slate-500 truncate">{user?.email}</div>
                  </div>
                  <button
                    onClick={logout}
                    className="flex w-full items-center gap-2.5 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50"
                  >
                    <LogOut className="h-4 w-4" />
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="hidden md:flex items-center gap-2">
              <Link href="/login" className="rounded-full px-4 py-2 text-sm font-semibold text-[#1B2A5B] hover:bg-slate-100">
                Sign In
              </Link>
              <Link href="/register" className="rounded-full bg-[#FFC531] px-4 py-2 text-sm font-bold text-[#1B2A5B] hover:bg-[#f3b91d] shadow-sm">
                Join Free
              </Link>
            </div>
          )}

          <button
            onClick={() => setOpen(!open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4 space-y-1">
            {NAV_LINKS.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 text-[15px] font-medium text-slate-800 hover:bg-slate-50"
                >
                  {item.label}
                </Link>
              </div>
            ))}
            <div className="mt-3 flex flex-col gap-2 pt-3 border-t border-slate-200">
              {isAuthenticated ? (
                <>
                  <Link href="/dashboard" onClick={() => setOpen(false)} className="rounded-full bg-[#1B2A5B] px-4 py-3 text-center text-sm font-semibold text-white">
                    Dashboard
                  </Link>
                  <button onClick={() => { logout(); setOpen(false) }} className="rounded-full border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700">
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link href="/login" onClick={() => setOpen(false)} className="rounded-full border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-[#1B2A5B]">
                    Sign In
                  </Link>
                  <Link href="/register" onClick={() => setOpen(false)} className="rounded-full bg-[#FFC531] px-4 py-3 text-center text-sm font-bold text-[#1B2A5B]">
                    Join Free
                  </Link>
                </>
              )}
              <a href={`tel:${PHONE.replace(/\D/g, '')}`} className="rounded-full bg-slate-100 px-4 py-3 text-center text-sm font-semibold text-[#1B2A5B]">
                Call {PHONE}
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
