const nav = [
  { href: "/about", label: "About" },
  { href: "/hackr", label: "Creator" },
  { href: "mailto:hello@hackrsarchive.com", label: "Contact" },
];

export default function HomePage() {
  return (
    <>
      <header className="heading">
        <a className="brand" href="/" aria-label="Go to homepage">
          <img src="/favicon.svg" alt="hackr's Archive logo" width="60" height="60" />
          <span>hackr's Archive</span>
        </a>
        <nav aria-label="Primary">
          {nav.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero">
          <p className="kicker">Indie Game Studio</p>
          <h1>Small team, loud ideas.</h1>
          <p>
            We make playful projects for the web and beyond. The next release is currently in development.
          </p>
        </section>

        <section className="gamecard" aria-labelledby="next-project-title">
          <p className="status">In Progress</p>
          <h2 id="next-project-title">Next Project</h2>
          <p>
            We're prototyping a new experience right now. Follow along for updates and behind-the-scenes previews.
          </p>
          <div className="actions">
            <a className="button" href="/about">
              Studio Updates
            </a>
            <a className="button button-secondary" href="mailto:hello@hackrsarchive.com">
              Get In Touch
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>hackr's Archive</p>
        <p className="tiny-credit">Site support: Estopia Engineering</p>
        <p>
          <a href="/about">About</a>
          <a href="/hackr">Creator</a>
          <a href="mailto:hello@hackrsarchive.com">Contact</a>
        </p>
      </footer>
    </>
  );
}
