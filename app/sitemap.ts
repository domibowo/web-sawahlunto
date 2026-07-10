import type { MetadataRoute } from "next";
import { sejarahData } from "@/data/sejarah";
import { wisataData } from "@/data/wisata";

export const dynamic = "force-static";

const BASE = "https://sawahlunto.id";
const LOCALES = ["id", "en"] as const;

function url(path: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly") {
  return { url: `${BASE}${path}`, lastModified: new Date(), changeFrequency, priority };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = LOCALES.flatMap((locale) => [
    url(`/${locale}`, 1.0, "weekly"),
    url(`/${locale}/sejarah`, 0.9),
    url(`/${locale}/budaya`, 0.8),
    url(`/${locale}/kuliner`, 0.8),
    url(`/${locale}/wisata`, 0.9),
    url(`/${locale}/inovasi`, 0.7),
    url(`/${locale}/peta`, 0.8),
  ]);

  const sejarahPages = LOCALES.flatMap((locale) =>
    sejarahData.map((item) => url(`/${locale}/sejarah/${item.slug}`, 0.7))
  );

  const wisataPages = LOCALES.flatMap((locale) =>
    wisataData.map((item) => url(`/${locale}/wisata/${item.slug}`, 0.8))
  );

  return [...staticPages, ...sejarahPages, ...wisataPages];
}
