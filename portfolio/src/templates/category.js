import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Thumbnails from "../components/thumbnails";

const Category = ({ pageContext, data }) => {
  return (<Layout><Thumbnails query={data} /></Layout>)
}

export default Category;

export const pageQuery = graphql`
query PhotosInFolder($path: String!){
  allFile(filter: {dir: {eq: $path}}) {
    edges {
      node {
        id
        childImageSharp {
          fluid {
            srcSet
            src
            base64
            aspectRatio
            sizes
          }
        }
        base
        dir
      }
    }
  }
}`;
