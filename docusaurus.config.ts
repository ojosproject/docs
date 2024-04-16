import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  
  title: 'Ojos Project Docs',
  favicon: 'images/favicon.ico',

  trailingSlash: true,

  url: 'https://docs.ojosproject.org/',
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/ojosproject/docs/tree/dev/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          routeBasePath: '/'
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.scss',
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    'docusaurus-plugin-sass',
    // This plugin helps us fight against link rot.
    // If we move documentation around, please make sure to add the old link
    // and new link  changes here.
    //
    // More information on link rot here:
    // https://en.wikipedia.org/wiki/Link_rot
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {to: '/url/developers/guides/updating-news/', from: '/teams/url/adding-to-news/'},
          {to: '/url/developers/guides/gitlab-ide/', from: '/teams/url/gitlab-ide/'},
          {to: '/url/developers/guides/installing-wsl/', from: '/teams/url/installing-wsl/'},
          {to: '/url/developers/guides/decrypt-interviews/', from: '/teams/url/decrypt-interviews/'},
          {to: '/url/developers/guides/ssh-setup/', from: '/teams/url/ssh-setup/'},
          {to: '/url/developers/webdev/updating-docs/', from: '/teams/url/updating-docs/'},
          {to: '/url/requirements/', from: '/teams/url/requirements/README'},
          {to: '/url/requirements/interviews', from: '/teams/url/requirements/interviews'},
          {to: '/policies/inf199-acknowledgement', from: '/teams/url/inf199-acknowledgement'},
          {to: '/url/', from: '/teams/url/'},
          {to: '/url/research/', from: '/teams/research/'},
          {to: '/url/requirements/', from: '/teams/url/requirements/'},
          {to: '/url/developers/guides/updating-news/', from: '/url/developers/webdev/adding-to-news/'},

          // The content below is meant to replace the `/src/pages/` folder in
          // this repo. It replaces various `/docs/...` URLs we used to have.
          {to: '/', from: '/docs/welcome/'},
          {to: '/url/glossary/', from: '/docs/glossary/'},
          {to: '/url/research/', from: '/docs/teams/research/'},
          {to: '/url/research/', from: '/docs/teams/research/reasearching-and-reporting/'},
          {to: '/url/requirements/', from: '/docs/teams/url/requirements/'},
          {to: '/url/requirements/interviews/', from: '/docs/teams/url/requirements/interviews/'},
          {to: '/url/developers/guides/updating-news/', from: '/docs/teams/url/adding-to-news/'},
          {to: '/url/developers/guides/decrypt-interviews/', from: '/docs/teams/url/decrypt-interviews/'},
          {to: '/url/developers/guides/gitlab-ide/', from: '/docs/teams/url/gitlab-ide/'},
          {to: '/url/', from: '/docs/teams/url/'},
          {to: '/url/developers/guides/installing-wsl/', from: '/docs/teams/url/installing-wsl/'},
          {to: '/url/', from: '/docs/teams/url/raspberry-pi/'},
          {to: '/url/developers/guides/ssh-setup/', from: '/docs/teams/url/ssh-setup/'},
          {to: '/url/developers/webdev/updating-docs/', from: '/docs/teams/url/updating-docs/'},

        ]
      }
    ]
  ],

  themeConfig: {
    image: 'images/header.png',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true
    },
    navbar: {
      title: 'Docs',
      logo: {
        alt: 'Ojos Project logo',
        src: 'images/logo-space.png',
        className: 'ojos_logo_in_navbar'
      },
      items: [
        {
          label: 'Project News',
          href: 'https://ojosproject.org/news/'
        },
        {
          label: 'Join us!',
          href: 'https://ojosproject.org/news/join-us/'
        },
        {
          label: "Website",
          href: "https://ojosproject.org/",
          position: "right"
        }
      ],

    },
    footer: {
      links: [
        {
          title: 'Ojos Project',
          items: [
            {
              label: 'Slack',
              href: 'https://ojosproject.slack.com/'
            },
            {
              label: 'Finances',
              href: 'https://docs.google.com/spreadsheets/d/1W9qHV4Bm3wPtvsBWxmY4jpJY9JbhpSFIvcgRSFbrr78/'
            },
            {
              label: 'GitHub',
              href: 'https://github.com/ojosproject/'
            },
            {
              label: 'Undergraduate Research Lab',
              href: 'https://markbaldw.in/url/'
            },
          ]
        },
        {
          title: 'Documentation',
          items: [
            {
              label: 'URL Group Docs',
              to: '/url/'
            },
            {
              label: 'Developers Docs',
              to: '/url/developers/'
            },
            {
              label: 'Engineering Docs',
              to: '/url/engineering/'
            }
          ]
        }
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
