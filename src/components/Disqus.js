import React from 'react'
import Disqus from 'disqus-react'
import useSiteMetadata from '../hooks/use-site-config'
import styled from 'styled-components'

const Wrapper = styled.article`
  padding: 30px;

  @media only screen and (max-width: 500px) {
    padding: 0;
  }
`

const DisqusWrapper = props => {
  const { disqusShortname, disqusSiteUrl } = useSiteMetadata()

  if (!disqusShortname) {
    return null
  }
  const disqusConfig = {
    url: `${disqusSiteUrl}${props.slug}`,
    title: props.title,
  }

  return (
    <Wrapper>
      <Disqus.DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </Wrapper>
  )
}

export default DisqusWrapper
