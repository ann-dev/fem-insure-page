const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Frontend Mentor | Insure landing page`,
    description: `Responsive page design challenge solution`,
    author: `@ganndev`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-layout`,
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),
        pages: path.join(__dirname, "src/pages"),
        assets: path.join(__dirname, "src/assets"),
        components: path.join(__dirname, "src/components"),
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Karla\:400,700`, `DM Serif Display\:400,500,600,700,800,900`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `hsl(256, 26%, 20%)`,
        theme_color: `hsl(256, 26%, 20%)`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon-32x32.png`,
      },
    },
  ],
}
