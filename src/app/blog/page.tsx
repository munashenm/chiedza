import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { blogPosts } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";
import { formatDate } from "@/lib/utils";
import { ArrowRight, Clock } from "lucide-react";

export const metadata = createMetadata({
  title: "Blog & Immigration Updates",
  description:
    "Stay informed with the latest immigration news, policy updates, and expert insights from CIRC covering South Africa, UK, Canada, and Australia.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Immigration Updates"
        subtitle="Expert insights, policy updates, and practical guidance to help you navigate the ever-changing world of immigration law."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
        compact
      />

      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-sm border border-navy-900/5 overflow-hidden card-hover group"
              >
                <div className="h-48 bg-gradient-to-br from-navy-800 to-navy-900 relative">
                  <div className="absolute inset-0 pattern-overlay opacity-30" />
                  <span className="absolute top-4 left-4 text-[10px] font-semibold tracking-wider uppercase bg-gold-500 text-navy-900 px-3 py-1 rounded-sm">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-navy-500 mb-3">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="font-serif text-lg font-bold text-navy-900 mb-3 group-hover:text-gold-500 transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-sm text-navy-600 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-gold-500 hover:gap-3 transition-all"
                  >
                    Read Article <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
