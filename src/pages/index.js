import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Markdown from "../components/markdown"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    const publishedPosts = posts.filter(
      ({ node }) => new Date(node.frontmatter.date) < Date.now()
    )

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <Bio />
        {publishedPosts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          let featuredImgFluid =
            node.frontmatter.featuredImage.childImageSharp.fluid
          return (
            <div key={node.fields.slug} style={{ paddingBottom: "1rem" }}>
              <div
                class="mobile-hide"
                style={{
                  flex: 1,
                  marginRight: "16px",
                  marginBottom: "16px",
                  maxHeight: featuredImgFluid.presentationHeight,
                  maxWidth: featuredImgFluid.presentationWidth,
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  <Img
                    fluid={featuredImgFluid}
                    imgStyle={{
                      border: "3px hsla(0,0%,0%,0.5) solid",
                      borderRadius: "999px",
                    }}
                  />
                </Link>
              </div>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <Markdown
                content={node.frontmatter.description || node.excerpt}
              />
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            featuredImage {
              childImageSharp {
                fluid(maxHeight: 100, maxWidth: 100) {
                  ...GatsbyImageSharpFluid
                  presentationHeight
                  presentationWidth
                }
              }
            }
          }
        }
      }
    }
  }
`
