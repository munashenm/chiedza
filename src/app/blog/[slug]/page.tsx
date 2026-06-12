import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { blogPosts } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";
import { formatDate } from "@/lib/utils";
import { ArrowLeft, Clock } from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <>
      <PageHero
        title={post.title}
        subtitle={post.excerpt}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.category },
        ]}
        compact
      />

      <article className="section-padding bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 text-sm text-navy-500 mb-8 pb-8 border-b border-navy-900/10">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
            <span className="text-xs font-semibold tracking-wider uppercase bg-gold-100 text-gold-500 px-3 py-1 rounded-sm">
              {post.category}
            </span>
          </div>

          <div className="prose prose-navy max-w-none space-y-6 text-navy-600 leading-relaxed">
            <p>{post.excerpt}</p>
            <p>
              Immigration law is constantly evolving, and staying informed is
              essential for anyone navigating visa applications, residency
              processes, or appeals. At CIRC, we monitor policy changes across
              South Africa, the United Kingdom, Canada, and Australia to ensure
              our clients receive the most current and accurate guidance.
            </p>
            <p>
              This article provides an overview of key developments and practical
              considerations relevant to {post.category.toLowerCase()} immigration
              matters. For advice specific to your circumstances, we strongly
              recommend booking a consultation with our team.
            </p>
            <h2 className="font-serif text-2xl font-bold text-navy-900">
              Key Takeaways
            </h2>
            <ul className="space-y-2 list-disc pl-6">
              <li>Stay informed about policy changes that may affect your application</li>
              <li>Ensure all documentation meets current requirements before submission</li>
              <li>Seek professional guidance early to avoid costly delays or refusals</li>
              <li>Consider eligibility assessments before committing to a visa pathway</li>
            </ul>
            <p>
              For personalised advice on your immigration matter, contact CIRC to
              book a consultation with Dr Chiedza Simbo and our expert team.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-navy-900/10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gold-500 hover:text-gold-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Articles
            </Link>
          </div>
        </div>
      </article>

      <ConsultationCTA />
    </>
  );
}
