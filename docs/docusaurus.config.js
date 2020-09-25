module.exports = {
  title: "Aurora",
  tagline: "Aurora Design Guidelines by Grape",
  url: "https://aurora.grape.io",
  baseUrl: "./",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "ubergrape",
  projectName: "aurora", // Usually your repo name.
  themes: ["@docusaurus/theme-live-codeblock"],
  themeConfig: {
    navbar: {
      title: "Aurora",
      logo: {
        alt: "Aurora Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          href: "https://github.com/ubergrape/grape-ds",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Style Guide",
              to: "docs/",
            },
            {
              label: "Second Doc",
              to: "docs/doc2/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/ubergrape/grape-ds",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Grape, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          docLayoutComponent: require.resolve("./src/components/layout.js"),

          // Please change this to your repo.
          editUrl: "https://github.com/ubergrape/grape-ds/tree/main/docs/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
