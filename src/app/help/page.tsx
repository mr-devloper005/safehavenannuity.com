import Link from 'next/link'
import type { Metadata } from 'next'
import {
  ArrowRight,
  BookOpen,
  CreditCard,
  HelpCircle,
  LifeBuoy,
  Search,
  Settings,
  ShieldCheck,
  UserPlus,
} from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'

export const metadata: Metadata = {
  title: `Help Centre | ${SITE_CONFIG.name}`,
  description: 'Browse answers, guides, and FAQs. Get support for your account, listings, and annuity questions.',
}

const TOPICS = [
  {
    icon: UserPlus,
    title: 'Getting Started',
    description: 'Create an account, set up your profile, and explore listings.',
  },
  {
    icon: CreditCard,
    title: 'Billing & Plans',
    description: 'Manage subscriptions, billing details, and upgrade options.',
  },
  {
    icon: ShieldCheck,
    title: 'Trust & Safety',
    description: 'How we verify businesses and keep your data safe.',
  },
  {
    icon: Settings,
    title: 'Account Settings',
    description: 'Update password, notifications, and account preferences.',
  },
  {
    icon: BookOpen,
    title: 'Listing Your Business',
    description: 'Requirements, tips, and steps to publish your listing.',
  },
  {
    icon: LifeBuoy,
    title: 'Troubleshooting',
    description: 'Fix common issues quickly with step-by-step guides.',
  },
]

const FAQS = [
  {
    q: 'How do I list my financial services business?',
    a: 'Create a free account, click "Add Listing" in the top navigation, and fill in your business details. Our team reviews each submission within 24–48 hours and publishes verified listings immediately after approval.',
  },
  {
    q: 'Are the businesses on Safe Haven Annuity verified?',
    a: 'Yes. Every listing goes through a verification process where we confirm business credentials, licensing, and a baseline of customer reviews before it is published on the platform.',
  },
  {
    q: 'Is there a fee to create an account?',
    a: 'Creating an account is completely free. Basic business listings are also free. Premium placement and featured listings are available as optional upgrades.',
  },
  {
    q: 'How often should I review my annuity plan?',
    a: 'A good rule of thumb is once a year, or any time your financial goals, income, or family situation changes significantly. Our advisors can help you assess whether your current plan still aligns with your needs.',
  },
  {
    q: 'Do you offer emergency advisory services?',
    a: 'Yes — our advisors are available 24/7 for urgent questions about your policies, payouts, or beneficiaries. Call the number in the footer any time.',
  },
  {
    q: 'Can I compare multiple annuity providers side-by-side?',
    a: 'Absolutely. Use the search and filter tools on our listings page to shortlist providers, then view them side-by-side with ratings, services, and contact details.',
  },
  {
    q: 'How do I reset my password?',
    a: 'On the sign-in page, click "Forgot password?" and we\'ll walk you through resetting it using your registered email address.',
  },
  {
    q: 'Where can I leave feedback or report an issue?',
    a: 'Head to our Contact page or email support directly. We read every message and respond within 24 hours during business days.',
  },
]

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavbarShell />

      {/* Hero + Search */}
      <section className="relative overflow-hidden bg-[#F5F1E8]">
        <div className="absolute inset-0 opacity-40 pointer-events-none" aria-hidden>
          <div className="absolute top-10 right-10 h-72 w-72 rounded-full bg-[#FFC531]/25 blur-3xl" />
          <div className="absolute bottom-10 left-10 h-56 w-56 rounded-full bg-[#1B2A5B]/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1B2A5B]/15 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#1B2A5B]">
            <HelpCircle className="h-3.5 w-3.5" />
            Help Centre
          </div>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-[#1B2A5B] sm:text-5xl lg:text-6xl">
            How Can We Help You?
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600">
            Search our guides, browse common questions, or reach out to our support team directly.
          </p>
          <form className="mx-auto mt-8 flex max-w-2xl items-center gap-2 rounded-full bg-white p-2 shadow-xl border border-slate-100">
            <Search className="ml-4 h-5 w-5 text-slate-400" />
            <input
              type="search"
              placeholder="Search articles, topics, or questions..."
              className="flex-1 bg-transparent px-2 py-3 text-sm outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-[#1B2A5B] px-6 py-3 text-sm font-bold text-white hover:bg-[#142049]"
            >
              Search
            </button>
          </form>
        </div>
      </section>

      {/* Topics */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-600">
            Browse Topics
          </div>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#1B2A5B] sm:text-4xl">
            Pick A Category To Get Started
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TOPICS.map((t) => (
            <Link
              key={t.title}
              href="#faqs"
              className="group rounded-3xl bg-white p-7 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFC531]/20 group-hover:bg-[#FFC531] transition-colors">
                <t.icon className="h-7 w-7 text-[#1B2A5B]" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-[#1B2A5B]">{t.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{t.description}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#1B2A5B] group-hover:gap-2.5 transition-all">
                Explore Articles <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="bg-[#F5F1E8]">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-600">
              FAQs
            </div>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#1B2A5B] sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Quick answers to the questions we hear most often from our community.
            </p>
          </div>

          <div className="mt-12 space-y-3">
            {FAQS.map((faq, i) => (
              <details
                key={i}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all open:shadow-md"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
                  <span className="text-base font-bold text-[#1B2A5B]">{faq.q}</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FFC531] text-[#1B2A5B] transition-transform group-open:rotate-45 text-lg font-bold">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-7 text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
