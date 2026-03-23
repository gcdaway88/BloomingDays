import { getAllArrangements } from "@/lib/catalog";
import ArrangementCard from "@/components/ArrangementCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Arrangements | Blooming Days",
  description:
    "Browse our full collection of handcrafted fresh floral arrangements for every occasion.",
};

export default function CatalogPage() {
  const arrangements = getAllArrangements();

  return (
    <div className="bg-surface min-h-screen">
      <div className="px-6 py-16 md:px-20 lg:px-40">
        <div className="flex flex-col gap-2 mb-12">
          <span className="text-primary font-label text-xs font-bold tracking-[0.15em] uppercase">
            Our Collection
          </span>
          <h1 className="text-on-surface font-headline text-4xl font-bold tracking-tight">
            All Arrangements
          </h1>
          <p className="text-on-surface-variant text-lg max-w-xl mt-2">
            Handcrafted with fresh blooms for every occasion. Browse our full collection below.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {arrangements.map((item, i) => (
            <ArrangementCard key={item.slug} {...item} offset={i % 3 === 1} />
          ))}
        </div>
      </div>
    </div>
  );
}
