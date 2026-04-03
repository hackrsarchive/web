export const metadata = {
  title: "About - hackr's Archive",
  description: "Learn about hackr's Archive and what the studio is building.",
};

export default function AboutPage() {
  return (
    <main className="page-shell">
      <a className="back-link" href="/">
        Back to Home
      </a>
      <h1>About hackr's Archive</h1>
      <p className="lead">
        We are a small indie studio focused on experimental games, playful web experiences,
        and projects that value personality over polish-for-polish's-sake.
      </p>

      <section className="panel">
        <h2>What we're building</h2>
        <p>
          Current work is centered around rapid prototyping and releasing small ideas quickly.
          That means more updates, more experiments, and more weirdly fun stuff over time.
        </p>
      </section>

      <section className="panel">
        <h2>Follow updates</h2>
        <p>
          For announcements, creator notes, and release plans, check the creator page or reach out directly.
        </p>
        <p>
          <a href="/hackr">Meet the creator</a>
          <a href="mailto:hello@hackrsarchive.com">Contact the studio</a>
        </p>
      </section>
    </main>
  );
}
