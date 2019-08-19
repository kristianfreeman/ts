/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import removeMd from "remove-markdown"

function SEO({ description, lang, meta, title }) {
  const {
    file: {
      childImageSharp: { fluid },
    },
    site,
  } = useStaticQuery(
    graphql`
      query {
        file(
          relativePath: { eq: "social.png" }
          sourceInstanceName: { eq: "assets" }
        ) {
          childImageSharp {
            fluid(quality: 100) {
              src
            }
          }
        }
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const socialMetaDescription = removeMd(metaDescription)
  const url = site.siteMetadata.siteUrl.slice(0, -1)
  const siteTitle = title
    ? `${title} | ${site.siteMetadata.title}`
    : site.siteMetadata.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={siteTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: siteTitle,
        },
        {
          property: `og:description`,
          content: socialMetaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: url + fluid.src,
        },
        {
          property: `twitter:image`,
          content: url + fluid.src,
        },
        {
          property: `twitter:description`,
          content: socialMetaDescription,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:site`,
          content: "@_serverless",
        },
        {
          name: `twitter:title`,
          content: siteTitle,
        },
        {
          name: `twitter:description`,
          content: socialMetaDescription,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
