// sidebars.ts
// Ojos Project
// 
// Defines the sidebars that the files in `/docs/` can use.
// Learn more here:
// https://docusaurus.io/docs/sidebar/

import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  default: {
    'Groups': [
      'breathe/README',
      'url/README'
    ],
    'Policies': [
      'policies/git',
      'policies/image',
      'policies/inf199-acknowledgement',
      'policies/paperwork',
      'policies/structure',
      'policies/team-docs'
    ]
  },

  groupUrl: {
    'Teams': [
      'url/developers/README',
      'url/engineering/README',
      'url/research/README'
    ],
    'Requirements': [
      'url/requirements/README',
      'url/requirements/interviews',
    ]
  },

  groupBreathe: [
    'breathe/proposal'
  ],

  groupFederate: [
    'social/proposal'
  ],

  groupUrlTeamEngineering: {},
  groupUrlTeamDevelopers: {
    'Guides': [
      'url/developers/guides/decrypt-interviews',
      'url/developers/guides/gitlab-ide',
      'url/developers/guides/installing-wsl',
      'url/developers/guides/ssh-setup',
    ],
    'WebDev': [
      'url/developers/webdev/adding-to-news',
      'url/developers/webdev/updating-docs'
    ]
  },
  groupUrlTeamResearch: {
    'General': [
      'url/research/git-credit',
      'url/research/chalubot'
    ],
    'Notes': [
      'url/research/notes/0',
      'url/research/notes/1',
      'url/research/notes/2',
      'url/research/notes/3',
      'url/research/notes/5'
    ]
  },
};

export default sidebars;
