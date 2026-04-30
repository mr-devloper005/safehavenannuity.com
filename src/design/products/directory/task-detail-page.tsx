import Link from "next/link";
import {
  Camera,
  Globe,
  Info,
  ListChecks,
  Mail,
  MapPin,
  Phone,
  User,
} from "lucide-react";
import { ContentImage } from "@/components/shared/content-image";
import { SchemaJsonLd } from "@/components/seo/schema-jsonld";
import { TaskPostCard } from "@/components/shared/task-post-card";
import { RichContent, formatRichHtml } from "@/components/shared/rich-content";
import { TaskPhotoGridLightbox } from "@/components/tasks/task-photo-grid-lightbox";
import type { SitePost } from "@/lib/site-connector";
import type { TaskKey } from "@/lib/site-config";

export function DirectoryTaskDetailPage({
  task,
  taskLabel,
  taskRoute,
  post,
  description,
  category,
  images,
  mapEmbedUrl,
  related,
}: {
  task: TaskKey;
  taskLabel: string;
  taskRoute: string;
  post: SitePost;
  description: string;
  category: string;
  images: string[];
  mapEmbedUrl: string | null;
  related: SitePost[];
}) {
  const content = post.content && typeof post.content === "object" ? (post.content as Record<string, unknown>) : {};
  const location =
    typeof content.address === "string" ? content.address : typeof content.location === "string" ? content.location : "";
  const website = typeof content.website === "string" ? content.website : "";
  const phone = typeof content.phone === "string" ? content.phone : "";
  const email = typeof content.email === "string" ? content.email : "";
  const highlights = Array.isArray(content.highlights)
    ? content.highlights.filter((item): item is string => typeof item === "string")
    : [];
  const descriptionHtml = formatRichHtml(description, "Details coming soon.");
  const schemaPayload = {
    "@context": "https://schema.org",
    "@type": task === "profile" ? "Organization" : "LocalBusiness",
    name: post.title,
    description,
    image: images[0],
    url: `${taskRoute}/${post.slug}`,
    address: location || undefined,
    telephone: phone || undefined,
    email: email || undefined,
  };

  return (
    <div className="min-h-screen bg-[#f3f4f6] text-slate-900">
      <SchemaJsonLd data={schemaPayload} />
      <main className="mx-auto max-w-7xl px-4 pb-14 pt-8 sm:px-6 lg:px-8">
        <Link href={taskRoute} className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-950">
          {"<-"} Back to {taskLabel}
        </Link>

        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="relative bg-gradient-to-r from-[#14202a] via-[#1b2b3a] to-[#1f3242] px-6 pb-10 pt-8 text-white sm:px-9">
            <div className="absolute left-6 top-6 h-28 w-28 overflow-hidden rounded-full border-[6px] border-white bg-white shadow-lg sm:left-9 sm:h-36 sm:w-36">
              <ContentImage src={images[0]} alt={post.title} fill className="object-cover" />
            </div>
            <div className="flex flex-wrap items-start justify-between gap-4 pl-36 sm:pl-44">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-300">{category || taskLabel}</p>
                <h1 className="mt-2 text-3xl font-semibold leading-tight">{post.title}</h1>
                {location ? (
                  <p className="mt-2 inline-flex items-center gap-2 text-sm text-slate-200">
                    <MapPin className="h-4 w-4" />
                    {location}
                  </p>
                ) : null}
              </div>
            </div>
          </div>

          <div className="grid gap-0 md:grid-cols-[260px_1fr]">
            <aside className="border-r border-slate-200 bg-white">
              <a
                href="#about-me"
                className="flex items-center gap-3 border-b border-slate-200 bg-sky-50 px-5 py-4 text-slate-700 hover:bg-sky-100"
              >
                <User className="h-4 w-4 text-sky-600" />
                <span className="font-medium">About Me</span>
              </a>
              <a
                href="#my-listing"
                className="flex items-center gap-3 border-b border-slate-200 px-5 py-4 text-slate-600 hover:bg-slate-50"
              >
                <ListChecks className="h-4 w-4 text-sky-600" />
                <span>My Listing</span>
              </a>
              <a
                href="#photos"
                className="flex items-center gap-3 border-b border-slate-200 px-5 py-4 text-slate-600 hover:bg-slate-50"
              >
                <Camera className="h-4 w-4 text-sky-600" />
                <span>Photos</span>
              </a>
              <a
                href="#contact"
                className="flex items-center gap-3 px-5 py-4 text-slate-600 hover:bg-slate-50"
              >
                <Mail className="h-4 w-4 text-sky-600" />
                <span>Contact</span>
              </a>
            </aside>

            <div className="space-y-8 bg-white p-6 sm:p-8">
              <div id="about-me" className="grid scroll-mt-24 gap-8 lg:grid-cols-[1.35fr_0.9fr]">
                <div>
                  <h2 className="text-[2rem] font-semibold leading-none">About Me</h2>
                  <RichContent html={descriptionHtml} className="mt-6 text-[1.02rem] leading-8 text-slate-600" />
                  {highlights.length ? (
                    <>
                      <h3 className="mt-10 text-4xl font-semibold leading-none text-slate-900">Activities</h3>
                      <ul className="mt-5 space-y-2 text-slate-600">
                        {highlights.map((item) => (
                          <li key={item} className="inline-flex items-start gap-2">
                            <Info className="mt-1 h-4 w-4 shrink-0 text-sky-600" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <>
                      <h3 className="mt-10 text-4xl font-semibold leading-none text-slate-900">Activities</h3>
                      <p className="mt-5 text-slate-500">No Review Found</p>
                    </>
                  )}
                </div>

                <div id="contact" className="scroll-mt-24 space-y-5">
                  {phone ? (
                    <div>
                      <p className="text-sm text-slate-500">Phone</p>
                      <p className="mt-1 text-xl font-semibold text-slate-800">{phone}</p>
                    </div>
                  ) : null}
                  {location ? (
                    <div>
                      <p className="text-sm text-slate-500">Address</p>
                      <p className="mt-1 text-xl font-semibold leading-8 text-slate-800">{location}</p>
                    </div>
                  ) : null}
                  {website ? (
                    <a
                      href={website}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
                    >
                      <Globe className="h-4 w-4" />
                      Visit Website
                    </a>
                  ) : null}
                  {email ? (
                    <a href={`mailto:${email}`} className="block break-all text-sm text-sky-700 hover:underline">
                      {email}
                    </a>
                  ) : null}
                </div>
              </div>

              <div id="my-listing" className="scroll-mt-24">
                <h3 className="text-2xl font-semibold text-slate-900">My Listing</h3>
                <p className="mt-3 text-slate-600">
                  {category} listing profile with verified contact details and service overview.
                </p>
              </div>

              <div id="photos" className="scroll-mt-24">
                <h3 className="text-2xl font-semibold text-slate-900">Photos</h3>
                <TaskPhotoGridLightbox images={images} title={post.title} />
              </div>

              {mapEmbedUrl ? (
                <div className="overflow-hidden rounded-xl border border-slate-200">
                  <iframe
                    title={`${post.title} map`}
                    src={mapEmbedUrl}
                    className="h-64 w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              ) : null}
            </div>
          </div>
        </section>

        {related.length ? (
          <section className="mt-10">
            <div className="mb-5 flex items-center justify-between gap-3">
              <h2 className="text-xl font-semibold text-slate-900">More in {category}</h2>
              <Link href={taskRoute} className="text-sm font-medium text-slate-600 hover:text-slate-900">
                View all
              </Link>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {related.map((item) => (
                <TaskPostCard key={item.id} post={item} href={`${taskRoute}/${item.slug}`} taskKey={task} />
              ))}
            </div>
          </section>
        ) : null}
      </main>
    </div>
  );
}
