import type { Metadata } from "next";
import { Lora, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";
import { getDictionary } from "@/dictionaries";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const BASE_URL = "https://sawahlunto.id";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isId = locale === "id";

  const title = isId
    ? "Sawahlunto — Kota Warisan Dunia UNESCO"
    : "Sawahlunto — UNESCO World Heritage City";
  const description = isId
    ? "Situs resmi wisata Kota Sawahlunto — dari kota tambang menuju kota wisata digital. Warisan Dunia UNESCO sejak 2019."
    : "Official tourism site of Sawahlunto — from coal mining city to digital tourism destination. UNESCO World Heritage since 2019.";

  return {
    metadataBase: new URL(BASE_URL),
    title: {
      default: title,
      template: "%s | Sawahlunto",
    },
    description,
    openGraph: {
      siteName: "Sawahlunto",
      locale: isId ? "id_ID" : "en_US",
      alternateLocale: isId ? "en_US" : "id_ID",
      type: "website",
      url: `${BASE_URL}/${locale}`,
      title,
      description,
      images: [{ url: "/og-image.webp", width: 1200, height: 630, alt: "Sawahlunto" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.webp"],
    },
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: {
        "id": `${BASE_URL}/id`,
        "en": `${BASE_URL}/en`,
        "x-default": `${BASE_URL}/id`,
      },
    },
  };
}

export function generateStaticParams() {
  return [{ locale: "id" }, { locale: "en" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <html
      lang={locale}
      className={`${lora.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar locale={locale} dict={dict} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} dict={dict} />
        <ChatbotWidget locale={locale} lang={locale as "id" | "en"} />
      </body>
    </html>
  );
}
