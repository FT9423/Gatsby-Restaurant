/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Golden State Bites',
    description: 'Best in the west restaurant',
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'rrhrm3uztja0',
        accessToken: 'feoWBPlGadJt5XF6-IwNYQ1NdLivR_5npLblsIGdhSs',
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Grandstander`,
            variants: [`400`]
          },
          {
            family: `Noto Sans JP`,
            variants: [`400`]
          },
        ]
      }
    }
  ]
}
