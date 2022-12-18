module.exports = {
  siteMetadata: {
    title: `HIDDEN OUTSIDER`,
    description: `Blog site by Kotani Hideaki.`,
    lang:`ja`,
    siteUrl: `https://lively-dango-8cf079.netlify.app`,
    locale: `ja_JP`,
    fbappid: `XXXXXXXXXXXXXXXXXXXXX`,
  },
  plugins: [
    `gatsby-plugin-twitter`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds:["G-GRFE5WKDV4"],
        pluginConfig:{
          head:true,
        },
      },
    },
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
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hidden_Outsider written by Kotani Hideaki.`,
        short_name: `Hidden_Outsider`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#63345ecc`,
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
