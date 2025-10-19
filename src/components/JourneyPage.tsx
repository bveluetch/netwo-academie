import { getJourneyDefinition, getPersonaDefinition } from '../data/personas';
import { getPlaylist, JourneyId, PersonaId } from '../data/videos';
import VideoGrid from './VideoGrid';

interface JourneyPageProps {
  persona: PersonaId;
  journey: JourneyId;
}

const JourneyPage = ({ persona, journey }: JourneyPageProps) => {
  const personaDefinition = getPersonaDefinition(persona);
  const journeyDefinition = getJourneyDefinition(persona, journey);
  const playlist = getPlaylist(persona, journey);

  return (
    <div className="journey-page">
      <header className="journey-hero">
        <p className="journey-eyebrow">
          {personaDefinition?.label ?? persona} · {journeyDefinition?.label ?? journey}
        </p>
        <h1>{journeyDefinition?.label ?? 'Learning journey'}</h1>
        <p className="journey-summary">{journeyDefinition?.heroStatement}</p>
        {personaDefinition?.description ? (
          <p className="persona-description">{personaDefinition.description}</p>
        ) : null}
      </header>
      <VideoGrid persona={persona} journey={journey} />
      <aside className="journey-notes">
        <h2>How to use this playlist</h2>
        <ol>
          <li>Share individual videos with your team or embed them in onboarding paths.</li>
          <li>
            Track updates in the linked CMS collection (<code>{playlist?.cmsCollection ?? 'TBC'}</code>) and
            refresh this page as content evolves.
          </li>
          <li>Pair the videos with live enablement sessions or office hours.</li>
        </ol>
      </aside>
      <style jsx>{`
        .journey-page {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .journey-hero {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          padding: 2.25rem;
          border-radius: 1.75rem;
          background: linear-gradient(135deg, rgba(34, 211, 238, 0.16), rgba(99, 102, 241, 0.16));
          border: 1px solid rgba(34, 211, 238, 0.24);
        }

        .journey-eyebrow {
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          font-size: 0.75rem;
          font-weight: 600;
          color: rgba(15, 23, 42, 0.64);
        }

        .journey-hero h1 {
          margin: 0;
          font-size: clamp(2rem, 5vw, 2.75rem);
        }

        .journey-summary {
          margin: 0;
          color: var(--text-muted, #475569);
          font-size: 1.05rem;
          line-height: 1.7;
        }

        .persona-description {
          margin: 0;
          color: rgba(15, 23, 42, 0.7);
          font-size: 0.95rem;
        }

        .journey-notes {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          padding: 1.75rem;
          border-radius: 1.25rem;
          background: var(--surface-background-subtle, #f8fafc);
          border: 1px solid rgba(15, 23, 42, 0.08);
        }

        .journey-notes h2 {
          margin: 0;
        }

        .journey-notes ol {
          margin: 0;
          padding-left: 1.5rem;
          color: var(--text-muted, #475569);
          display: grid;
          gap: 0.5rem;
        }

        code {
          font-size: 0.85rem;
          background: rgba(15, 23, 42, 0.08);
          padding: 0.15rem 0.35rem;
          border-radius: 0.35rem;
        }

        @media (max-width: 768px) {
          .journey-hero {
            padding: 1.75rem;
          }
        }
      `}</style>
    </div>
  );
};

export default JourneyPage;
