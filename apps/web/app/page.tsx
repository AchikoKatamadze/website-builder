const features = [
  {
    number: "01",
    title: "Reusable UI",
    description: "Build pages from consistent components instead of duplicating markup across the product.",
  },
  {
    number: "02",
    title: "Typed data",
    description: "Keep the frontend, API, and future database layer aligned with shared TypeScript contracts.",
  },
  {
    number: "03",
    title: "Service layer",
    description: "Separate presentation from business logic so integrations can evolve without rewriting the UI.",
  },
];

const roadmap = [
  "Foundation",
  "Design system",
  "Authentication",
  "Dashboard",
  "API integrations",
  "Persistence",
];

export default function Home() {
  return (
    <main className="site-shell">
      <nav className="topbar">
        <a className="brand" href="#top" aria-label="Website Builder home">
          <span className="brand-mark">WB</span>
          <span>Website Builder</span>
        </a>

        <div className="topbar-links">
          <a href="#architecture">Architecture</a>
          <a href="#roadmap">Roadmap</a>
          <a className="topbar-cta" href="#start">Start building</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <span className="eyebrow">Modular web platform · v0.2</span>
          <h1>Build the interface first. Make the system scalable.</h1>
          <p>
            A production-minded foundation for prototypes, research projects, and legitimate
            commerce-style experiences. Clean structure now means fewer rewrites later.
          </p>
          <div className="hero-actions" id="start">
            <a className="primary-button" href="#architecture">Explore the architecture</a>
            <a className="secondary-button" href="https://github.com/AchikoKatamadze/website-builder">
              View repository ↗
            </a>
          </div>
        </div>

        <div className="hero-card" aria-label="Project status">
          <div className="hero-card-header">
            <span>PROJECT STATUS</span>
            <span className="status-dot" aria-hidden="true" />
          </div>
          <div className="hero-card-title">Foundation online</div>
          <div className="hero-card-meta">
            <span>Frontend</span><strong>Ready</strong>
            <span>API layer</span><strong>Ready</strong>
            <span>Database</span><strong>Planned</strong>
          </div>
        </div>
      </section>

      <section className="feature-grid" id="architecture" aria-label="Architecture principles">
        {features.map((feature) => (
          <article className="feature-card" key={feature.number}>
            <span className="feature-number">{feature.number}</span>
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
          </article>
        ))}
      </section>

      <section className="architecture" id="roadmap">
        <div>
          <span className="eyebrow">Build order</span>
          <h2>Keep complexity behind clear boundaries.</h2>
        </div>
        <ol className="roadmap">
          {roadmap.map((step, index) => (
            <li key={step} className={index === 0 ? "active" : ""}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{step}</strong>
            </li>
          ))}
        </ol>
      </section>

      <footer className="footer">
        <span>Website Builder</span>
        <span>Research / demo platform</span>
      </footer>
    </main>
  );
}
