import InquiryForm from "@/components/InquiryForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Blooming Days",
  description:
    "Get in touch to order a custom floral arrangement or ask about our services.",
};

interface Props {
  searchParams: Promise<{ arrangement?: string }>;
}

export default async function ContactPage({ searchParams }: Props) {
  const { arrangement } = await searchParams;

  return (
    <div className="bg-surface min-h-screen">
      <div className="px-6 py-16 md:px-20 lg:px-40">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Info */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <span className="text-primary font-label text-xs font-bold tracking-[0.15em] uppercase">
                  Get in Touch
                </span>
                <h1 className="text-on-surface font-headline text-4xl font-bold tracking-tight">
                  Let&apos;s Create Something Beautiful
                </h1>
                <p className="text-on-surface-variant text-lg leading-relaxed mt-2">
                  Whether you need a custom bouquet, a wedding arrangement, or just want to say
                  hello — we&apos;d love to hear from you.
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4 p-6 rounded-xl bg-surface-container editorial-shadow">
                  <span className="material-symbols-outlined text-primary text-2xl">schedule</span>
                  <div>
                    <h3 className="font-headline font-bold text-on-surface">Response Time</h3>
                    <p className="text-on-surface-variant text-sm mt-1">
                      We typically reply within 24 hours on business days.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 rounded-xl bg-surface-container editorial-shadow">
                  <span className="material-symbols-outlined text-primary text-2xl">payments</span>
                  <div>
                    <h3 className="font-headline font-bold text-on-surface">Payment</h3>
                    <p className="text-on-surface-variant text-sm mt-1">
                      We accept GCash and bank transfer. Payment details sent upon order
                      confirmation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 rounded-xl bg-surface-container editorial-shadow">
                  <span className="material-symbols-outlined text-primary text-2xl">
                    local_shipping
                  </span>
                  <div>
                    <h3 className="font-headline font-bold text-on-surface">Delivery</h3>
                    <p className="text-on-surface-variant text-sm mt-1">
                      Same-day and next-day delivery available within the area. Delivery fee varies
                      by location.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-surface-container-low rounded-xl p-8 editorial-shadow">
              <h2 className="font-headline text-2xl font-bold text-on-surface mb-6">
                Send Us a Message
              </h2>
              <InquiryForm prefilledArrangement={arrangement ?? ""} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
