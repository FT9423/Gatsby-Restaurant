import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function Home({data}) {
    return (
        <Layout>

        <div class="row">
        {data.allContentfulRecipes.nodes.map((node, index) => (
            <div class="col-md-4">
              <div class="card text-white bg-dark mb-3">
                <img id="imgMain" class="card-img-top"  src={ node.image.file.url } alt={ node.name } data-holder-rendered="true" />
                <div class="card-body ">
                  <p class="card-text">{node.name}</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <a href={node.name} id="MenuBtn" class="btn btn-sm btn-outline-secondary"></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        ))}
        </div>
 
        </Layout>
    )
}

export const query = graphql`
query MyQuery {
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
  `