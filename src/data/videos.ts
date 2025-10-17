export type PersonaId = 'operators' | 'resellers';
export type JourneyId = 'commercial' | 'technical';

export interface VideoResource {
  id: string;
  title: string;
  description: string;
  duration: string;
  embedUrl: string;
  topics: string[];
  cmsId: string;
}

export interface Playlist {
  playlistId: string;
  playlistTitle: string;
  playlistDescription: string;
  cmsCollection: string;
  videos: VideoResource[];
}

export type VideoLibrary = Record<PersonaId, Record<JourneyId, Playlist>>;

export const videoLibrary: VideoLibrary = {
  operators: {
    commercial: {
      playlistId: 'operators-commercial',
      playlistTitle: 'Operator Commercial Enablement',
      playlistDescription:
        'Arm sales and success teams with the storytelling assets required to win modern network deals.',
      cmsCollection: 'cms/operators/commercial',
      videos: [
        {
          id: 'op-com-1',
          title: 'Netwo value proposition for enterprise operators',
          description:
            'Crystalise the Netwo platform value proposition with customer-ready messaging and proof points.',
          duration: '08:42',
          embedUrl: 'https://www.youtube.com/embed/6v2L2UGZJAM',
          topics: ['Positioning', 'Sales enablement', 'Customer success'],
          cmsId: 'cms_001'
        },
        {
          id: 'op-com-2',
          title: 'Designing modular Netwo offers',
          description:
            'Structure modular commercial bundles that match operator buyer profiles and deployment complexity.',
          duration: '11:05',
          embedUrl: 'https://www.youtube.com/embed/tgbNymZ7vqY',
          topics: ['Packaging', 'Pricing', 'Bundles'],
          cmsId: 'cms_002'
        }
      ]
    },
    technical: {
      playlistId: 'operators-technical',
      playlistTitle: 'Operator Technical Onboarding',
      playlistDescription:
        'Best practices for provisioning, automating, and monitoring Netwo in production operator environments.',
      cmsCollection: 'cms/operators/technical',
      videos: [
        {
          id: 'op-tech-1',
          title: 'Automating operator provisioning via Netwo APIs',
          description:
            'Connect Netwo provisioning workflows to your OSS/BSS with practical API walkthroughs and sandbox demos.',
          duration: '09:27',
          embedUrl: 'https://www.youtube.com/embed/ysz5S6PUM-U',
          topics: ['APIs', 'Automation', 'Provisioning'],
          cmsId: 'cms_003'
        },
        {
          id: 'op-tech-2',
          title: 'Observability patterns for Netwo-enabled networks',
          description:
            'Instrument telemetry, alerts, and dashboards to keep hybrid networks reliable and resilient.',
          duration: '12:14',
          embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          topics: ['Monitoring', 'Operations', 'Reliability'],
          cmsId: 'cms_004'
        }
      ]
    }
  },
  resellers: {
    commercial: {
      playlistId: 'resellers-commercial',
      playlistTitle: 'Reseller Commercial Playbooks',
      playlistDescription:
        'Equip partners with pitch materials, co-marketing assets, and pricing guardrails to drive revenue.',
      cmsCollection: 'cms/resellers/commercial',
      videos: [
        {
          id: 'res-com-1',
          title: 'Partner pitch workshop',
          description:
            'A guided workshop to help channel partners articulate the Netwo story in customer presentations.',
          duration: '07:36',
          embedUrl: 'https://www.youtube.com/embed/aqz-KE-bpKQ',
          topics: ['Pitching', 'Storytelling', 'Sales'],
          cmsId: 'cms_101'
        },
        {
          id: 'res-com-2',
          title: 'Co-marketing launch checklist',
          description:
            'Step-by-step plan for launching a joint campaign with Netwo including assets, timelines, and approvals.',
          duration: '10:02',
          embedUrl: 'https://www.youtube.com/embed/w7ejDZ8SWv8',
          topics: ['Marketing', 'Go-to-market', 'Campaigns'],
          cmsId: 'cms_102'
        }
      ]
    },
    technical: {
      playlistId: 'resellers-technical',
      playlistTitle: 'Reseller Technical Toolkits',
      playlistDescription:
        'Give partner delivery teams the configuration runbooks and troubleshooting guides they need to succeed.',
      cmsCollection: 'cms/resellers/technical',
      videos: [
        {
          id: 'res-tech-1',
          title: 'Standing up a Netwo reseller sandbox',
          description:
            'Provision demo environments, configure identities, and unlock reusable assets for partner engineering teams.',
          duration: '09:48',
          embedUrl: 'https://www.youtube.com/embed/jNQXAC9IVRw',
          topics: ['Sandbox', 'Configuration', 'Enablement'],
          cmsId: 'cms_103'
        },
        {
          id: 'res-tech-2',
          title: 'Partner support escalation playbook',
          description:
            'How to triage, troubleshoot, and escalate partner-raised issues with Netwo support.',
          duration: '08:11',
          embedUrl: 'https://www.youtube.com/embed/oUFJJNQGwhk',
          topics: ['Support', 'Troubleshooting', 'Processes'],
          cmsId: 'cms_104'
        }
      ]
    }
  }
};

export const getPlaylist = (persona: PersonaId, journey: JourneyId) =>
  videoLibrary[persona]?.[journey];
