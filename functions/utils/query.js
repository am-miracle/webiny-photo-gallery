 // query.js

 const axios = require("axios");
 require("dotenv").config();

 module.exports = async (query, variables) => {
   const result = await axios({
       url: "https://d1fejo6q06lu6w.cloudfront.net/cms/manage/en-US",
       method: "POST",
       headers: {
           Authorization: `Bearer ${process.env.WEBINY_API_TOKEN}`
       },
       data: {
         query,
         variables
       }
  });

  return result.data;
 };
