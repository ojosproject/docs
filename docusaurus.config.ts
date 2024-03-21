import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  
  title: 'Ojos Project Docs',
  favicon: 'img/favicon.ico',

  trailingSlash: true,

  // Set the production url of your site here
  url: 'https://docs.ojosproject.org/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
            'https://gitlab.com/ojosproject/docs/-/tree/dev/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          routeBasePath: '/'
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
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
          {to: '/teams/developers/webdev/adding-to-news/', from: '/teams/url/adding-to-news/'},
          {to: 'teams/developers/guides/gitlab-ide/', from: '/teams/url/gitlab-ide/'},
          {to: '/teams/developers/guides/installing-wsl/', from: '/teams/url/installing-wsl/'},
          {to: '/teams/developers/guides/decrypt-interviews/', from: '/teams/url/decrypt-interviews/'},
          {to: '/teams/developers/guides/ssh-setup/', from: '/teams/url/ssh-setup/'},
          {to: '/teams/developers/webdev/updating-docs/', from: '/teams/url/updating-docs/'}
        ]
      }
    ]
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/header.png',
    navbar: {
      title: 'Docs',
      logo: {
        alt: 'Ojos Project logo',
        src: 'img/logo-space.png',
        className: 'ojos_logo_in_navbar'
      },
      items: [
        {
          type: 'doc',
          position: 'left',
          docId: 'teams/glossary',
          label: 'Glossary'
        }
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Ojos Project',
          items: [
            {
              label: 'ojosproject.org',
              href: 'https://ojosproject.org/',
            },
            {
              label: "News",
              href: "https://ojosproject.org/news/"
            }
          ],
        },
        {
          title: 'Find us online',
          items: [
            {
              label: 'GitLab',
              href: 'https://gitlab.com/ojosproject/',
            },
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
