
 const query = require("./utils/query");

 const GET_PHOTOS = `
    query {
      listPhotos {
        data {
          image
          slug
          id
          name
        }
      }
    }
 `;

  exports.handler = async () => {
     const { data, errors } = await query(GET_PHOTOS);

     if (errors) {
        return {
          statusCode: 500,
          body: JSON.stringify(errors)
        };
     }

     return {
       statusCode: 200,
       body: JSON.stringify({ messages: data.allMessages.data })
     };
   };
