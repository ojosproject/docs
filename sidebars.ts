import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure

  teamSidebar: {
    'Teams': [
      'teams/url/README',
      'teams/research/README'
    ],
    'Policies': [
      'policies/git'
    ]
  },

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

  researchTeamSidebar: {
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
