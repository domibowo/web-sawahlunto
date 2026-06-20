import { notFound } from "next/navigation";
import { getDictionary } from "@/dictionaries";
import { sejarahData, getSejarahBySlug, getAdjacentSejarah } from "@/data/sejarah";
import HeroBanner from "@/components/HeroBanner";
import Breadcrumb from "@/components/Breadcrumb";
import PrevNextNav from "@/components/PrevNextNav";
import FootnoteText from "@/components/FootnoteText";
import ReferenceList from "@/components/ReferenceList";

export function generateStaticParams() {
  return ["id", "en"].flatMap((locale) =>
    sejarahData.map((item) => ({ locale, slug: item.slug }))
  );
}

export default async function SejarahDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const item = getSejarahBySlug(slug);
  if (!item) notFound();

  const dict = await getDictionary(locale);
  const { sejarah: s } = dict;
  const lang = locale as "id" | "en";

  const judul = item.judul[lang];
  const detail = item.detail[lang];
  const { prev, next } = getAdjacentSejarah(slug);

  return (
    <>
      {/* Breadcrumb bar */}
      <div className="bg-cream-dark border-b border-cream-dark/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3">
          <Breadcrumb
            items={[
              { label: dict.sejarah.backToHome, href: `/${locale}` },
              { label: dict.sejarah.breadcrumbSejarah, href: `/${locale}/sejarah` },
              { label: judul },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <HeroBanner
        size="sm"
        badge={item.tahun}
        title={judul}
        imageSrc={item.gambar || undefined}
        imageAlt={judul}
      />

      {/* Artikel */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <p className="text-charcoal text-base sm:text-lg leading-relaxed sm:leading-loose">
          <FootnoteText text={detail} scope={slug} />
        </p>
        <ReferenceList items={item.referensi} scope={slug} />
      </article>

      {/* Prev / Next */}
      <PrevNextNav
        prev={prev ? { href: `/${locale}/sejarah/${prev.slug}`, label: prev.judul[lang] } : null}
        next={next ? { href: `/${locale}/sejarah/${next.slug}`, label: next.judul[lang] } : null}
        prevLabel={s.prevEvent}
        nextLabel={s.nextEvent}
      />
    </>
  );
}
