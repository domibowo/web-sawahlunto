import { getDictionary } from "@/dictionaries";
import { budayaData, budayaReferensi } from "@/data/budaya";
import HeroBanner from "@/components/HeroBanner";
import CTAButton from "@/components/CTAButton";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import FootnoteText from "@/components/FootnoteText";
import ReferenceList from "@/components/ReferenceList";

export function generateStaticParams() {
  return [{ locale: "id" }, { locale: "en" }];
}

export default async function BudayaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const { budaya: b } = dict;
  const lang = locale as "id" | "en";

  return (
    <>
      <HeroBanner size="sm" title={b.heroTitle} subtitle={b.intro} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 flex flex-col gap-16 sm:gap-20">
        {budayaData.map((section, index) => {
          const isEven = index % 2 === 0;
          return (
            <section
              key={section.id}
              className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-12 items-center`}
            >
              {/* Gambar */}
              <div className="w-full md:w-2/5 shrink-0">
                {section.gambar ? (
                  <img
                    src={section.gambar}
                    alt={section.judul[lang]}
                    className="w-full aspect-video object-cover rounded-xl"
                  />
                ) : (
                  <ImagePlaceholder
                    className="w-full aspect-video rounded-xl"
                    alt={section.judul[lang]}
                  />
                )}
              </div>

              {/* Teks */}
              <div className="flex-1">
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-charcoal leading-snug mb-4">
                  {section.judul[lang]}
                </h2>
                <p className="text-charcoal-light text-base sm:text-lg leading-relaxed">
                  <FootnoteText text={section.isi[lang]} scope="budaya" />
                </p>
              </div>
            </section>
          );
        })}

        {/* Referensi — satu kali di bagian bawah */}
        <ReferenceList items={budayaReferensi} scope="budaya" />
      </div>

      {/* CTA */}
      <div className="flex justify-center pb-16 sm:pb-20">
        <CTAButton
          href={`/${locale}/kuliner`}
          label={b.nextKuliner}
          variant="outline"
        />
      </div>
    </>
  );
}
