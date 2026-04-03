export const metadata = {
  title: "hackr - hackr's Archive",
  description: "Learn more about hackr, the creator behind hackr's Archive.",
};

export default function HackrPage() {
  return (
    <main className="profile-shell">
      <a className="back-link" href="/">
        Back to Home
      </a>
      <h1>hackr</h1>
      <p className="lead">
        Hi, I'm hackr. I run hackr's Archive and stream on
        <a href="https://twitch.tv/hackrvt" target="_blank" rel="noopener noreferrer">
          Twitch
        </a>
        .
      </p>

      <section className="panel">
        <h2>About</h2>
        <p>I am a U.S.-based creator and developer working on the studio's projects.</p>
        <p>
          I'm always learning, especially in game dev, so advice is welcome if you've got it.
        </p>
      </section>

      <section className="panel">
        <h2>Contact</h2>
        <p>
          You can email me at
          <a href="mailto:hackr@hackrsarchive.com">hackr@hackrsarchive.com</a>
          for collabs, feedback, or just to say hi.
        </p>
      </section>
    </main>
  );
}
