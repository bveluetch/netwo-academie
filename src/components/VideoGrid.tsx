import { getPlaylist, JourneyId, PersonaId } from '../data/videos';

interface VideoGridProps {
  persona: PersonaId;
  journey: JourneyId;
}

const VideoGrid = ({ persona, journey }: VideoGridProps) => {
  const playlist = getPlaylist(persona, journey);

  if (!playlist) {
    return (
      <section>
        <h2>Playlist coming soon</h2>
        <p>We are curating the right enablement stories for this learning track.</p>
      </section>
    );
  }

  return (
    <section className="video-section">
      <header className="video-section__header">
        <div>
          <p className="video-section__eyebrow">Playlist • {playlist.playlistId}</p>
          <h2>{playlist.playlistTitle}</h2>
          <p className="video-section__description">{playlist.playlistDescription}</p>
        </div>
        <div className="video-section__meta">
          <span className="video-section__badge">CMS source: {playlist.cmsCollection}</span>
          <span className="video-section__count">{playlist.videos.length} lessons</span>
        </div>
      </header>
      <div className="video-grid">
        {playlist.videos.map((video) => (
          <article key={video.id} className="video-card">
            <div className="video-frame">
              <iframe
                src={video.embedUrl}
                title={video.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="video-content">
              <div className="video-card__header">
                <h3>{video.title}</h3>
                <span className="video-duration">{video.duration}</span>
              </div>
              <p>{video.description}</p>
              <div className="video-topics" aria-label="Topics covered">
                {video.topics.map((topic) => (
                  <span key={topic} className="topic-pill">
                    {topic}
                  </span>
                ))}
              </div>
              <span className="video-cms">CMS reference: {video.cmsId}</span>
            </div>
          </article>
        ))}
      </div>
      <style jsx>{`
        .video-section {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .video-section__header {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          background: linear-gradient(120deg, rgba(99, 102, 241, 0.08), rgba(14, 165, 233, 0.12));
          border-radius: 1.5rem;
          padding: 2rem;
          border: 1px solid rgba(99, 102, 241, 0.12);
        }

        .video-section__header h2 {
          margin: 0;
          font-size: 1.75rem;
        }

        .video-section__header p {
          margin: 0;
          color: var(--text-muted, #475569);
          max-width: 720px;
        }

        .video-section__eyebrow {
          text-transform: uppercase;
          letter-spacing: 0.22em;
          font-size: 0.75rem;
          font-weight: 600;
          color: rgba(15, 23, 42, 0.6);
        }

        .video-section__meta {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          color: var(--text-muted, #475569);
        }

        .video-section__badge,
        .video-section__count {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.35rem 0.85rem;
          border-radius: 999px;
          background: rgba(15, 23, 42, 0.06);
        }

        .video-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.75rem;
        }

        .video-card {
          display: flex;
          flex-direction: column;
          background: var(--surface-card, #ffffff);
          border-radius: 1.25rem;
          overflow: hidden;
          box-shadow: var(--shadow-md, 0px 18px 24px rgba(15, 23, 42, 0.08));
          border: 1px solid rgba(15, 23, 42, 0.06);
        }

        .video-frame {
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
          overflow: hidden;
          background: #0f172a;
        }

        .video-frame iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 0;
        }

        .video-content {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          padding: 1.25rem;
        }

        .video-card__header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
        }

        .video-card__header h3 {
          margin: 0;
          font-size: 1.1rem;
        }

        .video-duration {
          font-size: 0.85rem;
          color: var(--text-muted, #64748b);
          font-weight: 600;
        }

        .video-content p {
          margin: 0;
          color: var(--text-muted, #475569);
        }

        .video-topics {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .topic-pill {
          display: inline-flex;
          align-items: center;
          padding: 0.25rem 0.75rem;
          border-radius: 999px;
          background: rgba(79, 70, 229, 0.12);
          color: rgba(49, 46, 129, 0.88);
          font-size: 0.75rem;
          font-weight: 600;
        }

        .video-cms {
          font-size: 0.75rem;
          color: rgba(15, 23, 42, 0.5);
        }

        @media (max-width: 768px) {
          .video-section__header {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default VideoGrid;
