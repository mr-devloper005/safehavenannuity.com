import Link from 'next/link'
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Calendar,
  Clock,
  HeartHandshake,
  Phone,
  PiggyBank,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
} from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { TaskPostCard } from '@/components/shared/task-post-card'
import { SITE_CONFIG } from '@/lib/site-config'
import { fetchTaskPosts } from '@/lib/task-data'

export const HOME_PAGE_OVERRIDE_ENABLED = true

const SERVICES = [
  {
    icon: PiggyBank,
    title: 'Fixed Annuities',
    description: 'Guaranteed returns with predictable income streams for a stress-free retirement.',
  },
  {
    icon: TrendingUp,
    title: 'Variable Annuities',
    description: 'Market-linked growth potential paired with lifetime income options.',
  },
  {
    icon: Shield,
    title: 'Immediate Annuities',
    description: 'Start receiving income payments right away with a single lump-sum premium.',
  },
  {
    icon: Calendar,
    title: 'Deferred Annuities',
    description: 'Grow your savings tax-deferred until you are ready to receive income.',
  },
]

const STATS = [
  { value: '4.5K+', label: 'Projects Done' },
  { value: '13K+', label: 'Satisfied Customers' },
  { value: '10+', label: 'Years of Experience' },
]

const TESTIMONIALS = [
  {
    name: 'Bradley Lawlor',
    rating: 5,
    text: 'The team was on time, explained everything clearly, and completed the job without any mess. Our home feels so much more comfortable now.',
  },
  {
    name: 'Rhonda Rhodes',
    rating: 5,
    text: 'Seamless onboarding and the advisor recommended an annuity that matched my retirement plan perfectly. Highly professional service.',
  },
  {
    name: 'Stephanie Sharkey',
    rating: 5,
    text: 'They even suggested an alternate plan that was more efficient. My monthly income projections look stronger now — couldnt be happier.',
  },
  {
    name: 'John Dukes',
    rating: 5,
    text: 'Found the right business partner through this directory. Verified listings saved me hours of research and gave real peace of mind.',
  },
  {
    name: 'Autumn Phillips',
    rating: 5,
    text: 'Loved how easy it was to compare options and contact providers. Everything explained clearly without any pressure.',
  },
  {
    name: 'Patricia Sanders',
    rating: 5,
    text: 'From scheduling to completion, every step was smooth. The team was friendly, knowledgeable, and genuinely cared about getting it right.',
  },
  {
    name: 'Kimberly Mastrangelo',
    rating: 5,
    text: 'Our business needed a full-service partner and these professionals handled it efficiently. Recommend them to anyone looking.',
  },
]

const FAQS = [
  {
    q: 'How often should I review my annuity plan?',
    a: 'A good rule of thumb is once a year, or anytime your financial goals, income, or family situation changes.',
  },
  {
    q: 'Do you offer emergency advisory services?',
    a: 'Yes — our advisors are available 24/7 for urgent questions about your policies, payouts, or beneficiaries.',
  },
  {
    q: 'Are the businesses on Safe Haven Annuity verified?',
    a: 'Every business listed on our platform goes through a verification process to confirm credentials and reviews.',
  },
  {
    q: 'Can I list my financial services business?',
    a: 'Absolutely. Create a free account, fill in your details, and our team will verify and publish your listing.',
  },
]

function StarRow({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`h-3.5 w-3.5 ${i < count ? 'fill-[#FFC531] text-[#FFC531]' : 'text-slate-300'}`} />
      ))}
    </div>
  )
}

