/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, description, social } = data.site.siteMetadata
        return (
          <React.Fragment>
            <div
              style={{
                display: `flex`,
                marginBottom: rhythm(0.5),
              }}
            >
              <Image
                fixed={data.avatar.childImageSharp.fixed}
                alt={author}
                style={{
                  marginRight: rhythm(1 / 2),
                  marginBottom: 0,
                  minWidth: 50,
                  borderRadius: `100%`,
                }}
                imgStyle={{
                  borderRadius: `50%`,
                }}
              />
              <p>
                {description}
                {` `}
                <a href={`https://twitter.com/${social.twitter}`}>
                  Follow us on Twitter!
                </a>
              </p>
            </div>
            <div
              style={{
                display: `flex`,
                marginBottom: rhythm(2.5),
              }}
            >
              <p>
                <a href={social.newsletter}>
                  Join our mailing list to get new interviews and stories
                  directly in your inbox.
                </a>
              </p>
            </div>
          </React.Fragment>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/logo_nobg.png/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        description
        social {
          newsletter
          twitter
        }
      }
    }
  }
`

export default Bio
