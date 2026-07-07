import type { Metadata } from "next";
import { getDictionary } from "@/dictionaries";
import { wisataData } from "@/data/wisata";
import HeroBanner from "@/components/HeroBanner";
import CTAButton from "@/components/CTAButton";
import SafeImage from "@/components/SafeImage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isId = locale === "id";
  return {
    title: isId ? "Destinasi Wisata" : "Tourist Destinations",
    description: isId
      ? "Terowongan tambang bawah tanah, museum bersejarah, danau bekas galian — destinasi wisata unik Kota Sawahlunto."
      : "Underground mining tunnels, historic museums, and a stunning former excavation lake — unique tourist destinations in Sawahlunto.",
    alternates: { canonical: `https://sawahlunto.id/${locale}/wisata` },
  };
}

export function generateStaticParams() {
  return [{ locale: "id" }, { locale: "en" }];
}

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

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 flex flex-col gap-16 sm:gap-20">
        {wisataData.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <section
              key={item.slug}
              className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-12 items-center`}
            >
              {/* Gambar */}
              <div className="w-full md:w-2/5 shrink-0">
                <SafeImage
                  src={item.gambar.src}
                  alt={item.nama[lang]}
                  credit={item.gambar.credit}
                  className="w-full aspect-video"
                />
              </div>

              {/* Teks */}
              <div className="flex-1">
                {item.statusBadge && (
                  <span className="inline-block mb-3 px-2.5 py-1 rounded text-xs font-mono font-semibold uppercase tracking-wide bg-amber-100 text-amber-700 border border-amber-300">
                    ⚠ {item.statusBadge[lang]}
                  </span>
                )}
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-charcoal leading-snug mb-4">
                  {item.nama[lang]}
                </h2>
                <p className="text-charcoal-light text-base sm:text-lg leading-relaxed">
                  {item.ringkasan[lang]}
                </p>
                <div className="mt-6">
                  <CTAButton
                    href={`/${locale}/wisata/${item.slug}`}
                    label={w.jelajahi}
                    variant="primary"
                  />
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <div className="flex justify-center pb-16 sm:pb-20">
        <CTAButton
          href={`/${locale}/inovasi`}
          label={w.nextInovasi}
          variant="outline"
        />
      </div>
    </>
  );
}
