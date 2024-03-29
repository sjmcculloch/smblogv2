import React from 'react'
import { graphql } from 'gatsby'

import Cover from '../components/Cover'
import Layout from '../components/layout'
import Content from '../components/Content'
import Wrapper from '../components/Wrapper'
import ContentWrapper from '../components/ContentWrapper'
import SEO from '../components/SEO'
import PageTitle from '../components/PageTitle'

const Page = props => {
  const page = props.data.page

  return (
    <Layout location={props.location}>
      <SEO
        title={page.frontmatter.title}
        description={page.excerpt}
        path={page.frontmatter.slug}
        cover={page.frontmatter.cover && page.frontmatter.cover.publicURL}
      />

      <Wrapper>
        <Cover
          heroImg={page.frontmatter.cover && page.frontmatter.cover.publicURL}
          title={page.frontmatter.title}
        />
        <ContentWrapper>
          <PageTitle>{page.frontmatter.title}</PageTitle>
          <Content content={page.body} date={page.frontmatter.date} />
        </ContentWrapper>
      </Wrapper>
    </Layout>
  )
}
export default Page

export const pageQuery = graphql`
  query ($slug: String!) {
    page: mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      excerpt
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        slug
        cover {
          publicURL
        }
      }
    }
  }
`
