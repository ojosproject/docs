// sidebars.ts
// Ojos Project
// 
// Defines the sidebars that the files in `/docs/` can use.
// Learn more here:
// https://docusaurus.io/docs/sidebar/

import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  teamSidebar: {
    'Teams': [
      'teams/developers/README',
      'teams/engineering/README',
      'teams/research/README'
    ],
    'Policies': [
      'policies/git',
      'policies/image',
      'policies/team-docs'
    ]
  },

  teamEngineering: {},
  teamDevelopers: {},

  urlTeamSidebar: {
    'General': [
      'teams/url/adding-to-news',
      'teams/url/gitlab-ide',
      'teams/url/inf199-acknowledgement',
      'teams/url/raspberry-pi',
      'teams/url/updating-docs',
    ],
    'Setup Guides': [
      'teams/url/decrypt-interviews',
      'teams/url/installing-wsl',
      'teams/url/ssh-setup',
    ],
    'Requirements': [
      'teams/url/requirements/README',
      'teams/url/requirements/interviews',
    ]
  }
  
  ,

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
  }
};

export default sidebars;
