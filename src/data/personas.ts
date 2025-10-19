import type { JourneyId, PersonaId } from './videos';

export interface JourneyDefinition {
  id: JourneyId;
  label: string;
  summary: string;
  heroStatement: string;
}

export interface PersonaDefinition {
  id: PersonaId;
  label: string;
  segment: string;
  description: string;
  defaultJourney: JourneyId;
  journeys: JourneyDefinition[];
}

export const personaDefinitions: PersonaDefinition[] = [
  {
    id: 'operators',
    label: 'Operators',
    segment: 'Network build & operate',
    description:
      'Guides for telco operators focused on provisioning, integrating, and operating the Netwo network stack.',
    defaultJourney: 'commercial',
    journeys: [
      {
        id: 'commercial',
        label: 'Commercial Journey',
        summary: 'Position Netwo to enterprise customers and craft compelling value propositions.',
        heroStatement:
          'Accelerate go-to-market conversations with customer-ready narratives, pricing structures, and ROI proof points.'
      },
      {
        id: 'technical',
        label: 'Technical Journey',
        summary: 'Deploy, integrate, and monitor Netwo in your existing network tooling.',
        heroStatement:
          'Deep dives into provisioning automation, platform APIs, and observability practices tailored for operator teams.'
      }
    ]
  },
  {
    id: 'resellers',
    label: 'Resellers',
    segment: 'Channel & ecosystem',
    description:
      'Enable channel partners with packaged offerings, ready-made pitches, and implementation support assets.',
    defaultJourney: 'commercial',
    journeys: [
      {
        id: 'commercial',
        label: 'Commercial Journey',
        summary: 'Launch revenue-ready offers and orchestrate a consistent channel playbook.',
        heroStatement:
          'Craft resonant messaging, bundle configuration, and co-selling motions that keep partners confident and autonomous.'
      },
      {
        id: 'technical',
        label: 'Technical Journey',
        summary: 'Support partner delivery teams with guided implementations and sandbox toolkits.',
        heroStatement:
          'Everything partner engineers need to configure, troubleshoot, and extend Netwo-based connectivity products.'
      }
    ]
  }
];

export const getPersonaDefinition = (personaId: PersonaId) =>
  personaDefinitions.find((persona) => persona.id === personaId);

export const getJourneyDefinition = (personaId: PersonaId, journeyId: JourneyId) =>
  getPersonaDefinition(personaId)?.journeys.find((journey) => journey.id === journeyId);
