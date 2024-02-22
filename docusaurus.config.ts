import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
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
            'https://gitlab.com/ojosproject/docs/-/tree/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/oembed.png',
    navbar: {
      title: 'Docs',
      logo: {
        alt: 'Ojos Project logo',
        src: 'img/logo.png',
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
      style: 'dark',
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
