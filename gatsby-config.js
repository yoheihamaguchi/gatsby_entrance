/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Dev Blog",
    description: "Gatsbyで作成したブログサイト",
    author: "hamaguchi"
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        accessToken: process.env.GATSBY_CONTENTFUL_API_KEY,
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,
        plugins: [],
      },
    },
  ],
}