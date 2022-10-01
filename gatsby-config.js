// const {createProxyMiddleware} = require("http-proxy-middleware");
require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `webiny photo gallery`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        resetCSS: true,
        isUsingColorMode: true,
      },
    }
    ,
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: "Webiny",
        fieldName: "webiny",
        url: process.env.WEBINY_MANAGE_API_URL,
        headers: {
          Authorization: `Bearer ${process.env.WEBINY_API_TOKEN}`
        }
      }
    },
  ],
  // developMiddleware: app => {
  //   app.use(
  //     "/.netlify/functions/",
  //     createProxyMiddleware({
  //       target: "http://localhost:9000",
  //       pathRewrite: {
  //         "/.netlify/functions/": ""
  //       }
  //     })
  //   );
  // },
}