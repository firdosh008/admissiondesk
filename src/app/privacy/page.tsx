import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How admissiondesk collects, uses, and protects information you share with us.",
};

export default function PrivacyPage() {
  return (
    <main className="flex-1">
      <article className="container-x py-20 md:py-28 max-w-3xl">
        <Link
          href="/"
          className="text-sm text-[color:var(--muted)] hover:text-[color:var(--forest-deep)]"
        >
          ← Back to home
        </Link>
        <h1 className="mt-6 font-display text-5xl text-[color:var(--forest-deep)] leading-tight">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-[color:var(--muted)]">
          Last updated · {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="prose prose-stone mt-10 leading-[1.75] text-[color:var(--ink-soft)] space-y-5">
          <p>
            {SITE.name} (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;)
            respects your privacy. This page explains what we collect, why we
            collect it, and how we look after it.
          </p>

          <h2 className="font-display text-2xl text-[color:var(--forest-deep)] mt-10">
            What we collect
          </h2>
          <p>
            When you submit our counselling form we collect your name, phone
            number, programme of interest and preferred university. We also
            record the page you arrived from and basic device information for
            performance and fraud-prevention purposes.
          </p>

          <h2 className="font-display text-2xl text-[color:var(--forest-deep)] mt-10">
            How we use it
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To call or WhatsApp you about your counselling enquiry.</li>
            <li>
              To share your application materials with the partner university
              you select, with your knowledge.
            </li>
            <li>
              To improve our services through aggregated, non-identifying
              analytics.
            </li>
          </ul>

          <h2 className="font-display text-2xl text-[color:var(--forest-deep)] mt-10">
            Cookies and tracking
          </h2>
          <p>
            We use Google Analytics, Meta Pixel and Google Ads conversion
            tracking to measure the effectiveness of our marketing. These
            tools may set cookies on your device. You can opt out via your
            browser settings or industry-standard tools such as Google&apos;s
            Ads Settings.
          </p>

          <h2 className="font-display text-2xl text-[color:var(--forest-deep)] mt-10">
            Sharing
          </h2>
          <p>
            We do not sell your information. We share it only with: (a) the
            partner university you ask us to apply to, (b) our service
            providers under written confidentiality, and (c) authorities when
            required by law.
          </p>

          <h2 className="font-display text-2xl text-[color:var(--forest-deep)] mt-10">
            Your rights
          </h2>
          <p>
            You can ask us to correct, delete or stop using your information
            at any time by emailing{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="underline underline-offset-2 decoration-[color:var(--gold)]"
            >
              {SITE.email}
            </a>
            .
          </p>
        </div>
      </article>
    </main>
  );
}
