import Link from "next/link";

export default function RootNotFound() {
  return (
    <html lang="id">
      <body style={{ fontFamily: "system-ui, sans-serif", background: "#F4ECDD", color: "#2B2420", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh", margin: 0, textAlign: "center", padding: "2rem" }}>
        <div>
          <p style={{ fontFamily: "monospace", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.08em", color: "#C1502E", marginBottom: "1rem" }}>404</p>
          <h1 style={{ fontSize: "1.75rem", fontWeight: 600, marginBottom: "0.75rem" }}>Halaman tidak ditemukan</h1>
          <p style={{ color: "#6B5D4F", marginBottom: "2rem" }}>Alamat ini tidak tersedia.</p>
          <Link href="/id" style={{ background: "#C1502E", color: "#F4ECDD", padding: "0.75rem 2rem", borderRadius: "9999px", textDecoration: "none", fontWeight: 500 }}>
            Ke Beranda →
          </Link>
        </div>
      </body>
    </html>
  );
}
