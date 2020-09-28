const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const recipeTemplate = path.resolve('src/templates/recipeTemplate.js')

    return graphql(`
        {
            allContentfulRecipes(sort: {fields: contentful_id, order: DESC}) {
                nodes {
                    name
                    description {
                        description
                    }
                    image {
                        file {
                            url
                        }
                    }
                }
            }
        }
    `).then(result => {
        if (result.errors) {
            return Promise.reject(results.errors)
        }

        result.data.allContentfulRecipes.nodes.forEach((node) => {
            createPage({
                path: node.name,
                component: recipeTemplate,
                context: {
                    slug: node.name
                },
            })
        })
    })
    .catch(error => {
        console.log("Error retrieving contentful data", error);
    });
} 