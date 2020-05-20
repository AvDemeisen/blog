module.exports = {
  siteMetadata: {
    title: `blog`,
    description: `blog template built with gatsby.js`,
    author: `@gAvDemeisen`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `blog`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#1a1a1a`,
        theme_color: `#1a1a1a`,
        display: `minimal-ui`
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `110378empla4`,
        accessToken: 'w1UNDG6MiOyblAiSBw2Qeghed_SNgkFgrtgwxBJqkLM',
        downloadLocal: true,
      },
    },
  ],
}
