import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary } from "@/dictionaries";
import { sejarahData } from "@/data/sejarah";
import HeroBanner from "@/components/HeroBanner";
import CTAButton from "@/components/CTAButton";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import Image from "next/image";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isId = locale === "id";
  return {
    title: isId ? "Sejarah" : "History",
    description: isId
      ? "Perjalanan panjang Sawahlunto — dari penemuan batu bara 1867 hingga pengakuan Warisan Dunia UNESCO 2019."
      : "Sawahlunto's long journey — from the 1867 coal discovery to UNESCO World Heritage recognition in 2019.",
    alternates: { canonical: `https://sawahlunto.id/${locale}/sejarah` },
  };
}

export function generateStaticParams() {
  return [{ locale: "id" }, { locale: "en" }];
}

export default async function SejarahPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const { sejarah: s } = dict;
  const lang = locale as "id" | "en";

  return (
    <>
      <HeroBanner
        size="sm"
        title={s.heroTitle}
        subtitle={s.intro}
        imageSrc="https://r2.kotague.id/Sawahlunto/2.webp"
      />

      {/* Timeline */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <ol className="flex flex-col gap-4">
          {sejarahData.map((item, index) => {
            const isLast = index === sejarahData.length - 1;
            const isEven = index % 2 === 0; // kiri = even, kanan = odd di desktop
            const judul = item.judul[lang];
            const ringkasan = item.ringkasan[lang];
            const image = item.gambar.src;

            return (
              <li key={item.slug} className="relative">

                {/* ── MOBILE: satu kolom, garis vertikal kiri ── */}
                <div className="md:hidden flex gap-4 pb-8">
                  {/* Garis + kicker tahun */}
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-11 flex items-center justify-center shrink-0 z-10 py-2">
                      <span className="font-mono text-[10px] uppercase tracking-[0.07em] text-terracotta font-semibold text-center leading-tight">{item.tahun}</span>
                    </div>
                    {!isLast && (
                      <div className="w-px flex-1 bg-cream-dark mt-1" />
                    )}
                  </div>

                  {/* Konten */}
                  <div className="pt-1">
                    <Link href={`/${locale}/sejarah/${item.slug}`}>
                      <h2 className="font-serif text-lg font-semibold text-charcoal hover:text-teal transition-colors leading-snug">
                        {judul}
                      </h2>
                    </Link>
                    <p className="text-charcoal-light text-sm mt-2 leading-relaxed">
                      {ringkasan}
                    </p>
                    <Link
                      href={`/${locale}/sejarah/${item.slug}`}
                      className="inline-flex items-center gap-1 mt-3 text-sm font-semibold text-teal hover:text-teal-dark transition-colors min-h-11"
                    >
                      {s.readMore} →
                    </Link>
                  </div>
                </div>

                {/* ── DESKTOP: dua kolom bergantian (gambar | teks atau teks | gambar) ── */}
                <div className="hidden md:grid md:grid-cols-[1fr_80px_1fr] md:gap-0 pb-10">

                  {/* Kolom kiri */}
                  <div className={`flex justify-end pr-8`}>
                    {isEven ? (
                      /* Even → teks di kiri */
                      <div className="max-w-xs text-right">
                        <Link href={`/${locale}/sejarah/${item.slug}`}>
                          <h2 className="font-serif text-xl font-semibold text-charcoal hover:text-teal transition-colors">
                            {judul}
                          </h2>
                        </Link>
                        <p className="text-charcoal-light text-sm mt-2 leading-relaxed">
                          {ringkasan}
                        </p>
                        <Link
                          href={`/${locale}/sejarah/${item.slug}`}
                          className="inline-block mt-3 text-sm font-semibold text-teal hover:text-teal-dark transition-colors"
                        >
                          {s.readMore} →
                        </Link>
                      </div>
                    ) : (
                      /* Odd → gambar di kiri */
                      <figure className="w-full max-w-xs">
                        <Link href={`/${locale}/sejarah/${item.slug}`} className="relative block w-full aspect-video overflow-hidden">
                          {item.gambar.src ?
                            <Image
                              src={item.gambar.src}
                              alt={item.judul[lang]}
                              fill
                              sizes="(max-width: 640px) 100vw, 320px"
                              className="object-cover transition-transform duration-500 ease-in-out hover:scale-125"
                              priority
                            />
                            :
                            <ImagePlaceholder
                              className="w-full aspect-video"
                              alt={judul}
                            />
                          }
                        </Link>
                        {item.gambar.credit && (
                          <figcaption className="mt-1 text-right text-xs text-charcoal/40 italic">
                            {item.gambar.credit}
                          </figcaption>
                        )}
                      </figure>
                    )}
                  </div>

                  {/* Tengah: garis + kicker tahun */}
                  <div className="flex flex-col items-center">
                    <div className="w-16 flex items-center justify-center z-10 shrink-0 py-2">
                      <span className="font-mono text-[10px] uppercase tracking-[0.07em] text-terracotta font-semibold text-center leading-tight">{item.tahun}</span>
                    </div>
                    {!isLast && (
                      <div className="w-px flex-1 bg-cream-dark mt-1" />
                    )}
                  </div>

                  {/* Kolom kanan */}
                  <div className={`flex justify-start pl-8`}>
                    {isEven ? (
                      /* Even → gambar di kanan */
                      <figure className="w-full max-w-xs">
                        <Link href={`/${locale}/sejarah/${item.slug}`} className="relative block w-full aspect-video overflow-hidden">
                          {item.gambar.src ?
                            <Image
                              src={item.gambar.src}
                              alt={item.judul[lang]}
                              fill
                              sizes="(max-width: 640px) 100vw, 320px"
                              className="object-cover transition-transform duration-500 ease-in-out hover:scale-125"
                              priority
                            />
                            :
                            <ImagePlaceholder
                              className="w-full aspect-video"
                              alt={judul}
                            />
                          }
                        </Link>
                        {item.gambar.credit && (
                          <figcaption className="mt-1 text-xs text-charcoal/40 italic">
                            {item.gambar.credit}
                          </figcaption>
                        )}
                      </figure>
                    ) : (
                      /* Odd → teks di kanan */
                      <div className="max-w-xs">
                        <Link href={`/${locale}/sejarah/${item.slug}`}>
                          <h2 className="font-serif text-xl font-semibold text-charcoal hover:text-teal transition-colors">
                            {judul}
                          </h2>
                        </Link>
                        <p className="text-charcoal-light text-sm mt-2 leading-relaxed">
                          {ringkasan}
                        </p>
                        <Link
                          href={`/${locale}/sejarah/${item.slug}`}
                          className="inline-block mt-3 text-sm font-semibold text-teal hover:text-teal-dark transition-colors"
                        >
                          {s.readMore} →
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ol>

        {/* CTA lanjut */}
        <div className="mt-10 sm:mt-14 flex justify-center">
          <CTAButton
            href={`/${locale}/budaya`}
            label={s.nextCulture}
            variant="outline"
          />
        </div>
      </section>
    </>
  );
}
