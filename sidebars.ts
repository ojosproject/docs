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
    "Glossary": ['teams/glossary'],
    'Teams': [
      'teams/url/README',
      'teams/research/README'
    ]
  },

  urlTeamSidebar: {
    "Glossary": ['teams/glossary'],
    'URL Team': [
      'teams/url/adding-to-news',
      'teams/url/decrypt-interviews',
      'teams/url/installing-wsl',
      'teams/url/ssh-setup'
    ]
  },

  researchTeamSidebar: {
    "Glossary": ['teams/glossary'],
    'Research': [
      'teams/research/reasearching-and-reporting'
    ]
  }

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
