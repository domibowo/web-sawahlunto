"use client";

import { useState, useRef, useEffect } from "react";
import { qnaData, type QnAItem } from "@/data/qna";

type Section = "semua" | "sejarah" | "budaya" | "kuliner" | "wisata" | "inovasi" | "umum";

const SECTIONS: { key: Section; id: string; en: string }[] = [
  { key: "semua",   id: "Semua",   en: "All" },
  { key: "sejarah", id: "Sejarah", en: "History" },
  { key: "budaya",  id: "Budaya",  en: "Culture" },
  { key: "kuliner", id: "Kuliner", en: "Cuisine" },
  { key: "wisata",  id: "Wisata",  en: "Destinations" },
  { key: "inovasi", id: "Inovasi", en: "Innovation" },
  { key: "umum",    id: "Umum",    en: "General" },
];

function searchQnA(query: string, section: Section, lang: "id" | "en"): QnAItem[] {
  const q = query.toLowerCase().trim();
  if (q.length < 2) return [];

  const filtered = section === "semua"
    ? qnaData
    : qnaData.filter((item) => item.section === section);

  const exactMatches: QnAItem[] = [];
  const keywordMatches: QnAItem[] = [];

  for (const item of filtered) {
    const inQuestion =
      item.pertanyaan.id.toLowerCase().includes(q) ||
      item.pertanyaan.en.toLowerCase().includes(q);
    if (inQuestion) {
      exactMatches.push(item);
      continue;
    }
    const inKeywords = item.keywords.some((kw) => kw.includes(q) || q.includes(kw));
    if (inKeywords) keywordMatches.push(item);
  }

  return [...exactMatches, ...keywordMatches].slice(0, 5);
}

interface Props {
  locale: string;
  lang: "id" | "en";
}

