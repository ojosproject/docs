import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Ojos Project Docs',

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
        docs: false,
        blog: false,
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
          {to: 'https://ojosproject.org/docs/url/developers/updating-news/', from: '/teams/url/adding-to-news/'},
          {to: 'https://ojosproject.org/docs/url/developers/gitlab-ide/', from: '/teams/url/gitlab-ide/'},
          {to: 'https://ojosproject.org/docs/url/developers/installing-wsl/', from: '/teams/url/installing-wsl/'},
          {to: 'https://ojosproject.org/docs/url/developers/decrypt-interviews/', from: '/teams/url/decrypt-interviews/'},
          {to: 'https://ojosproject.org/docs/url/developers/ssh-setup/', from: '/teams/url/ssh-setup/'},
          {to: 'https://ojosproject.org/docs/url/developers/updating-docs/', from: '/teams/url/updating-docs/'},
          {to: 'https://ojosproject.org/docs/url/requirements/', from: '/teams/url/requirements/README'},
          {to: 'https://ojosproject.org/docs/url/requirements/interviews', from: '/teams/url/requirements/interviews'},
          {to: 'https://ojosproject.org/docs/policies/inf199-acknowledgement', from: '/teams/url/inf199-acknowledgement'},
          {to: 'https://ojosproject.org/docs/url/', from: '/teams/url/'},
          {to: 'https://ojosproject.org/docs/url/research/', from: '/teams/research/'},
          {to: 'https://ojosproject.org/docs/url/requirements/', from: '/teams/url/requirements/'},
          {to: 'https://ojosproject.org/docs/url/developers/updating-news/', from: '/url/developers/webdev/adding-to-news/'},

          // The content below is meant to replace the `/src/pages/` folder in
          // this repo. It replaces various `/docs/...` URLs we used to have.
          {to: 'https://ojosproject.org/', from: '/docs/welcome/'},
          {to: 'https://ojosproject.org/docs/url/glossary/', from: '/docs/glossary/'},
          {to: 'https://ojosproject.org/docs/url/research/', from: '/docs/teams/research/'},
          {to: 'https://ojosproject.org/docs/url/research/', from: '/docs/teams/research/reasearching-and-reporting/'},
          {to: 'https://ojosproject.org/docs/url/requirements/', from: '/docs/teams/url/requirements/'},
          {to: 'https://ojosproject.org/docs/url/requirements/interviews/', from: '/docs/teams/url/requirements/interviews/'},
          {to: 'https://ojosproject.org/docs/url/developers/updating-news/', from: '/docs/teams/url/adding-to-news/'},
          {to: 'https://ojosproject.org/docs/url/developers/decrypt-interviews/', from: '/docs/teams/url/decrypt-interviews/'},
          {to: 'https://ojosproject.org/docs/url/developers/gitlab-ide/', from: '/docs/teams/url/gitlab-ide/'},
          {to: 'https://ojosproject.org/docs/url/', from: '/docs/teams/url/'},
          {to: 'https://ojosproject.org/docs/url/developers/installing-wsl/', from: '/docs/teams/url/installing-wsl/'},
          {to: 'https://ojosproject.org/docs/url/', from: '/docs/teams/url/raspberry-pi/'},
          {to: 'https://ojosproject.org/docs/url/developers/ssh-setup/', from: '/docs/teams/url/ssh-setup/'},
          {to: 'https://ojosproject.org/docs/url/developers/updating-docs/', from: '/docs/teams/url/updating-docs/'},

          // The content below redirects from docs.ojosproject.org to ojosproject.org
          {to: "https://ojosproject.org/docs/policies/git/", from: "/policies/git/"},
          {to: "https://ojosproject.org/docs/policies/image/", from: "/policies/image/"},
          {to: "https://ojosproject.org/docs/policies/inf199-acknowledgement/", from: "/policies/inf199-acknowledgement/"},
          {to: "https://ojosproject.org/docs/policies/paperwork/", from: "/policies/paperwork/"},
          {to: "https://ojosproject.org/docs/policies/structure/", from: "/policies/structure/"},
          {to: "https://ojosproject.org/docs/policies/team-docs/", from: "/policies/team-docs/"},
          {to: "https://ojosproject.org/docs/policies/url-lab-attendance/", from: "/policies/url-lab-attendance/"},
          {to: "https://ojosproject.org/docs/url/", from: "/url/"},
          {to: "https://ojosproject.org/docs/url/proposal/", from: "/url/proposal/"},
          {to: "https://ojosproject.org/docs/url/members/", from: "/url/members/"},
          {to: "https://ojosproject.org/docs/url/getting-started/", from: "/url/getting-started/"},
          {to: "https://ojosproject.org/docs/url/glossary", from: "/url/glossary"},
          {to: "https://ojosproject.org/docs/url/engineering/", from: "/url/engineering/"},
          {to: "https://ojosproject.org/docs/url/engineering/getting-started/", from: "/url/engineering/getting-started/"},
          {to: "https://ojosproject.org/docs/url/requirements/", from: "/url/requirements/"},
          {to: "https://ojosproject.org/docs/url/requirements/interviews/", from: "/url/requirements/interviews/"},
          {to: "https://ojosproject.org/docs/url/research/", from: "/url/research/"},
          {to: "https://ojosproject.org/docs/url/research/chalubot", from: "/url/research/chalubot/"},
          {to: "https://ojosproject.org/docs/url/research/getting-started/", from: "/url/research/getting-started/"},
          {to: "https://ojosproject.org/docs/url/research/git-credit/", from: "/url/research/git-credit/"},
          {to: "https://ojosproject.org/docs/url/research/notes/0/", from: "/url/research/notes/0/"},
          {to: "https://ojosproject.org/docs/url/research/notes/1/", from: "/url/research/notes/1/"},
          {to: "https://ojosproject.org/docs/url/research/notes/2/", from: "/url/research/notes/2/"},
          {to: "https://ojosproject.org/docs/url/research/notes/3/", from: "/url/research/notes/3/"},
          {to: "https://ojosproject.org/docs/url/research/notes/5/", from: "/url/research/notes/5/"},
          {to: "https://ojosproject.org/docs/url/developers/", from: "/url/developers/"},
          {to: "https://ojosproject.org/docs/url/developers/c4-model/", from: "/url/developers/design/c4-model/"},
          {to: "https://ojosproject.org/docs/url/developers/decrypt-interviews/", from: "/url/developers/guides/decrypt-interviews/"},
          {to: "https://ojosproject.org/docs/url/developers/gitlab-ide/", from: "/url/developers/guides/gitlab-ide/"},
          {to: "https://ojosproject.org/docs/url/developers/gravatar/", from: "/url/developers/guides/gravatar"},
          {to: "https://ojosproject.org/docs/url/developers/installing-wsl/", from: "/url/developers/guides/installing-wsl/"},
          {to: "https://ojosproject.org/docs/url/developers/linux-filesystem/", from: "/url/developers/guides/linux-filesyatem/"},
          {to: "https://ojosproject.org/docs/url/developers/ssh-setup/", from: "/url/developers/guides/ssh-setup/"},
          {to: "https://ojosproject.org/docs/url/developers/updating-news/", from: "/url/developers/guides/updating-news/"},
          {to: "https://ojosproject.org/docs/url/developers/any-linux-system/", from: "/url/developers/proposals/any-linux-system/"},
          {to: "https://ojosproject.org/docs/url/developers/git-transition/", from: "/url/developers/webdev/git-transition"},
          {to: "https://ojosproject.org/docs/url/developers/members-json/", from: "/url/developers/webdev/members-json/"},
          {to: "https://ojosproject.org/docs/url/developers/updating-docs/", from: "/url/developers/webdev/updating-docs/"},
        ]
      }
    ]
  ],
};

export default config;
