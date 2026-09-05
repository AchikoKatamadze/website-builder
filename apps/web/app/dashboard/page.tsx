const sites = [
  { name: "Demo storefront", status: "Published", updated: "Just now" },
  { name: "Research prototype", status: "Draft", updated: "Today" },
  { name: "Landing experiment", status: "Draft", updated: "Yesterday" },
];

export default function DashboardPage() {
  return (
    <main className="dashboard-shell">
      <header className="dashboard-header">
        <div>
          <span className="eyebrow">Workspace</span>
          <h1>Projects</h1>
        </div>
        <a className="primary-button" href="/">Back home</a>
      </header>

      <section className="dashboard-grid" aria-label="Project overview">
        <article className="metric-card">
          <span>ACTIVE SITES</span>
          <strong>3</strong>
          <small>Across this workspace</small>
        </article>
        <article className="metric-card">
          <span>PUBLISHED</span>
          <strong>1</strong>
          <small>Public experiences</small>
        </article>
        <article className="metric-card">
          <span>ENVIRONMENT</span>
          <strong>DEV</strong>
          <small>Safe prototype mode</small>
        </article>
      </section>

      <section className="projects-panel">
        <div className="panel-heading">
          <div>
            <span className="eyebrow">Site management</span>
            <h2>Your projects</h2>
          </div>
          <button className="secondary-button" type="button">New project</button>
        </div>

        <div className="project-list">
          {sites.map((site) => (
            <div className="project-row" key={site.name}>
              <div>
                <strong>{site.name}</strong>
                <span>Updated {site.updated}</span>
              </div>
              <span className="project-status">{site.status}</span>
              <button className="row-action" type="button">Open →</button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
