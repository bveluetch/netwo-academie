import Link from 'next/link';
import { useRouter } from 'next/router';
import { personaDefinitions } from '../data/personas';

const PersonaNavigation = () => {
  const router = useRouter();
  const activePath = router.asPath;

  return (
    <nav className="persona-nav" aria-label="Persona and journey navigation">
      {personaDefinitions.map((persona) => {
        const isPersonaActive = activePath.startsWith(`/${persona.id}`);
        return (
          <section key={persona.id} className={`persona-card ${isPersonaActive ? 'active' : ''}`}>
            <header className="persona-header">
              <div className="persona-eyebrow">{persona.segment}</div>
              <h2>{persona.label}</h2>
              <p>{persona.description}</p>
            </header>
            <ul className="journey-list">
              {persona.journeys.map((journey) => {
                const href = `/${persona.id}/${journey.id}`;
                const isActive = activePath === href;
                return (
                  <li key={journey.id} className={isActive ? 'journey-active' : ''}>
                    <Link href={href}>
                      <span className="journey-title">{journey.label}</span>
                      <span className="journey-summary">{journey.summary}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}
      <style jsx>{`
        .persona-nav {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1.5rem;
          padding: 2rem;
          background: var(--surface-background-subtle, #f8fafc);
          border-bottom: 1px solid rgba(15, 23, 42, 0.08);
        }

        .persona-card {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 1.5rem;
          border-radius: 1.25rem;
          border: 1px solid rgba(15, 23, 42, 0.06);
          background: var(--surface-card, #ffffff);
          box-shadow: var(--shadow-md, 0px 16px 24px rgba(15, 23, 42, 0.06));
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .persona-card:hover,
        .persona-card.active {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg, 0px 24px 32px rgba(15, 23, 42, 0.12));
          border-color: rgba(99, 102, 241, 0.4);
        }

        .persona-header h2 {
          margin: 0;
          font-size: 1.25rem;
        }

        .persona-eyebrow {
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-muted, #64748b);
        }

        .persona-header p {
          margin: 0;
          color: var(--text-muted, #475569);
        }

        .journey-list {
          list-style: none;
          display: grid;
          gap: 0.75rem;
          margin: 0;
          padding: 0;
        }

        .journey-list li {
          border-radius: 0.85rem;
          border: 1px solid transparent;
          background: rgba(99, 102, 241, 0.04);
          transition: border-color 0.2s ease, background 0.2s ease;
        }

        .journey-list li a {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          padding: 0.75rem 1rem;
          color: inherit;
        }

        .journey-list li:hover {
          border-color: rgba(99, 102, 241, 0.4);
          background: rgba(99, 102, 241, 0.08);
        }

        .journey-list li.journey-active {
          border-color: rgba(34, 211, 238, 0.6);
          background: rgba(34, 211, 238, 0.12);
        }

        .journey-title {
          font-weight: 600;
        }

        .journey-summary {
          font-size: 0.85rem;
          color: var(--text-muted, #64748b);
        }

        @media (max-width: 768px) {
          .persona-nav {
            padding: 1.5rem 1rem;
          }
        }
      `}</style>
    </nav>
  );
};

export default PersonaNavigation;
