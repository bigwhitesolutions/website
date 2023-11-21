import type { GatsbyConfig, PluginRef } from "gatsby"
import "dotenv/config"

const config: GatsbyConfig = {
  jsxRuntime: "automatic",
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // Of course you can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/master/themes/gatsby-theme-cara/gatsby-config.js
    siteTitleAlt: `bigwhitesolutions.com`,
    siteHeadline: `Big White Solutions`,
    siteUrl: `https://bigwhitesolutions.com`,
    siteTitle: `Big White Solutions`,
    author: '@shaunpearsondev',
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    siteDescription: `Company Website`,
  },
  trailingSlash: `never`,
  plugins: [
    // {
    //   resolve: `@lekoarts/gatsby-theme-cara`,
    //   // See the theme's README for all available options
    //   options: {},
    // },
    `gatsby-plugin-theme-ui`,
    {
      resolve: "gatsby-theme-bwsportfolio",
      options: {
        contentPath: `${__dirname}/src/content` // the path to your markdown files
      }
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `Big White Solutions`,
    //     short_name: `Shaun`,
    //     description: `Company Website`,
    //     start_url: `/`,
    //     display: `standalone`,
    //     icons: [
    //       {
    //         src: `/android-chrome-192x192.png`,
    //         sizes: `192x192`,
    //         type: `image/png`,
    //       },
    //       {
    //         src: `/android-chrome-512x512.png`,
    //         sizes: `512x512`,
    //         type: `image/png`,
    //       },
    //     ],
    //   },
    // },
    // {
    //   resolve: "gatsby-plugin-typography",
    //   options: {
    //     pathToConfigModule: "src/utils/typography.js"
    //   }
    // },

  ].filter(Boolean) as Array<PluginRef>,
}
export default config
