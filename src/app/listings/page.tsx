import Link from "next/link";
import { ArrowRight, Award, Building2, MapPin, Plus, Search, ShieldCheck, Sparkles, Star, TrendingUp } from "lucide-react";
import { NavbarShell } from "@/components/shared/navbar-shell";
import { Footer } from "@/components/shared/footer";
import { TaskPostCard } from "@/components/shared/task-post-card";
import { buildTaskMetadata } from "@/lib/seo";
import { taskPageMetadata } from "@/config/site.content";
import { fetchTaskPosts } from "@/lib/task-data";

export const revalidate = 3;

export const generateMetadata = () =>
  buildTaskMetadata("listing", {
    path: "/listings",
    title: taskPageMetadata.listing.title,
    description: taskPageMetadata.listing.description,
  });

const SERVICE_CATEGORIES = [
  { icon: Building2, label: "All Businesses" },
  { icon: TrendingUp, label: "Fixed Annuities" },
  { icon: ShieldCheck, label: "Variable Annuities" },
  { icon: Award, label: "Immediate Income" },
  { icon: Star, label: "Deferred Plans" },
];

const BENEFITS = [
  {
    icon: ShieldCheck,
    title: "Verified Providers",
    description: "Every business is background-checked and credentials are confirmed before listing.",
  },
  {
    icon: Star,
    title: "Real Customer Reviews",
    description: "Honest reviews from real customers help you choose with confidence.",
  },
  {
    icon: Sparkles,
    title: "Transparent Pricing",
    description: "Clear, upfront information so there are no surprises when you reach out.",
  },
];

export default async function ListingsPage() {
  const posts = await fetchTaskPosts("listing", 12, { allowMockFallback: false }).catch(() => []);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavbarShell />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#F5F1E8]">
        <div className="absolute inset-0 opacity-40 pointer-events-none" aria-hidden>
          <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-[#FFC531]/25 blur-3xl" />
          <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-[#1B2A5B]/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#1B2A5B]/15 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#1B2A5B]">
              <Building2 className="h-3.5 w-3.5" />
              Our Services
            </div>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-[#1B2A5B] sm:text-5xl lg:text-6xl">
              Browse Verified Annuity
              <br />
              Businesses Near You
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600">
              Explore licensed providers, compare services, and connect with the right partner for your
              retirement goals. Every listing is verified for your peace of mind.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/create/listing"
                className="inline-flex items-center gap-2 rounded-full bg-[#1B2A5B] px-5 py-3 text-sm font-bold text-white shadow-md hover:bg-[#142049]"
              >
                <Plus className="h-4 w-4" />
                Create listing
              </Link>
              <span className="text-sm text-slate-600">Add your business to the directory</span>
            </div>

            <form className="mt-8 flex max-w-2xl items-center gap-2 rounded-full bg-white p-2 shadow-xl border border-slate-100">
              <Search className="ml-4 h-5 w-5 text-slate-400" />
              <input
                type="search"
                placeholder="Search providers, services, or locations..."
                className="flex-1 bg-transparent px-2 py-3 text-sm outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-[#FFC531] px-6 py-3 text-sm font-bold text-[#1B2A5B] hover:bg-[#f3b91d]"
              >
                Search
              </button>
            </form>

            <div className="mt-6 flex flex-wrap gap-2">
              {SERVICE_CATEGORIES.map((c, i) => (
                <button
                  key={c.label}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                    i === 0
                      ? "bg-[#1B2A5B] text-white"
                      : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <c.icon className="h-3.5 w-3.5" />
                  {c.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-3">
          {BENEFITS.map((b) => (
            <div
              key={b.title}
              className="rounded-3xl bg-white p-7 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFC531]/20">
                <b.icon className="h-7 w-7 text-[#1B2A5B]" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-[#1B2A5B]">{b.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{b.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Listings grid */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-slate-200 pb-6">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-widest text-slate-500">All Services</div>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#1B2A5B] sm:text-4xl">
              Featured Business Listings
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/create/listing"
              className="inline-flex items-center gap-2 rounded-full bg-[#FFC531] px-5 py-2.5 text-sm font-bold text-[#1B2A5B] shadow-sm hover:bg-[#f3b91d]"
            >
              <Plus className="h-4 w-4" />
              Create
            </Link>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <MapPin className="h-4 w-4 text-[#FFC531]" />
              Nationwide directory
            </div>
          </div>
        </div>

        {posts.length ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <TaskPostCard key={post.id} post={post} href={`/listings/${post.slug}`} taskKey="listing" />
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-12 text-center">
            <Building2 className="mx-auto h-12 w-12 text-slate-400" />
            <h3 className="mt-4 text-lg font-bold text-[#1B2A5B]">No listings yet</h3>
            <p className="mx-auto mt-2 max-w-md text-sm text-slate-600">
              We&apos;re onboarding new verified providers every week. Check back soon or contact us to be notified.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#FFC531] px-5 py-2.5 text-sm font-bold text-[#1B2A5B] hover:bg-[#f3b91d]"
            >
              Get Notified
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#1B2A5B] via-[#26366E] to-[#1B2A5B] p-10 sm:p-14">
          <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-[#FFC531]/20 blur-3xl" />
          <div className="relative z-10 flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                Own A Financial Services Business?
              </h2>
              <p className="mt-4 text-slate-300">
                List with us and reach thousands of customers actively searching for verified annuity providers.
              </p>
            </div>
            <Link
              href="/create/listing"
              className="inline-flex items-center gap-2 rounded-full bg-[#FFC531] px-7 py-4 text-sm font-bold text-[#1B2A5B] hover:bg-[#f3b91d]"
            >
              Create listing
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
