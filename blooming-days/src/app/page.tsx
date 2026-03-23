import { getFeaturedArrangements } from "@/lib/catalog";
import ArrangementCard from "@/components/ArrangementCard";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blooming Days | Fresh Floral Arrangements",
  description:
    "Handcrafted floral arrangements for every occasion. Order fresh bouquets and custom arrangements from Blooming Days.",
};

export default async function HomePage() {
  const featured = getFeaturedArrangements();

  return (
    <>
      {/* Hero Section */}
      <div className="@container bg-surface">
        <div className="flex flex-col gap-12 px-6 py-16 md:px-20 lg:px-40 @[864px]:flex-row @[864px]:items-center">
          {/* Hero Image with Editorial Offset */}
          <div className="w-full @[864px]:w-1/2 relative">
            <div className="aspect-[4/5] bg-surface-container-high rounded-lg overflow-hidden editorial-shadow relative z-10 md:translate-x-4 flex items-center justify-center">
              <span className="material-symbols-outlined text-[8rem] text-primary/20">
                local_florist
              </span>
            </div>
            <div className="absolute inset-0 bg-tertiary-fixed/30 rounded-lg md:-translate-x-4 md:translate-y-4 -z-0" />
          </div>

          {/* Hero Text */}
          <div className="flex flex-col gap-8 @[864px]:w-1/2">
            <div className="flex flex-col gap-4">
              <span className="text-primary font-label text-xs font-bold tracking-[0.15em] uppercase">
                Fresh Floral Arrangements
              </span>
              <h1 className="text-on-surface font-headline text-3xl font-black leading-[1.1] tracking-[-0.03em] md:text-5xl lg:text-6xl">
                Blooms That Speak From the Heart
              </h1>
              <p className="text-on-surface-variant text-lg font-normal leading-relaxed max-w-lg">
                Handcrafted floral arrangements for every occasion. We bring the beauty of fresh
                flowers to your celebrations, gifting, and everyday moments.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="flex min-w-[180px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 primary-gradient text-on-primary text-base font-bold tracking-wide"
              >
                Order Now
              </Link>
              <Link
                href="/catalog"
                className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 border border-outline-variant/30 text-on-surface text-base font-bold"
              >
                View Catalog
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Arrangements */}
      <section className="bg-surface-container-low py-20 px-6 md:px-20 lg:px-40">
        <div className="flex flex-col gap-2 mb-12">
          <span className="text-primary font-label text-xs font-bold tracking-[0.15em] uppercase">
            Featured
          </span>
          <h2 className="text-on-surface font-headline text-4xl font-bold tracking-tight">
            Our Arrangements
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.slice(0, 3).map((item, i) => (
            <ArrangementCard key={item.slug} {...item} offset={i === 1} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/catalog"
            className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
          >
            View All Arrangements{" "}
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </section>

      {/* Philosophy / Promise */}
      <section className="bg-surface py-24 px-6 md:px-20 lg:px-40 @container">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-4 max-w-2xl">
            <span className="text-primary font-label text-xs font-bold tracking-[0.15em] uppercase">
              Our Promise
            </span>
            <h2 className="text-on-surface font-headline text-4xl font-black leading-tight @[480px]:text-5xl">
              Every Bloom, Crafted with Care
            </h2>
            <p className="text-on-surface-variant text-lg font-normal leading-relaxed">
              We believe every flower tells a story. Whether it&apos;s a wedding bouquet, a birthday
              surprise, or a simple &quot;thinking of you&quot; — our mission is to create
              arrangements that touch hearts.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-6 p-10 rounded-xl bg-surface-container border-b-2 border-primary/20 editorial-shadow">
              <div className="text-primary">
                <span className="material-symbols-outlined text-4xl">energy_savings_leaf</span>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-on-surface font-headline text-2xl font-bold">Always Fresh</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  We source only the freshest blooms from trusted local and seasonal growers,
                  ensuring every arrangement is vibrant and long-lasting.
                </p>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-primary font-label text-[10px] uppercase font-bold tracking-widest">
                  Locally Sourced
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-6 p-10 rounded-xl bg-surface-container border-b-2 border-primary/20 editorial-shadow">
              <div className="text-primary">
                <span className="material-symbols-outlined text-4xl">auto_awesome</span>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-on-surface font-headline text-2xl font-bold">
                  Artisan Craft
                </h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Each arrangement is hand-designed with an eye for color, texture, and balance. No
                  two bouquets are exactly alike — that&apos;s the beauty of handmade.
                </p>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-primary font-label text-[10px] uppercase font-bold tracking-widest">
                  Handmade
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-surface-container-high py-20 px-6 md:px-20 lg:px-40">
        <div className="max-w-2xl">
          <div className="flex flex-col gap-2 mb-8">
            <span className="text-primary font-label text-xs font-bold tracking-[0.15em] uppercase">
              Custom Orders
            </span>
            <h2 className="text-on-surface font-headline text-4xl font-bold tracking-tight">
              Have Something Special in Mind?
            </h2>
          </div>
          <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
            Tell us the occasion, your favorite flowers, and your budget — we&apos;ll create
            something beautiful just for you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 primary-gradient text-on-primary font-bold px-8 py-4 rounded-xl editorial-shadow hover:opacity-90 transition-opacity"
          >
            Start a Custom Order{" "}
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </section>
    </>
  );
}
