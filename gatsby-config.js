module.exports = {
  siteMetadata: {
    title: `Vision 2020 Virtual benefit`,
    description: `Welcome to the KCC Vision 2020 Virtual Benefit!`,
    author: `Kennedy Children Center`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`, 
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
      },
    },
  ]
}