export async function HomePageOverride() {
  const listingPosts = await fetchTaskPosts('listing', 6, { allowMockFallback: false, fresh: true }).catch(() => [])

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavbarShell />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#F5F1E8]">
        <div className="absolute inset-0 opacity-40 pointer-events-none" aria-hidden>
          <div className="absolute top-10 left-20 h-60 w-60 rounded-full bg-[#FFC531]/20 blur-3xl" />
          <div className="absolute bottom-20 right-20 h-80 w-80 rounded-full bg-[#1B2A5B]/10 blur-3xl" />
        </div>
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:py-24">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#1B2A5B]/15 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#1B2A5B]">
              <Sparkles className="h-3.5 w-3.5 text-[#FFC531]" />
              No.1 Annuity & Financial Services
            </div>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-[#1B2A5B] sm:text-5xl lg:text-6xl">
              Secure, Affordable
              <br />
              &amp; Guaranteed Income
              <br />
              Annuity Plans
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600">
              Were your local annuity experts dedicated to protecting your family&apos;s future with trusted providers,
              honest pricing, and guaranteed results. Discover verified listings you can count on.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/listings"
                className="inline-flex items-center gap-2 rounded-full bg-[#FFC531] px-7 py-4 text-sm font-bold text-[#1B2A5B] shadow-lg shadow-[#FFC531]/30 hover:bg-[#f3b91d]"
              >
                Request Free Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-[#1B2A5B]/20 bg-white px-7 py-4 text-sm font-semibold text-[#1B2A5B] hover:bg-slate-50"
              >
                Learn More
              </Link>
            </div>

            <div className="mt-10 grid max-w-lg grid-cols-3 gap-6">
              {STATS.map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-extrabold text-[#1B2A5B] sm:text-4xl">{s.value}</div>
                  <div className="mt-1 text-sm text-slate-600">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-br from-[#1B2A5B]/10 to-[#FFC531]/20" />
            <div className="relative overflow-hidden rounded-[2.5rem] border-4 border-[#1B2A5B]/10 bg-white shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80"
                alt="Advisor working"
                className="h-[500px] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white p-4 shadow-xl border border-slate-100 hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFC531]">
                  <ShieldCheck className="h-6 w-6 text-[#1B2A5B]" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">Verified Providers</div>
                  <div className="text-sm font-bold text-[#1B2A5B]">100% Trusted</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT / TRUSTED */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-600">
              About Us
            </div>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-[#1B2A5B] sm:text-4xl lg:text-5xl">
              Trusted Annuity Experts
              <br />
              You Can Count On
            </h2>
            <p className="mt-5 max-w-xl text-slate-600 leading-7">
              At {SITE_CONFIG.name}, your financial comfort comes first. We take pride in offering fast, friendly,
              and affordable solutions designed to keep your retirement secure through every stage. Our skilled advisors
              are always ready to go the extra mile for you. We are a team of licensed financial professionals
              dedicated to providing reliable, transparent guidance.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: BadgeCheck, text: 'Licensed & certified advisors' },
                { icon: HeartHandshake, text: 'Personalized consultations' },
                { icon: Clock, text: 'Same-day response' },
                { icon: Award, text: '10+ years of industry experience' },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFC531]/20">
                    <item.icon className="h-5 w-5 text-[#1B2A5B]" />
                  </div>
                  <p className="pt-1.5 text-sm font-medium text-slate-700">{item.text}</p>
                </div>
              ))}
            </div>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#FFC531] px-6 py-3 text-sm font-bold text-[#1B2A5B] hover:bg-[#f3b91d]"
            >
              Learn More About Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="relative grid grid-cols-2 gap-5">
            <div className="relative overflow-hidden rounded-[2rem] aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=700&q=80"
                alt="Advisor portrait"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="space-y-5">
              <div className="rounded-full bg-[#1B2A5B] text-white p-8 text-center shadow-xl aspect-square flex flex-col items-center justify-center">
                <div className="text-xs uppercase tracking-[0.25em] font-semibold opacity-80">Build A Success</div>
                <div className="text-xs uppercase tracking-[0.25em] font-semibold opacity-80">Brand With Us</div>
                <ArrowRight className="mt-3 h-8 w-8 text-[#FFC531]" />
              </div>
              <div className="relative overflow-hidden rounded-[2rem] aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
                  alt="Business meeting"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#F5F1E8]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-600">
              Our Services
            </div>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#1B2A5B] sm:text-4xl">
              Complete Annuity Solutions Tailored For You
            </h2>
            <p className="mt-4 text-slate-600">Explore our range of financial products designed to help you retire comfortably.</p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service) => (
              <Link
                key={service.title}
                href="/listings"
                className="group rounded-3xl bg-white p-7 shadow-sm hover:shadow-xl transition-all border border-slate-100 hover:-translate-y-1"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFC531]/20 group-hover:bg-[#FFC531] transition-colors">
                  <service.icon className="h-7 w-7 text-[#1B2A5B]" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-[#1B2A5B]">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#1B2A5B] group-hover:gap-2.5 transition-all">
                  Learn More <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED LISTINGS */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-slate-200 pb-6">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-widest text-slate-500">Featured Listings</div>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#1B2A5B] sm:text-4xl">
              Verified Businesses You Can Trust
            </h2>
          </div>
          <Link
            href="/listings"
            className="inline-flex items-center gap-2 rounded-full bg-[#FFC531] px-5 py-2.5 text-sm font-bold text-[#1B2A5B] hover:bg-[#f3b91d]"
          >
            View all listings
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {listingPosts.length ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {listingPosts.map((post) => (
              <TaskPostCard key={post.id} post={post} href={`/listings/${post.slug}`} taskKey="listing" />
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center text-slate-600">
            Listings will appear here as soon as they are available.
          </div>
        )}
      </section>

      {/* FAQ + TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="rounded-3xl bg-[#1B2A5B] p-8 text-white">
              <div className="text-[11px] font-semibold uppercase tracking-widest text-[#FFC531]">Still Have Questions? We Are Here To Help</div>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#FFC531] px-5 py-2.5 text-sm font-bold text-[#1B2A5B]">
                  Contact Us
                </Link>
                <a href={`tel:2343454574`} className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white">
                  <Phone className="h-4 w-4" />
                  (234) 345-4574
                </a>
              </div>
            </div>
            <div className="mt-5 space-y-3">
              {FAQS.map((faq, i) => (
                <details
                  key={i}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 transition-all open:shadow-md"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-sm font-bold text-[#1B2A5B] list-none">
                    {faq.q}
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FFC531] text-[#1B2A5B] transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-sm leading-6 text-slate-600">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>

          <div>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-600">
                Testimonials
              </div>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#1B2A5B] sm:text-4xl">
                What Our Customers Say
              </h2>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {TESTIMONIALS.slice(0, 6).map((t, i) => (
                <div
                  key={i}
                  className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-sm ${i % 3 === 0 ? 'sm:mt-6' : ''}`}
                >
                  <StarRow count={t.rating} />
                  <p className="mt-3 text-sm leading-6 text-slate-700 line-clamp-5">&ldquo;{t.text}&rdquo;</p>
                  <div className="mt-4 flex items-center gap-3 border-t border-slate-100 pt-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FFC531]/20 text-sm font-bold text-[#1B2A5B]">
                      {t.name.charAt(0)}
                    </div>
                    <div className="text-sm font-semibold text-[#1B2A5B]">{t.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#1B2A5B] via-[#26366E] to-[#1B2A5B] p-10 sm:p-14">
          <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-[#FFC531]/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
          <div className="relative z-10 flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                Need Fast Annuity Advice? We&apos;re Ready 24/7!
              </h2>
              <p className="mt-4 text-slate-300">
                Don&apos;t let retirement worries keep you up at night. Our expert advisors are available
                day and night to give you clear answers and trusted guidance.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#FFC531] px-6 py-3.5 text-sm font-bold text-[#1B2A5B] hover:bg-[#f3b91d]"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </Link>
              <a
                href={`tel:9079550101`}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur hover:bg-white/10"
              >
                (907) 555-0101
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
