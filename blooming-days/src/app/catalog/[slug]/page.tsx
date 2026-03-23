import { getArrangementBySlug, getAllArrangements } from "@/lib/catalog";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const arrangements = getAllArrangements();
  return arrangements.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getArrangementBySlug(slug);
  if (!item) return {};
  return {
    title: `${item.name} | Blooming Days`,
    description: item.description,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getArrangementBySlug(slug);
  if (!item) notFound();

  return (
    <div className="bg-surface min-h-screen">
      <div className="px-6 py-16 md:px-20 lg:px-40">
        <Link
          href="/catalog"
          className="inline-flex items-center gap-1 text-primary text-sm font-bold mb-8 hover:gap-2 transition-all"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span> Back to Catalog
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Image */}
          <div className="aspect-[4/5] rounded-xl overflow-hidden editorial-shadow bg-surface-container-high relative flex items-center justify-center">
            {item.image ? (
              <Image src={item.image} alt={item.name} fill className="object-cover" />
            ) : (
              <span className="material-symbols-outlined text-[8rem] text-primary/20">
                local_florist
              </span>
            )}
          </div>

          {/* Details */}
          <div className="flex flex-col gap-6">
            <div>
              <span className="text-primary font-label text-xs font-bold tracking-[0.15em] uppercase">
                {item.category}
              </span>
              <h1 className="text-on-surface font-headline text-4xl font-bold mt-2">{item.name}</h1>
              <p className="text-2xl font-bold text-primary mt-3">{item.price}</p>
            </div>

            <p className="text-on-surface-variant leading-relaxed text-lg">{item.description}</p>

            {item.content.trim() && (
              <p className="text-on-surface-variant leading-relaxed whitespace-pre-wrap">
                {item.content.trim()}
              </p>
            )}

            <Link
              href={`/contact?arrangement=${encodeURIComponent(item.name)}`}
              className="flex items-center justify-center gap-2 primary-gradient text-on-primary font-bold px-8 py-4 rounded-xl editorial-shadow hover:opacity-90 transition-opacity mt-4"
            >
              Inquire About This Arrangement{" "}
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>

            <p className="text-on-surface-variant text-sm">
              Payment via GCash or bank transfer after confirmation. Delivery arrangements
              discussed upon inquiry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
