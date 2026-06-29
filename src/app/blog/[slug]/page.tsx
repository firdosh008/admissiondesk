import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import {
  formatBlogDate,
  getAllBlogs,
  getBlogBySlug,
} from "@/lib/blogs";

type BlogDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllBlogs().map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: blog.title,
    description: blog.excerpt,
    alternates: { canonical: `/blog/${blog.slug}` },
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = getAllBlogs()
    .filter((item) => item.slug !== blog.slug)
    .slice(0, 3);

  return (
    <>
      <Header />
      <main className="flex-1">
        <article>
          <header className="bg-[color:var(--parchment)] border-b border-[color:var(--rule-soft)]">
            <div className="container-x py-14 md:py-20">
              <Link
                href="/blog"
                className="text-sm font-semibold text-[color:var(--muted)] hover:text-[color:var(--forest-deep)]"
              >
                Back to blog
              </Link>
              <div className="mt-10 max-w-4xl">
                <div className="flex flex-wrap items-center gap-3 text-sm text-[color:var(--muted)]">
                  <span className="tag bg-white/70">{blog.category}</span>
                  <span>{formatBlogDate(blog.date)}</span>
                  <span aria-hidden>•</span>
                  <span>{blog.readTime}</span>
                </div>
                <h1 className="mt-6 font-display text-5xl leading-tight text-[color:var(--forest-deep)] md:text-7xl">
                  {blog.title}
                </h1>
                <p className="mt-6 max-w-3xl text-xl leading-9 text-[color:var(--ink-soft)]">
                  {blog.excerpt}
                </p>
                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--gold-deep)]">
                  By {blog.author}
                </p>
              </div>
            </div>
          </header>

          <div className="container-x grid gap-10 py-12 md:py-16 lg:grid-cols-[minmax(0,1fr)_300px]">
            <div className="max-w-3xl">
              <p className="dropcap text-lg leading-8 text-[color:var(--ink-soft)]">
                {blog.intro}
              </p>

              <div className="mt-10 space-y-10">
                {blog.sections.map((section) => (
                  <section key={section.heading}>
                    <h2 className="font-display text-3xl leading-tight text-[color:var(--forest-deep)] md:text-4xl">
                      {section.heading}
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-[color:var(--ink-soft)]">
                      {section.body}
                    </p>
                  </section>
                ))}
              </div>

              <div className="mt-12 rounded-lg border border-[color:var(--rule-soft)] bg-[color:var(--cream)] p-7 shadow-[var(--shadow-card)]">
                <p className="eyebrow">Final Thought</p>
                <p className="mt-4 text-lg leading-8 text-[color:var(--ink-soft)]">
                  {blog.conclusion}
                </p>
              </div>
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-lg border border-[color:var(--rule-soft)] bg-[color:var(--cream)] p-6 shadow-[var(--shadow-card)]">
                <h2 className="font-display text-2xl text-[color:var(--forest-deep)]">
                  Article Details
                </h2>
                <dl className="mt-5 space-y-4 text-sm">
                  <div>
                    <dt className="font-semibold text-[color:var(--forest-deep)]">
                      Category
                    </dt>
                    <dd className="mt-1 text-[color:var(--ink-soft)]">
                      {blog.category}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-[color:var(--forest-deep)]">
                      Published
                    </dt>
                    <dd className="mt-1 text-[color:var(--ink-soft)]">
                      {formatBlogDate(blog.date)}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-[color:var(--forest-deep)]">
                      Tags
                    </dt>
                    <dd className="mt-2 flex flex-wrap gap-2">
                      {blog.tags.map((tag) => (
                        <span key={tag} className="tag">
                          {tag}
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>
                <Link href="/contact-us" className="btn-primary mt-7 w-full">
                  Talk to a counsellor
                </Link>
              </div>
            </aside>
          </div>
        </article>

        <section className="section-light py-12 md:py-16">
          <div className="container-x">
            <div className="flex items-end justify-between gap-5">
              <div>
                <p className="eyebrow">Keep Reading</p>
                <h2 className="mt-4 font-display text-4xl text-[color:var(--forest-deep)]">
                  Related guides
                </h2>
              </div>
              <Link
                href="/blog"
                className="hidden text-sm font-semibold text-[color:var(--forest)] hover:text-[color:var(--forest-deep)] md:inline"
              >
                View all articles
              </Link>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {relatedBlogs.map((relatedBlog) => (
                <Link
                  key={relatedBlog.slug}
                  href={`/blog/${relatedBlog.slug}`}
                  className="group rounded-lg border border-[color:var(--rule-soft)] bg-[color:var(--cream)] p-6 shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-float)]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--muted)]">
                    {relatedBlog.category}
                  </p>
                  <h3 className="mt-4 font-display text-2xl leading-tight text-[color:var(--forest-deep)]">
                    {relatedBlog.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-[color:var(--ink-soft)]">
                    {relatedBlog.excerpt}
                  </p>
                  <p className="mt-5 text-sm font-semibold text-[color:var(--forest)] transition group-hover:translate-x-1">
                    Read article -&gt;
                  </p>
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
