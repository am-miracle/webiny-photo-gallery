// require("dotenv").config({
//   path: `.env`,
// })

// module.exports = {
//   siteMetadata: {
//     title: `webiny photo gallery`,
//     siteUrl: `https://www.yourdomain.tld`,
//   },
//   plugins: [
//     {
//       resolve: `gatsby-source-graphql`,
//       options: {
//         typeName: "Webiny",
//         fieldName: "webiny",
//         url: process.env.WEBINY_API_URL,
//         headers: {
//           Authorization: `Bearer ${process.env.WEBINY_API_TOKEN}`
//         }
//       }
//     },
//   ]
// }