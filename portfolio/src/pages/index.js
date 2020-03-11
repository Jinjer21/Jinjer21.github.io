import React from "react"
import Layout from "../components/layout"
import Thumbnails from "../components/thumbnails"
import { graphql, useStaticQuery } from "gatsby"

export default () => {
  const query = useStaticQuery(graphql`query {
        allFile{
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
            }
          }
        }
      }`);

  return (<Layout><Thumbnails query={query}></Thumbnails></Layout>
  )
}