export default function ChatbotWidget({ lang }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeSection, setActiveSection] = useState<Section>("semua");
  const [currentAnswer, setCurrentAnswer] = useState<QnAItem | null>(null);
  const [prevQuery, setPrevQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const results = currentAnswer ? [] : searchQnA(query, activeSection, lang);

  useEffect(() => {
    if (isOpen && !currentAnswer) {
      inputRef.current?.focus();
    }
  }, [isOpen, currentAnswer]);

  function handleSelectItem(item: QnAItem) {
    setPrevQuery(query);
    setCurrentAnswer(item);
  }

  function handleFollowUp(id: string) {
    const item = qnaData.find((q) => q.id === id);
    if (item) setCurrentAnswer(item);
  }

  function handleBack() {
    setCurrentAnswer(null);
    // restore previous query so results reappear
    setTimeout(() => inputRef.current?.focus(), 50);
  }

  function handleReset() {
    setCurrentAnswer(null);
    setQuery("");
    setPrevQuery("");
    setTimeout(() => inputRef.current?.focus(), 50);
  }

  const isId = lang === "id";
  const title = isId ? "Tanya Sawahlunto" : "Ask Sawahlunto";
  const placeholder = isId ? "Ketik pertanyaanmu..." : "Type your question...";
  const backLabel = isId ? "← Kembali" : "← Back";
  const resetLabel = isId ? "Mulai lagi" : "Start over";
  const noResultLabel = isId
    ? "Tidak ada hasil. Coba kata lain."
    : "No results. Try different keywords.";
  const hintLabel = isId
    ? "Ketik minimal 2 karakter untuk mencari."
    : "Type at least 2 characters to search.";

  return (
    <>
      {/* Panel */}
      {isOpen && (
        <div
          className="fixed bottom-20 right-4 z-50 w-[min(360px,calc(100vw-2rem))] flex flex-col"
          style={{
            maxHeight: "min(480px, calc(100dvh - 6rem))",
            background: "#F4ECDD",
            borderRadius: "16px",
            boxShadow: "0 8px 32px rgba(43,36,32,0.18), 0 2px 8px rgba(43,36,32,0.10)",
          }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-4 py-3 shrink-0"
            style={{
              borderBottom: "1px solid rgba(43,36,32,0.10)",
            }}
          >
            <div className="flex items-center gap-2">
              <span
                className="text-sm font-semibold"
                style={{ fontFamily: "var(--font-lora, serif)", color: "#2B2420" }}
              >
                {title}
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label={isId ? "Tutup chatbot" : "Close chatbot"}
              className="text-charcoal/50 hover:text-charcoal transition-colors"
              style={{ fontSize: "18px", lineHeight: 1, padding: "2px 4px" }}
            >
              ×
            </button>
          </div>

          {/* Section filter */}
          <div
            className="flex gap-1 px-3 pt-2.5 pb-1.5 overflow-x-auto shrink-0 scrollbar-none"
            style={{ borderBottom: "1px solid rgba(43,36,32,0.07)" }}
          >
            {SECTIONS.map((s) => (
              <button
                key={s.key}
                onClick={() => { setActiveSection(s.key); setCurrentAnswer(null); }}
                className="shrink-0 text-[11px] px-2 py-0.5 rounded-full transition-colors"
                style={{
                  fontFamily: "var(--font-plus-jakarta, sans-serif)",
                  background: activeSection === s.key ? "#C1502E" : "rgba(43,36,32,0.07)",
                  color: activeSection === s.key ? "#F4ECDD" : "#2B2420",
                  fontWeight: activeSection === s.key ? 600 : 400,
                }}
              >
                {isId ? s.id : s.en}
              </button>
            ))}
          </div>

          {/* Body — answer view or search view */}
          <div className="flex-1 overflow-y-auto px-3 py-2 min-h-0">
            {currentAnswer ? (
              /* Answer view */
              <div className="flex flex-col gap-3">
                {/* Question */}
                <p
                  className="text-[12px] font-semibold leading-snug"
                  style={{ color: "#C1502E", fontFamily: "var(--font-plus-jakarta, sans-serif)" }}
                >
                  {currentAnswer.pertanyaan[lang]}
                </p>
                {/* Answer */}
                <p
                  className="text-[13px] leading-relaxed"
                  style={{ color: "#2B2420", fontFamily: "var(--font-plus-jakarta, sans-serif)" }}
                >
                  {currentAnswer.jawaban[lang]}
                </p>
                {/* Follow-up */}
                {currentAnswer.followUp && currentAnswer.followUp.length > 0 && (
                  <div className="flex flex-col gap-1.5">
                    <p
                      className="text-[10px] uppercase tracking-wide"
                      style={{ color: "rgba(43,36,32,0.45)", fontFamily: "var(--font-plus-jakarta, sans-serif)" }}
                    >
                      {isId ? "Pertanyaan terkait" : "Related questions"}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {currentAnswer.followUp.map((fid) => {
                        const item = qnaData.find((q) => q.id === fid);
                        if (!item) return null;
                        return (
                          <button
                            key={fid}
                            onClick={() => handleFollowUp(fid)}
                            className="text-[11px] px-2.5 py-1 rounded-full transition-colors"
                            style={{
                              background: "rgba(29,122,107,0.12)",
                              color: "#1D7A6B",
                              fontFamily: "var(--font-plus-jakarta, sans-serif)",
                              border: "1px solid rgba(29,122,107,0.20)",
                            }}
                          >
                            {item.pertanyaan[lang]}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
                {/* Back / Reset */}
                <div className="flex gap-2 mt-1">
                  <button
                    onClick={handleBack}
                    className="text-[12px] px-3 py-1 rounded"
                    style={{
                      background: "rgba(43,36,32,0.08)",
                      color: "#2B2420",
                      fontFamily: "var(--font-plus-jakarta, sans-serif)",
                    }}
                  >
                    {backLabel}
                  </button>
                  <button
                    onClick={handleReset}
                    className="text-[12px] px-3 py-1 rounded"
                    style={{
                      background: "rgba(43,36,32,0.08)",
                      color: "#2B2420",
                      fontFamily: "var(--font-plus-jakarta, sans-serif)",
                    }}
                  >
                    {resetLabel}
                  </button>
                </div>
              </div>
            ) : (
              /* Search view */
              <div className="flex flex-col gap-2">
                {/* Search box */}
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={placeholder}
                  className="w-full text-[13px] px-3 py-2 rounded-lg outline-none"
                  style={{
                    background: "rgba(43,36,32,0.06)",
                    color: "#2B2420",
                    fontFamily: "var(--font-plus-jakarta, sans-serif)",
                    border: "1px solid rgba(43,36,32,0.12)",
                  }}
                />
                {/* Results */}
                {query.length >= 2 ? (
                  results.length > 0 ? (
                    <ul className="flex flex-col gap-0.5">
                      {results.map((item) => (
                        <li key={item.id}>
                          <button
                            onClick={() => handleSelectItem(item)}
                            className="w-full text-left text-[12.5px] px-3 py-2 rounded-lg transition-colors"
                            style={{
                              fontFamily: "var(--font-plus-jakarta, sans-serif)",
                              color: "#2B2420",
                              background: "transparent",
                            }}
                            onMouseEnter={(e) => {
                              (e.currentTarget as HTMLButtonElement).style.background = "rgba(193,80,46,0.08)";
                            }}
                            onMouseLeave={(e) => {
                              (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                            }}
                          >
                            {item.pertanyaan[lang]}
                          </button>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p
                      className="text-[12px] text-center py-4"
                      style={{ color: "rgba(43,36,32,0.45)", fontFamily: "var(--font-plus-jakarta, sans-serif)" }}
                    >
                      {noResultLabel}
                    </p>
                  )
                ) : (
                  <p
                    className="text-[12px] text-center py-4"
                    style={{ color: "rgba(43,36,32,0.38)", fontFamily: "var(--font-plus-jakarta, sans-serif)" }}
                  >
                    {hintLabel}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* FAB trigger button */}
      <button
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isId ? "Buka asisten Sawahlunto" : "Open Sawahlunto assistant"}
        className="fixed bottom-4 right-4 z-50 flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
        style={{
          width: "52px",
          height: "52px",
          borderRadius: "50%",
          background: "#C1502E",
          boxShadow: "0 4px 20px rgba(0,0,0,0.35), 0 0 0 3px #F4ECDD",
          color: "#F4ECDD",
        }}
      >
        {isOpen ? (
          /* X icon */
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          /* Chat bubble icon */
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>
    </>
  );
}
