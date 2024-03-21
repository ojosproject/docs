// sidebars.ts
// Ojos Project
// 
// Defines the sidebars that the files in `/docs/` can use.
// Learn more here:
// https://docusaurus.io/docs/sidebar/

import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  default: {
    'Teams': [
      'teams/developers/README',
      'teams/engineering/README',
      'teams/research/README'
    ],
    'Requirements': [
      'requirements/README',
      'requirements/interviews',
    ],
    'Policies': [
      'policies/git',
      'policies/image',
      'policies/inf199-acknowledgement',
      'policies/team-docs'
    ]
  },

  teamEngineering: {},
  teamDevelopers: {
    'Guides': [
      'teams/developers/guides/decrypt-interviews',
      'teams/developers/guides/gitlab-ide',
      'teams/developers/guides/installing-wsl',
      'teams/developers/guides/ssh-setup',
    ],
    'WebDev': [
      'teams/developers/webdev/adding-to-news',
      'teams/developers/webdev/updating-docs'
    ]
  },
  teamResearch: {
    'General': [
      'teams/research/git-credit',
      'teams/research/chalubot'
    ],
    'Notes': [
      'teams/research/notes/0',
      'teams/research/notes/1',
      'teams/research/notes/2',
      'teams/research/notes/3',
      'teams/research/notes/5'
    ]
  },
};

export default sidebars;
