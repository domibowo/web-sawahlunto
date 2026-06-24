import Link from "next/link";
import { getDictionary } from "@/dictionaries";
import { wisataData } from "@/data/wisata";
import HeroBanner from "@/components/HeroBanner";
import CTAButton from "@/components/CTAButton";
import SafeImage from "@/components/SafeImage";

export function generateStaticParams() {
  return [{ locale: "id" }, { locale: "en" }];
}

const cardColors = ["bg-terracotta", "bg-charcoal", "bg-teal"] as const;

export default async function WisataPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const { wisata: w } = dict;
  const lang = locale as "id" | "en";

  return (
    <>
      <HeroBanner size="sm" title={w.heroTitle} subtitle={w.intro} />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
          {wisataData.map((item, index) => {
            const color = cardColors[index % cardColors.length];
            return (
              <Link
                key={item.slug}
                href={`/${locale}/wisata/${item.slug}`}
                className="group block"
              >
                {/* Gambar */}
                <div className="w-full aspect-video overflow-hidden">
                  <SafeImage
                    src={item.gambar}
                    alt={item.nama[lang]}
                    className="w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Kartu blok warna datar */}
                <div className={`${color} p-5 min-h-[140px] flex flex-col justify-between`}>
                  <div>
                    <h2 className="font-serif text-lg font-semibold text-cream leading-snug mb-2">
                      {item.nama[lang]}
                    </h2>
                    <p className="text-cream/75 text-sm leading-relaxed line-clamp-3">
                      {item.ringkasan[lang]}
                    </p>
                  </div>
                  <span className="mt-4 inline-block font-mono text-[10px] uppercase tracking-[0.08em] text-cream/60">
                    Jelajahi →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-14 sm:mt-20 flex justify-center">
          <CTAButton
            href={`/${locale}/inovasi`}
            label={w.nextInovasi}
            variant="outline"
          />
        </div>
      </section>
    </>
  );
}
