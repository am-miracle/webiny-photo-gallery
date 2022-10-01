// updatePhoto.js

const query = require("./utils/query");

exports.handler = async event => {
  const { id, name, image } = JSON.parse(event.body);
  const { data, errors } = await query(UPDATE_PHOTO, { id, name, image });

  if (errors) {
    return {
      statusCode: 500,
      body: JSON.stringify(errors)
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ updatePhoto: data.updatePhoto })
  };
};
