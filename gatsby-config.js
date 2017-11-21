module.exports = {
  siteMetadata: {
    title: `Gatsby with Contentful`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `mzpqy30ecdy8`,
        accessToken: `be20f7068b5c9e19667ff40d871d81691804d1f31931aaba862fb5abde6a8d80`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
