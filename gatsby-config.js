module.exports = {
  siteMetadata: {
    title: `HIDDEN OUTSIDER`,
    description: `Blog site by Kotani Hideaki.`,
    lang:`ja`,
    siteUrl: `https://********.netlify.app`,
    locale: `ja_JP`,
    fbappid: `XXXXXXXXXXXXXXXXXXXXX`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Major Mono Display`,
        ],
        display: 'block',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hidden_Outsider written by Kotani Hideaki.`,
        short_name: `Hidden_Outsider`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#461859`,
        display: `standalone`,
        icon: `src/images/introduction.jpeg`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST,
      },
    },
  ],
}
