import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: '寧靜居',
  tagline: '長期、穩定、流暢的 Minecraft 生存伺服器 Wiki',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://twcraft.net/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'cj0673', // Usually your GitHub org/user name.
  projectName: 'twcraft-wiki', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hant',
    locales: ['zh-Hant'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/cj0673/twcraft-wiki/blob/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-V4F6MTCNTQ',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    announcementBar: {
      id: 'support_us',
      content:
        '🛠️ Wiki 還在更新！有任何想法歡迎到 Discord 找我討論',
      backgroundColor: '#fafbfc',
      textColor: '#091E42',
      isCloseable: false,
    },
    metadata: [
      { name: 'description', content: '寧靜居 Wiki：長期、穩定、流暢的 Minecraft 生存伺服器' },
      { name: 'keywords', content: '寧靜居, Minecraft 寧靜居伺服器, 生存, 原味生存, Minecraft 伺服器, Minecraft 建築生存伺服器, Minecraft 領地飛行伺服器' },
    ],
    navbar: {
      title: '寧靜居',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Wiki',
        },
        {
          href: 'https://github.com/cj0673/twcraft-wiki',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          label: 'McList',
          href: 'https://www.mc-list.xyz/2209/info',
        },
        {
          label: '巴哈姆特',
          href: 'https://forum.gamer.com.tw/C.php?bsn=18673&snA=202486&tnum=64&subbsn=18',
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  headTags: [
    // Declare a <link> preconnect tag
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://twcraft.net/',
      },
    },
    // Declare some json-ld structured data
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org/',
        '@type': 'GameServer',
        "name": "寧靜居",
        "url": "https://twcraft.net/",
        "description": "寧靜居是一個長期、穩定、流暢的 Minecraft 伺服器。專注於原味生存，擁有領地飛行、防噴防爆、經濟系統、浮動物價商店。為玩家提供輕鬆、溫暖、像家的遊戲體驗",
        "game": "Minecraft",
        "serverStatus": "Online",
        "additionalType": "Survival Server"
      }),
    },
  ],
};

export default config;
