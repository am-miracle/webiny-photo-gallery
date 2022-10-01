// createPhoto.js

const query = require("./utils/query");

const CREATE_PHOTO = `
  mutation ($name:String!,$image:String!){
    createPhoto(data:{name:$name,image:$image}){
      data {
        slug
        name
        image
      }
    }
  }
`;

exports.handler = async event => {
  const { name, image, slug } = JSON.parse(event.body);
  const { data, errors } = await query(CREATE_PHOTO, { name, image, slug });

  if (errors) {
    return {
      statusCode: 500,
      body: JSON.stringify(errors)
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ createPhoto: data.createPhoto })
  };
};
// mutation($photoInput: PhotoInput!){
//   createPhoto(data: $photoInput}){
//     id
//     name
//     image
//   }
// }