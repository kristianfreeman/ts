import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default () => {
  return (
    <StaticQuery
      query={query}
      render={({
        file: {
          childImageSharp: { fluid },
        },
      }) => (
        <div
          style={{
            height: fluid.presentationHeight,
            width: fluid.presentationWidth,
            marginRight: "10px",
          }}
        >
          <Img
            fluid={fluid}
            imgStyle={{
              height: fluid.presentationHeight,
              width: fluid.presentationWidth,
            }}
          />
        </div>
      )}
    />
  )
}

export const query = graphql`
  query Logo {
    file(
      relativePath: { eq: "logo_nobg.png" }
      sourceInstanceName: { eq: "assets" }
    ) {
      childImageSharp {
        fluid(maxHeight: 50, maxWidth: 50) {
          ...GatsbyImageSharpFluid
          presentationHeight
          presentationWidth
        }
      }
    }
  }
`
