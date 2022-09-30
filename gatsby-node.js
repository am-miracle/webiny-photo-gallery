exports.createPages = async function ({ actions, graphql }) {
    const { data } = await graphql(`
      query {
        webiny {
            listPhotos {
              data {
                slug
              }
            }
        }
      }
    `)
    data.webiny.listPhotos.data.forEach(data => {
      const slug = data.slug
      actions.createPage({
        path: slug,
        component: require.resolve(`./src/templates/single-photo.js`),
        context: { slug: slug },
      })
    })
  }