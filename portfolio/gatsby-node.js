const path = require("path");

exports.createPages = async ({ actions, graphql }) => {

  const Category = path.resolve(`src/templates/category.js`);
  const result = await graphql(`
    {
        allDirectory(sort: {fields: base}) {
          edges {
            node {
              id
              base
              dir
              absolutePath
            }
          }
        }
      }`)

  result.data.allDirectory.edges.forEach(({ node }) => {
    console.log('node', node)
    actions.createPage({
      path: node.base,
      component: Category,
      context: { directory: node.absolutePath },
    })
  })
}