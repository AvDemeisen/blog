module.exports = {
    siteMetadata: {
      title: `blog`,
      description: `blog built with gatsby.js`,
      author: `@gAvDemeisen`,
    },
    plugins: [
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-styled-components`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
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
      }
    ],
  }
  