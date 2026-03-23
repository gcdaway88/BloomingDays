import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story | Blooming Days",
  description:
    "Learn about Blooming Days — our passion for fresh flowers, our founder, and our promise to craft arrangements that speak from the heart.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero: Our Story */}
      <section className="relative min-h-[600px] flex items-center px-6 md:px-12 lg:px-40 py-20 overflow-hidden bg-surface">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <span className="uppercase tracking-[0.2em] text-sm text-primary font-bold font-label">
              Our Story
            </span>
            <h1 className="text-5xl md:text-7xl leading-tight text-on-surface font-headline">
              Blooming Days,{" "}
              <span className="italic font-normal">Every Day</span>
            </h1>
            <p className="text-lg leading-relaxed text-on-surface-variant max-w-xl font-body">
              Blooming Days was born from a simple belief: flowers make life more beautiful. Founded
              in our sun-drenched studio, we set out to create floral arrangements that don&apos;t
              just look stunning — they feel personal, intentional, and full of life.
            </p>
            <p className="text-lg leading-relaxed text-on-surface-variant max-w-xl font-body">
              What started as a passion for gifting has grown into a full-service floral studio,
              where each bouquet is thoughtfully crafted to suit the moment, the person, and the
              feeling you want to convey.
            </p>
          </div>
          <div className="order-1 lg:order-2 relative h-[400px] md:h-[600px]">
            <div className="absolute inset-0 bg-surface-container-high rounded-lg overflow-hidden border border-outline-variant/30 rotate-2 flex items-center justify-center">
              <span className="material-symbols-outlined text-[10rem] text-primary/20">
                local_florist
              </span>
            </div>
            <div className="absolute -bottom-8 -left-8 w-1/2 h-1/2 bg-surface border border-outline-variant/30 rounded-lg overflow-hidden shadow-xl -rotate-3 p-2 flex items-center justify-center">
              <span className="material-symbols-outlined text-[4rem] text-primary/20">
                yard
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy: Bento Grid */}
      <section className="bg-surface-container-low py-24 px-6 md:px-12 lg:px-40">
        <div className="container mx-auto">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl mb-6 font-headline text-on-surface">
              The Philosophy
            </h2>
            <div className="w-20 h-px bg-primary mx-auto mb-6" />
            <p className="font-body text-on-surface-variant">
              Guided by freshness, artistry, and care, every arrangement we create reflects our
              commitment to bringing nature&apos;s beauty into your life.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[280px]">
            {/* Large Card */}
            <div className="md:col-span-8 md:row-span-2 bg-surface-container-highest p-10 flex flex-col justify-end relative overflow-hidden group rounded-xl">
              <div className="absolute top-10 right-10 text-primary/10 scale-[4] transition-transform group-hover:scale-[4.2]">
                <span className="material-symbols-outlined text-8xl">spa</span>
              </div>
              <div className="relative z-10 space-y-4">
                <h3 className="text-3xl font-headline text-on-surface">
                  The Art of Fresh Flowers
                </h3>
                <p className="font-body text-on-surface-variant max-w-lg">
                  We believe the best arrangements start with the best blooms. That means sourcing
                  locally when possible, working with seasonal varieties, and handling every stem
                  with care — from our studio to your hands.
                </p>
              </div>
            </div>
            {/* Small Card 1 */}
            <div className="md:col-span-4 bg-tertiary-container text-on-tertiary-container p-10 flex flex-col justify-between rounded-xl">
              <span className="material-symbols-outlined text-4xl">history_edu</span>
              <div>
                <h3 className="text-xl mb-2 font-headline">Long-Lasting Beauty</h3>
                <p className="font-body text-sm opacity-90">
                  Every arrangement is designed to stay fresh and vibrant for as long as possible.
                </p>
              </div>
            </div>
            {/* Small Card 2 */}
            <div className="md:col-span-4 bg-primary-container text-on-primary-container p-10 flex flex-col justify-between rounded-xl">
              <span className="material-symbols-outlined text-4xl">eco</span>
              <div>
                <h3 className="text-xl mb-2 font-headline">Ethical Sourcing</h3>
                <p className="font-body text-sm opacity-90">
                  Only fresh, responsibly grown flowers and foliage make it into our arrangements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="py-24 px-6 md:px-12 lg:px-40 bg-surface">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="aspect-[4/5] bg-surface-container-high relative rounded-xl overflow-hidden editorial-shadow flex items-center justify-center">
            <span className="material-symbols-outlined text-[8rem] text-primary/20">person</span>
            <div className="absolute inset-0 border-[1.5rem] border-surface m-6 border-opacity-50 pointer-events-none" />
          </div>
          <div className="space-y-6">
            <span className="text-primary font-bold tracking-widest text-sm uppercase font-label">
              The Founder
            </span>
            <h2 className="text-4xl font-headline text-on-surface">Maria Santos</h2>
            <div className="space-y-4 font-body text-on-surface-variant leading-relaxed">
              <p>
                With over a decade of experience in floral design and a deep love for locally grown
                flowers, Maria founded Blooming Days to share the joy that a beautiful arrangement
                brings. Her work is guided by the belief that flowers are the simplest, most
                powerful way to express what words sometimes can&apos;t.
              </p>
              <p>
                <em>
                  &quot;Every bouquet I make is a little piece of my heart. I want the person who
                  receives it to feel that — to know that someone chose those flowers just for
                  them.&quot;
                </em>
              </p>
            </div>
            <div className="pt-6 flex gap-4">
              <div className="p-3 bg-surface-container rounded-full hover:bg-primary/10 cursor-pointer transition-colors">
                <span className="material-symbols-outlined text-primary">camera_indoor</span>
              </div>
              <div className="p-3 bg-surface-container rounded-full hover:bg-primary/10 cursor-pointer transition-colors">
                <span className="material-symbols-outlined text-primary">local_florist</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12 lg:px-40 bg-primary text-on-primary">
        <div className="container mx-auto max-w-4xl text-center space-y-12">
          <h2 className="text-4xl md:text-6xl font-headline italic">
            Ready to make someone&apos;s day?
          </h2>
          <p className="text-xl opacity-90 font-body max-w-2xl mx-auto">
            Whether it&apos;s a birthday, anniversary, wedding, or just because — we&apos;re here
            to help you find the perfect arrangement.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
            <Link
              href="/catalog"
              className="border border-on-primary/30 p-10 hover:bg-on-primary hover:text-primary transition-all duration-500 cursor-pointer group text-left rounded-xl"
            >
              <h3 className="text-2xl mb-4 flex justify-between items-center font-headline">
                Browse Catalog
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
                  arrow_forward
                </span>
              </h3>
              <p className="font-body text-sm opacity-80 group-hover:opacity-100">
                Explore our full collection of ready-made and seasonal arrangements.
              </p>
            </Link>
            <Link
              href="/contact"
              className="border border-on-primary/30 p-10 hover:bg-on-primary hover:text-primary transition-all duration-500 cursor-pointer group text-left rounded-xl"
            >
              <h3 className="text-2xl mb-4 flex justify-between items-center font-headline">
                Custom Order
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
                  alternate_email
                </span>
              </h3>
              <p className="font-body text-sm opacity-80 group-hover:opacity-100">
                Tell us what you have in mind — we&apos;ll make it happen.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
