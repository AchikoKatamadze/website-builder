export default function Home() {
  return (
    <main style={{ maxWidth: 1120, margin: "0 auto", padding: "64px 24px" }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 96 }}>
        <strong style={{ fontSize: 20 }}>Website Builder</strong>
        <span style={{ fontSize: 14, opacity: 0.6 }}>Foundation v0.1</span>
      </nav>

      <section style={{ maxWidth: 760 }}>
        <p style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: ".12em", opacity: 0.55 }}>
          Modular web platform
        </p>
        <h1 style={{ fontSize: "clamp(48px, 8vw, 88px)", lineHeight: 0.95, letterSpacing: "-.05em", margin: "20px 0 28px" }}>
          Build the interface first. Make the system scalable.
        </h1>
        <p style={{ fontSize: 20, lineHeight: 1.5, maxWidth: 620, opacity: 0.68 }}>
          A clean foundation for research, prototypes, and legitimate commerce-style experiences.
        </p>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginTop: 96 }}>
        {["Reusable UI", "Typed data", "Service layer"].map((item, index) => (
          <article key={item} style={{ border: "1px solid #ddd", borderRadius: 16, padding: 24, background: "#fff" }}>
            <span style={{ fontSize: 12, opacity: 0.45 }}>0{index + 1}</span>
            <h2 style={{ fontSize: 20, margin: "36px 0 8px" }}>{item}</h2>
            <p style={{ margin: 0, lineHeight: 1.5, opacity: 0.6 }}>
              Designed as an independent building block so features can grow without turning the codebase into a mess.
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}
