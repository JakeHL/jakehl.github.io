/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-typescript',
    'gatsby-plugin-fontawesome-css',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Averia Serif Libre:700', 'Ubuntu:400,700'],
      },
    },
  ],
};
