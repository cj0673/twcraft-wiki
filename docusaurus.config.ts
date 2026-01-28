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
  onBrokenAnchors: 'warn',

  trailingSlash: false,

  i18n: {
    defaultLocale: 'zh-Hant',
    locales: ['zh-Hant'],
  },

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
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
          showLastUpdateTime: true,
          showLastUpdateAuthor: false,
        },
        blog: false,
        sitemap: {
          lastmod: 'date',
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-V4F6MTCNTQ',
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/social-card.png',
    metadata: [
      { name: 'description', content: '寧靜居 Minecraft 伺服器 Wiki：致力於打造一個長期穩定、流暢且溫暖的 Java 版社群' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: '寧靜居 Wiki' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'theme-color', content: '#2e8555' },
      { name: 'keywords', content: '寧靜居, 寧靜居 Wiki, Minecraft 寧靜居伺服器, 生存, 原味生存, Minecraft 伺服器, Minecraft 建築生存伺服器, Minecraft 領地飛行伺服器' },
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

  future: {
    v4: {
      useCssCascadeLayers: true,
    },
  },

  headTags: [
    // Organization structured data - improves search engine understanding
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org/',
        '@type': 'Organization',
        'name': '寧靜居',
        'url': 'https://twcraft.net/',
        'logo': 'https://twcraft.net/img/favicon.ico',
        'description': '長期、穩定、流暢的 Minecraft 生存伺服器',
        'sameAs': ['https://github.com/cj0673/twcraft-wiki'],
      }),
    },
    // GameServer structured data
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org/',
        '@type': 'GameServer',
        'name': '寧靜居',
        'url': 'https://twcraft.net/',
        'description': '寧靜居是一個長期、穩定、流暢的 Minecraft 伺服器。專注於原味生存，擁有領地飛行、防噴防爆、經濟系統、浮動物價商店。為玩家提供輕鬆、溫暖、像家的遊戲體驗',
        'game': 'Minecraft',
        'serverStatus': 'Online',
        'additionalType': 'Survival Server',
      }),
    },
    // BreadcrumbList for better SEO and navigation
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org/',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': '首頁',
            'item': 'https://twcraft.net/'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': '遊戲指南',
            'item': 'https://twcraft.net/gameguide/origin'
          }
        ]
      }),
    },
  ],
};

export default config;
