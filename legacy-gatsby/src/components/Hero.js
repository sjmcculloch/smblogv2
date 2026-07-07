import React from 'react'
import styled from 'styled-components'
import useSiteMetadata from '../hooks/use-site-config'
import useSiteImages from '../hooks/use-site-images'
import { colors } from '../tokens'

const HeroContainer = styled.div`
  position: relative;
  display: table;
  width: 100%;
  height: 400px;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
`

const TitleContainer = styled.div`
  display: table-cell;
  vertical-align: bottom;
  text-align: left;
  width: 100%;
  padding: 30px;
`

const HeroTitle = styled.h1`
  font-weight: 700;
  font-size: 1.5rem;
  color: ${colors.black};
  display: inline;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 10px;

  @media only screen and (min-width: 768px) {
    font-size: 2.5rem;
  }
`

const HeroSubTitle = styled.h2`
  margin-top: 20px;
  color: ${colors.white};
  text-shadow: 1px 1px 4px rgba(34, 34, 34, 0.85);
`

const Hero = props => {
  const { siteCover } = useSiteMetadata()
  const { fluid } = useSiteImages(siteCover)
  const heroImg = props.heroImg || fluid.src

  return (
    <HeroContainer style={{ backgroundImage: `url("${heroImg}")` }}>
      <TitleContainer>
        <HeroTitle>{props.title}</HeroTitle>
        {props.subTitle && <HeroSubTitle>{props.subTitle}</HeroSubTitle>}
      </TitleContainer>
    </HeroContainer>
  )
}

export default Hero
