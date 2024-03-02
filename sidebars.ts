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
    ]
  },

  urlTeamSidebar: {
    'General': [
      'teams/url/adding-to-news',
      'teams/url/gitlab-ide',
      'teams/url/updating-docs',
      'teams/url/raspberry-pi'
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

  researchTeamSidebar: [
      'teams/research/reasearching-and-reporting',
      'teams/research/git-credit',
      'teams/research/chalubot'
  ]
};

export default sidebars;
