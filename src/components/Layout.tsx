import Head from 'next/head';
import Link from 'next/link';
import { ReactNode } from 'react';
import PersonaNavigation from './PersonaNavigation';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="app-shell">
      <Head>
        <title>Netwo Académie</title>
        <meta
          name="description"
          content="Enable operators and resellers with curated Netwo learning journeys."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="app-header">
        <Link href="/" className="brand">
          <span className="brand-mark" aria-hidden>∿</span>
          <span className="brand-text">Netwo Académie</span>
        </Link>
        <div className="header-meta">
          <span className="header-pill">BETA</span>
          <span className="header-subtitle">Learning hub for operators &amp; resellers</span>
        </div>
      </header>
      <PersonaNavigation />
      <main className="app-main">{children}</main>
      <footer className="app-footer">
        <p>Built with the Netwo design system to keep learning experiences cohesive.</p>
      </footer>
      <style jsx>{`
        .app-shell {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background: var(--surface-background-raised, #ffffff);
        }

        .app-header {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          padding: 1.5rem 2rem;
          background: var(--surface-primary-default, #0f172a);
          color: var(--text-on-primary, #f8fafc);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: var(--shadow-lg, 0px 16px 32px rgba(15, 23, 42, 0.12));
        }

        .brand {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          font-weight: 700;
          font-size: 1.25rem;
          letter-spacing: 0.04em;
        }

        .brand-mark {
          width: 2rem;
          height: 2rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 0.75rem;
          background: linear-gradient(135deg, var(--brand-primary-500, #6366f1), var(--brand-secondary-400, #22d3ee));
          font-size: 1.25rem;
          font-weight: 700;
        }

        .brand-text {
          text-transform: uppercase;
        }

        .header-meta {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: rgba(248, 250, 252, 0.92);
          font-size: 0.95rem;
        }

        .header-pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          padding: 0.25rem 0.75rem;
          background: rgba(148, 163, 184, 0.24);
          font-weight: 600;
          letter-spacing: 0.12em;
        }

        .header-subtitle {
          opacity: 0.9;
        }

        .app-main {
          flex: 1;
          padding: 2rem;
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
        }

        .app-footer {
          margin-top: auto;
          padding: 2rem;
          text-align: center;
          background: var(--surface-background-subtle, #f8fafc);
          color: var(--text-muted, #475569);
          border-top: 1px solid rgba(15, 23, 42, 0.08);
        }

        @media (max-width: 768px) {
          .app-main {
            padding: 1.5rem 1rem 4rem;
          }

          .app-header {
            padding: 1.25rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Layout;
