import React from "react"
import Layout from "../components/layout"

export default function recipeTemplate({data}) {
    const recipe = data.contentfulRecipes
    return (
        <Layout>
            <div class="text-center">
            <h1>{recipe.name}</h1>
            <img id="imgSecondary" src={recipe.image.file.url} alt={recipe.name} class="img-thumbnail" />
            <p>
                {recipe.description.description}
            </p>
            </div>
        </Layout>
    )
}

export const query = graphql`
query recipeQuery($slug: String!) {
    contentfulRecipes(name: {eq: $slug}) {
        name,
        description {
            description
        }
        image {
            file{
                url
            }
            title
        }
    }
}
`