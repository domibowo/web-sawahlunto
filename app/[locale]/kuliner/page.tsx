import type { Metadata } from "next";
import { getDictionary } from "@/dictionaries";
import { kulinerData, kulinerReferensi } from "@/data/kuliner";
import HeroBanner from "@/components/HeroBanner";
import CTAButton from "@/components/CTAButton";
import SafeImage from "@/components/SafeImage";
import FootnoteText from "@/components/FootnoteText";
import ReferenceList from "@/components/ReferenceList";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isId = locale === "id";
  return {
    title: isId ? "Kuliner Khas" : "Local Cuisine",
    description: isId
      ? "Cita rasa autentik kota tambang — kuliner khas Sawahlunto yang diwariskan turun-temurun."
      : "Authentic flavors of a mining city — traditional Sawahlunto cuisine passed down through generations.",
    alternates: { canonical: `https://sawahlunto.id/${locale}/kuliner` },
  };
}

export function generateStaticParams() {
  return [{ locale: "id" }, { locale: "en" }];
}

export default async function KulinerPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const { kuliner: k } = dict;
  const lang = locale as "id" | "en";

  return (
    <>
      <HeroBanner size="sm" title={k.heroTitle} subtitle={k.intro} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 flex flex-col gap-16 sm:gap-20">
        {kulinerData.map((section, index) => {
          const isEven = index % 2 === 0;
          return (
            <section
              key={section.id}
              className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-12 items-center`}
            >
              {/* Gambar */}
              <div className="w-full md:w-2/5 shrink-0">
                <SafeImage
                  src={section.gambar.src}
                  alt={section.judul[lang]}
                  credit={section.gambar.credit}
                  className="w-full aspect-video"
                />
              </div>

              {/* Teks */}
              <div className="flex-1">
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-charcoal leading-snug mb-4">
                  {section.judul[lang]}
                </h2>
                <p className="text-charcoal-light text-base sm:text-lg leading-relaxed">
                  <FootnoteText text={section.isi[lang]} scope="kuliner" />
                </p>
              </div>
            </section>
          );
        })}

        <ReferenceList items={kulinerReferensi} scope="kuliner" />
      </div>

      <div className="flex justify-center pb-16 sm:pb-20">
        <CTAButton
          href={`/${locale}/wisata`}
          label={k.nextWisata}
          variant="outline"
        />
      </div>
    </>
  );
}
