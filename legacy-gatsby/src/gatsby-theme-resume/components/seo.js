/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={'Scott McCulloch Resume'}
      meta={[
        {
          name: `description`,
          content: `I'm Scott, an Australian Software Engineer with 20+ years of experience developing web-based applications...`,
        },
        {
          property: `og:title`,
          content: `Scott McCulloch resume`,
        },
        {
          property: `og:description`,
          content: `I'm Scott, an Australian Software Engineer with 20+ years of experience developing web-based applications...`,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: `@_maxpou`,
        },
        {
          name: `twitter:title`,
          content: `Scott McCulloch resume`,
        },
        {
          name: `twitter:description`,
          content: `I'm Scott, an Australian Software Engineer with 20+ years of experience developing web-based applications...`,
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
