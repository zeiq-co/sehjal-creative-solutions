module.exports = {
  siteMetadata: {
    title: `Sehjal Creative Solutions`,
    titleTemplate: "%s",
    description: `We're on a mission to make the web beautiful.`,
    image: "/slogo.png",
    twitterUsername: "@Zeiqofficial",
    siteUrl: "https://demos.simplecode.io/gatsby/crafty",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/data/`,
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sehjal Creative Solutions`,
        short_name: `SCS`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
