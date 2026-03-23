import Link from "next/link";
import Image from "next/image";

interface ArrangementCardProps {
  slug: string;
  name: string;
  price: string;
  description: string;
  image: string;
  category: string;
  offset?: boolean;
}

export default function ArrangementCard({
  slug,
  name,
  price,
  description,
  image,
  offset = false,
}: ArrangementCardProps) {
  return (
    <Link
      href={`/catalog/${slug}`}
      className={`group cursor-pointer block${offset ? " translate-y-8" : ""}`}
    >
      <div className="aspect-[3/4] rounded-xl overflow-hidden mb-4 editorial-shadow relative bg-surface-container-high">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-primary/20">
            <span className="material-symbols-outlined text-[6rem]">local_florist</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-on-surface/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
          <span className="text-white text-sm font-bold flex items-center gap-2">
            View Details{" "}
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </span>
        </div>
      </div>
      <h3 className="text-on-surface font-headline text-xl font-bold mb-1">{name}</h3>
      <p className="text-on-surface-variant text-sm mb-1">{description}</p>
      <p className="text-primary font-label text-sm font-bold">{price}</p>
    </Link>
  );
}
