module.exports = {
  title: "Aurora",
  tagline: "Grape's design system",
  url: "https://aurora.ubergrape.com",
  baseUrl: "/",
  onBrokenLinks: "ignore",
  favicon: "img/favicon.ico",
  organizationName: "UberGrape GmbH",
  projectName: "aurora",
  themes: ["@docusaurus/theme-live-codeblock"],
  themeConfig: {
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
    },
    navbar: {
      title: "Aurora",
      logo: {
        alt: "Grape logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "doc",
          position: "left",
          docId: "design-principles",
          label: "Design",
        },
        {
          type: "doc",
          position: "left",
          docId: "components/action-link",
          label: "Components",
        },
        {
          type: "doc",
          position: "left",
          docId: "resources",
          label: "Resources",
        },
        {
          to: "/storybook",
          target: "_blank",
          label: "Development",
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Design",
              to: "docs/design-principles",
            },
            {
              label: "Development",
              to: "/storybook",
              target: "_blank",
            },
          ],
        },
        {
          title: "Get in touch",
          items: [
            {
              label: "Grape",
              href: "https://grape.io",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/chatgrapecom",
            },
          ],
        },
        {
          title: "Resources on GitHub",
          items: [
            {
              label: "React components",
              href: "https://github.com/ubergrape/grape-ds",
            },
            {
              label: "Icons",
              href: "https://github.com/ubergrape/grape-icons",
            },
          ],
        },
      ],
      copyright: `Grape Design &bull; Aurora © ${new Date().getFullYear()} UberGrape GmbH`,
    },
  },
  stylesheets: [
    '/css/fonts.css',
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          docLayoutComponent: require.resolve("./src/components/layout.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
