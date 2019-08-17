import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

import showdown from "showdown"

const converter = new showdown.Converter()

const MarkdownContent = ({ content, style }) => (
  <div
    style={style}
    dangerouslySetInnerHTML={{ __html: converter.makeHtml(content) }}
  />
)

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <div
          style={{
            alignItems: "center",
            display: "flex",
            marginTop: "4rem",
          }}
        >
          <div
            style={{
              flex: 1,
              marginRight: "16px",
              maxHeight: featuredImgFluid.presentationHeight,
              maxWidth: featuredImgFluid.presentationWidth,
            }}
          >
            <Img
              fluid={featuredImgFluid}
              imgStyle={{
                border: "3px hsla(0,0%,0%,0.5) solid",
                borderRadius: "999px",
              }}
            />
          </div>
          <h1 style={{ flex: 1, ...scale(2), marginTop: rhythm(1) }}>
            {post.frontmatter.title}
          </h1>
        </div>

        <MarkdownContent
          content={post.frontmatter.description}
          style={{
            display: `block`,
            ...scale(1 / 3),
            marginBottom: "10px",
          }}
        />

        <p
          style={{
            display: `block`,
            marginBottom: "4rem",
          }}
        >
          Published {post.frontmatter.date}
        </p>

        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio />

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        featuredImage {
          childImageSharp {
            fluid(maxHeight: 50, maxWidth: 50) {
              ...GatsbyImageSharpFluid
              presentationHeight
              presentationWidth
            }
          }
        }
      }
    }
  }
`
