"use client";

import dynamic from "next/dynamic";

const ChatbotWidget = dynamic(() => import("./ChatbotWidget"), { ssr: false });

export default function ChatbotLoader({
  locale,
  lang,
}: {
  locale: string;
  lang: "id" | "en";
}) {
  return <ChatbotWidget locale={locale} lang={lang} />;
}
