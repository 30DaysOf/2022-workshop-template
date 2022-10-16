// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// CONFIG: Set for use in themeConfig: prism
//    Pick: https://github.com/FormidableLabs/prism-react-renderer/tree/master/src/themes
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/vsDark");

// USAGE: Config object can be accessed via React context as `{siteConfig}`
//   See: https://docusaurus.io/docs/configuration#custom-configurations
/** @type {import('@docusaurus/types').Config} */
const config = {

  // CONFIG: Add Custom Fields - globally reference them from siteConfig
  //    See: https://docusaurus.io/docs/deployment#using-environment-variables
  customFields: {
    description: "This specification defines a use case for a fictional rentals portals app.",
  },

   // CONFIG: Landing Pages uses this (also globally via siteConfig)
  title: 'Learn In #30Days',
  tagline: 'Plan Roadmaps - Document Progress',

  // CONIFIG; GitHub Pages
  url: 'https://30DaysOf.github.io',
  baseUrl: '/template/',  // template/
  favicon: 'img/favicon.ico',
  organizationName: 'f30DaysOf', 
  projectName: 'template', 
  deploymentBranch: 'gh-pages',

  // CONFIG: Early detection for site health
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // CONFIG: Set presets for chosen theme
  presets: [
    [
      // -- START presets-classic options ----
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({

        // CONFIG: docs = collections of pages, tutorials, documentation
        //    See: https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs
        //    See: https://docusaurus.io/docs/docs-introduction#docs-only-mode
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },

        // CONFIG: blog = timestamped pages, tags, site feed 
        //    See: https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog
        blog: false,

        // CONFIG: theme = currently using `classic`
        //    See: https://docusaurus.io/docs/api/themes/@docusaurus/theme-classic
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
       // -- END presets-classic options ----
    ],
  ],

  // CONFIG: theme = set properties for UI like navbar, footer, docs, copyright etc.
  //    See: https://docusaurus.io/docs/api/docusaurus-config#themeConfig
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

      docs :{
        sidebar: {
          hideable: false,
          autoCollapseCategories: false,
        },
      },

      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },

      navbar: {
        title: 'In #30Days',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
          target: '_self',
          width: 32,
          height: 32,
        },
        style: 'primary',

        items: [
          {
            type: 'doc',
            position: 'left',
            docId: 'week/02',
            label: 'Week 1',
          },
          {
            type: 'doc',
            position: 'left',
            docId: 'week/09',
            label: 'Week 2',
          },
          {
            type: 'doc',
            position: 'left',
            docId: 'week/16',
            label: 'Week 3',
          },
          {
            type: 'doc',
            position: 'left',
            docId: 'week/23',
            label: 'Week 4',
          },
          {
            to: 'landing',
            label: 'Home',
            position: 'right',
          },
          {
            href: 'https://github.com/30DaysOf/template',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },

      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Nitya Narasimhan - Built with Docusaurus - Icons By Undraw.co`,
        links: []
      },

      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),


    // CONFIG: Define plugins
    //    See: https://docusaurus.io/docs/using-plugins
    plugins: [ ],
  };

module.exports = config;
