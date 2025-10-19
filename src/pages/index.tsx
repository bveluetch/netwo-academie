import Link from 'next/link';
import { personaDefinitions } from '../data/personas';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1>Choose your Netwo learning journey</h1>
        <p>
          Netwo Académie centralises the content, workshops, and video walkthroughs used to train operators and
          reseller partners. Pick the journey that aligns with your remit to explore curated playlists powered by the
          Netwo design system.
        </p>
        <div className="hero-actions">
          {personaDefinitions.map((persona) => (
            <Link key={persona.id} href={`/${persona.id}/${persona.defaultJourney}`} className="hero-link">
              Explore {persona.label} journeys →
            </Link>
          ))}
        </div>
      </section>
      <section className="home-grid">
        {personaDefinitions.map((persona) => (
          <article key={persona.id} className="home-card">
            <header>
              <h2>{persona.label}</h2>
              <p>{persona.description}</p>
            </header>
            <ul>
              {persona.journeys.map((journey) => (
                <li key={journey.id}>
                  <Link href={`/${persona.id}/${journey.id}`}>
                    <span className="journey-name">{journey.label}</span>
                    <span className="journey-copy">{journey.heroStatement}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
      <style jsx>{`
        .home {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .hero {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          background: linear-gradient(125deg, rgba(99, 102, 241, 0.16), rgba(14, 165, 233, 0.16));
          border-radius: 1.75rem;
          padding: 2.5rem;
          border: 1px solid rgba(99, 102, 241, 0.18);
        }

        .hero h1 {
          margin: 0;
          font-size: clamp(2rem, 5vw, 3rem);
        }

        .hero p {
          margin: 0;
          color: var(--text-muted, #475569);
          max-width: 720px;
          line-height: 1.7;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .hero-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.75rem 1.25rem;
          border-radius: 0.85rem;
          background: var(--brand-primary-500, #6366f1);
          color: var(--text-on-primary, #f8fafc);
          font-weight: 600;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          box-shadow: var(--shadow-md, 0px 10px 18px rgba(99, 102, 241, 0.32));
        }

        .hero-link:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg, 0px 18px 28px rgba(99, 102, 241, 0.32));
        }

        .home-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .home-card {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          padding: 1.75rem;
          border-radius: 1.5rem;
          border: 1px solid rgba(15, 23, 42, 0.08);
          background: var(--surface-card, #ffffff);
          box-shadow: var(--shadow-md, 0px 18px 24px rgba(15, 23, 42, 0.08));
        }

        .home-card h2 {
          margin: 0 0 0.5rem;
        }

        .home-card p {
          margin: 0;
          color: var(--text-muted, #475569);
        }

        .home-card ul {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          gap: 0.75rem;
        }

        .home-card li {
          border-radius: 0.85rem;
          background: rgba(15, 23, 42, 0.04);
          border: 1px solid transparent;
          transition: border-color 0.2s ease, background 0.2s ease;
        }

        .home-card li:hover {
          border-color: rgba(99, 102, 241, 0.4);
          background: rgba(99, 102, 241, 0.08);
        }

        .home-card li a {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          padding: 0.85rem 1rem;
        }

        .journey-name {
          font-weight: 600;
        }

        .journey-copy {
          font-size: 0.85rem;
          color: var(--text-muted, #64748b);
        }

        @media (max-width: 768px) {
          .hero {
            padding: 2rem;
          }

          .home-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
