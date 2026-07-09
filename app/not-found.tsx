import Link from "next/link";

export default function RootNotFound() {
  return (
    <html lang="id">
      <body style={{ fontFamily: "system-ui, sans-serif", background: "#F4ECDD", color: "#2B2420", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh", margin: 0, textAlign: "center", padding: "2rem" }}>
        <div>
          <p style={{ fontFamily: "monospace", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.08em", color: "#C1502E", marginBottom: "1rem" }}>404</p>
          <h1 style={{ fontSize: "1.75rem", fontWeight: 600, marginBottom: "0.75rem" }}>
            Halaman tidak ditemukan
            <span style={{ display: "block", fontSize: "1.25rem", fontWeight: 400, marginTop: "0.25rem", color: "#6B5D4F" }}>Page not found</span>
          </h1>
          <p style={{ color: "#6B5D4F", marginBottom: "2rem" }}>
            Alamat ini tidak tersedia. / This address is not available.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/id" style={{ background: "#C1502E", color: "#F4ECDD", padding: "0.75rem 2rem", borderRadius: "9999px", textDecoration: "none", fontWeight: 500 }}>
              Beranda →
            </Link>
            <Link href="/en" style={{ background: "transparent", color: "#C1502E", border: "1.5px solid #C1502E", padding: "0.75rem 2rem", borderRadius: "9999px", textDecoration: "none", fontWeight: 500 }}>
              Home →
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
