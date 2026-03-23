import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-inverse-surface text-inverse-on-surface py-20 px-6 md:px-20 lg:px-40">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-outline/20 pb-16">
        {/* Brand */}
        <div className="col-span-1 lg:col-span-1 flex flex-col gap-6">
          <div className="flex items-center gap-3 text-white">
            <div className="size-6">
              <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z" />
              </svg>
            </div>
            <h2 className="font-headline text-lg font-bold">Blooming Days</h2>
          </div>
          <p className="text-surface-container-highest/60 text-sm leading-relaxed">
            Fresh, handcrafted floral arrangements for every occasion. Bringing nature&apos;s beauty to your doorstep.
          </p>
        </div>

        {/* Shop */}
        <div>
          <h5 className="font-label text-[10px] uppercase font-bold tracking-[0.2em] mb-6 text-primary-fixed">
            Shop
          </h5>
          <ul className="space-y-4 text-sm text-surface-container-highest/80">
            <li>
              <Link href="/catalog" className="hover:text-white transition-colors">
                All Arrangements
              </Link>
            </li>
            <li>
              <Link href="/catalog" className="hover:text-white transition-colors">
                Bouquets
              </Link>
            </li>
            <li>
              <Link href="/catalog" className="hover:text-white transition-colors">
                Centerpieces
              </Link>
            </li>
          </ul>
        </div>

        {/* Studio */}
        <div>
          <h5 className="font-label text-[10px] uppercase font-bold tracking-[0.2em] mb-6 text-primary-fixed">
            Studio
          </h5>
          <ul className="space-y-4 text-sm text-surface-container-highest/80">
            <li>
              <Link href="/about" className="hover:text-white transition-colors">
                Our Story
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition-colors">
                Custom Orders
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-6">
          <h5 className="font-label text-[10px] uppercase font-bold tracking-[0.2em] text-primary-fixed">
            Stay in Touch
          </h5>
          <p className="text-xs text-surface-container-highest/60">
            Seasonal arrangements and flower care tips, delivered to your inbox.
          </p>
          <div className="relative">
            <input
              className="w-full bg-surface-variant/10 border-b border-outline/30 py-2 focus:outline-none focus:border-primary transition-colors text-white text-sm bg-transparent"
              placeholder="email address"
              type="email"
            />
            <button className="absolute right-0 bottom-2 text-primary">
              <span className="material-symbols-outlined">trending_flat</span>
            </button>
          </div>
        </div>
      </div>

      <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-surface-container-highest/40 font-bold">
        <span>© 2026 Blooming Days</span>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white/60 transition-colors">
            Instagram
          </a>
          <a href="#" className="hover:text-white/60 transition-colors">
            Facebook
          </a>
          <Link href="/contact" className="hover:text-white/60 transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
