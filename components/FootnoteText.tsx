interface FootnoteTextProps {
  text: string;
  scope: string;
}

export default function FootnoteText({ text, scope }: FootnoteTextProps) {
  const parts: (string | { n: string })[] = [];
  let last = 0;
  const re = /\[(\d+)\]/g;
  let m: RegExpExecArray | null;

  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    parts.push({ n: m[1] });
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));

  return (
    <>
      {parts.map((part, i) =>
        typeof part === "string" ? (
          <span key={i}>{part}</span>
        ) : (
          <sup key={i}>
            <a
              href={`#ref-${scope}-${part.n}`}
              className="text-teal hover:text-teal-dark font-semibold transition-colors"
            >
              {part.n}
            </a>
          </sup>
        )
      )}
    </>
  );
}
