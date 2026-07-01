import { Link } from 'react-router-dom';

export function Home() {
  return (
    <main className="app home-page">
      <section className="home-panel">
        <p className="eyebrow">RTLS Demo</p>
        <h1>Start</h1>
        <p className="description">Select a demo feature to launch.</p>

        <div className="feature-menu" aria-label="Demo feature menu">
          <Link className="feature-button" to="/sensmap">
            <span className="feature-title">Sensmap</span>
            <span className="feature-description">Open the RTLS visualization workspace</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
