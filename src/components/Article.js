import React, { Fragment } from 'react'
import styled from 'styled-components'
import Bio from './Bio'
import Content from './Content'
import ContentWrapper from './ContentWrapper'
import useSiteMetadata from '../hooks/use-site-config'
import useSiteImages from '../hooks/use-site-images'

const ArticleTitle = styled.h1`
  line-height: 1.5;
  font-size: 2rem;
  padding: 20px 0 5px 0;
`

const ArticleFooter = styled.footer`
  position: relative;
  margin: 6rem 0 0;
  padding: 3rem 0 0;
  border-top: 1px solid #ececec;
`

const ArticleCover = styled.div`
  width: auto;
  height: 200px;
  background: #c5d2d9 no-repeat 50%;
  background-size: cover;
  border-radius: 5px 5px 0 0;
`

const Article = ({ post }) => {
  const { siteCover } = useSiteMetadata()
  const { fluid } = useSiteImages(siteCover)
  const heroImg =
    (post.frontmatter.cover && post.frontmatter.cover.publicURL) || fluid.src

  return (
    <Fragment>
      <ArticleCover style={{ backgroundImage: `url("${heroImg}")` }} />
      <ContentWrapper>
        <ArticleTitle>{post.frontmatter.title}</ArticleTitle>
        <Content
          content={post.body}
          date={post.frontmatter.date}
          tags={post.frontmatter.tags}
          translations={post.frontmatter.translations}
        />
        <ArticleFooter>
          <Bio />
        </ArticleFooter>
      </ContentWrapper>
    </Fragment>
  )
}

export default Article
