import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { formatBlogDate, getAllBlogs, getFeaturedBlog } from "@/lib/blogs";

export const metadata: Metadata = {
  title: "Admission Blog | Course and College Guidance",
  description:
    "Read admission counselling guides on course selection, university comparison, scholarships, documents, and college decisions in Dehradun and Uttarakhand.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const blogs = getAllBlogs();
  const featuredBlog = getFeaturedBlog();
  const remainingBlogs = blogs.filter((blog) => blog.slug !== featuredBlog.slug);

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="container-x py-10 md:py-14">
          <Link
            href="/"
            className="text-sm font-semibold text-[color:var(--muted)] hover:text-[color:var(--forest-deep)]"
          >
            Back to home
          </Link>

          <div className="mt-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Admissiondesk Blog</p>
              <h1 className="mt-4 font-display text-4xl leading-tight text-[color:var(--forest-deep)] md:text-6xl">
                Admission guides for students and parents
              </h1>
            </div>
            <p className="max-w-xl leading-7 text-[color:var(--ink-soft)]">
              Practical articles on course selection, university comparison,
              documents, fees, scholarships, and campus fit.
            </p>
          </div>

          <Link
            href={`/blog/${featuredBlog.slug}`}
            className="group mt-10 grid gap-0 overflow-hidden rounded-lg border border-[color:var(--rule-soft)] bg-[color:var(--cream)] shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-float)] lg:grid-cols-[0.85fr_1.15fr]"
          >
            <div className="bg-[color:var(--parchment)] p-6 md:p-8">
              <div className="flex h-full flex-col justify-between gap-10">
                <div>
                  <span className="tag border-[color:var(--gold)] bg-white/70 text-[color:var(--gold-deep)]">
                    Featured
                  </span>
                  <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
                    {featuredBlog.category}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm text-[color:var(--ink-soft)]">
                  <div>
                    <p className="font-semibold text-[color:var(--forest-deep)]">
                      Published
                    </p>
                    <p className="mt-1">{formatBlogDate(featuredBlog.date)}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-[color:var(--forest-deep)]">
                      Reading time
                    </p>
                    <p className="mt-1">{featuredBlog.readTime}</p>
                  </div>
                </div>
              </div>
            </div>
            <article className="p-6 md:p-8">
              <h2 className="font-display text-3xl leading-tight text-[color:var(--forest-deep)] md:text-5xl">
                {featuredBlog.title}
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[color:var(--ink-soft)]">
                {featuredBlog.excerpt}
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {featuredBlog.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-8 inline-flex items-center gap-2 font-semibold text-[color:var(--forest)]">
                Read full article
                <span className="transition group-hover:translate-x-1" aria-hidden>
                  -&gt;
                </span>
              </p>
            </article>
          </Link>
        </section>

        <section className="section-light py-14 md:py-20">
          <div className="container-x">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="eyebrow">Latest Articles</p>
                <h2 className="mt-4 font-display text-4xl text-[color:var(--forest-deep)] md:text-5xl">
                  More admission guides
                </h2>
              </div>
              <p className="max-w-xl leading-7 text-[color:var(--ink-soft)]">
                Short, useful reads written for real admission conversations,
                not confusing jargon.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {remainingBlogs.map((blog) => (
                <Link
                  key={blog.slug}
                  href={`/blog/${blog.slug}`}
                  className="group flex min-h-[330px] flex-col rounded-lg border border-[color:var(--rule-soft)] bg-[color:var(--cream)] p-6 shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-float)]"
                >
                  <div className="flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--muted)]">
                    <span>{blog.category}</span>
                    <span>{blog.readTime}</span>
                  </div>
                  <h3 className="mt-6 font-display text-3xl leading-tight text-[color:var(--forest-deep)]">
                    {blog.title}
                  </h3>
                  <p className="mt-4 flex-1 leading-7 text-[color:var(--ink-soft)]">
                    {blog.excerpt}
                  </p>
                  <div className="mt-6 flex items-center justify-between gap-4 border-t border-[color:var(--rule-soft)] pt-5 text-sm">
                    <span className="text-[color:var(--muted)]">
                      {formatBlogDate(blog.date)}
                    </span>
                    <span className="font-semibold text-[color:var(--forest)] transition group-hover:translate-x-1">
                      Read -&gt;
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
