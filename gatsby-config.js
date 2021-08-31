const path = require("path");
const pathPrefix = "/";
const siteMetadata = {
  title: "Gatsby Starter for Gatsby Theme Primer Wiki",
  shortName: "Wiki",
  description:
    "A starter that use gatsby-theme-primer-wiki",
  twitterName: "theowenyoung",
  imageUrl: "/graph-visualisation.jpg",
  siteUrl: "https://demo-gatsby-starter-primer-wiki.owenyoung.com",
};
module.exports = {
  siteMetadata,
  pathPrefix,
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `./content`,
      },
    },
    {
      resolve: "gatsby-theme-primer-wiki",
      options: {
        nav: [
      
          {
            title: "Github",
            url: "https://github.com/theowenyoung/gatsby-starter-primer-wiki/",
          },
          {
            title: "Twitter",
            url: "https://twitter.com/theowenyoung",
          },
        ],
        editUrl: "https://github.com/theowenyoung/gatsby-starter-primer-wiki/tree/main/",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: siteMetadata.title,
        short_name: siteMetadata.shortName,
        start_url: pathPrefix,
        background_color: `#f7f0eb`,
        display: `standalone`,
        icon: path.resolve(__dirname, "./static/logo.png"),
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: siteMetadata.siteUrl,
        sitemap: `${siteMetadata.siteUrl}/sitemap/sitemap-index.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
  ],
};
