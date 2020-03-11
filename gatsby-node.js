const path = require("path");

exports.createPages = ({ actions, graphql }) => {

    const Category = path.resolve(`src/templates/category.js`);

    console.log('Creating Pages');
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
            path: node.fields.base,
            component: Category,
            context: { path: node.absolutePath },
        })
    })
}