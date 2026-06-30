import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

function App() {
  return (
    <main className="app">
      <section>
        <p className="eyebrow">RTLS Demo</p>
        <h1>Client scaffold is ready.</h1>
        <p className="description">
          React and Vite are configured. Add the RTLS UI here when the demo scope is decided.
        </p>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
