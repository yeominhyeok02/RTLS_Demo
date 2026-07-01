import { Link } from 'react-router-dom';

export function Sensmap() {
  return (
    <main className="app sensmap-page">
      <section className="sensmap-shell">
        <header className="page-header">
          <div>
            <p className="eyebrow">RTLS Demo</p>
            <h1>Sensmap</h1>
          </div>

          <Link className="secondary-button" to="/">
            Back
          </Link>
        </header>

        <div className="sensmap-stage">
          <p>Sensmap screen ready.</p>
        </div>
      </section>
    </main>
  );
}
