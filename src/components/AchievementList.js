import React from 'react'
import styled from 'styled-components'

import AchievementListItem from './AchievementListItem'

const Wrapper = styled.div`
  padding: 20px 24px;
  --dimension: 64px;

  @media (min-width: 640px) {
    padding: 32px 24px;
    --dimension: 80px;
  }
`

const Inner = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, var(--dimension));
  grid-template-rows: max-content repeat(10, 0px);
  -webkit-box-pack: justify;
  justify-content: space-between;
  column-gap: 20px;
`

class AchievementList extends React.Component {
  render() {
    const { achievements } = this.props

    return (
      <Wrapper>
        <Inner>
          {achievements.map(achievement => {
            return <AchievementListItem key={achievement.id} {...achievement} />
          })}
        </Inner>
      </Wrapper>
    )
  }
}
export default AchievementList
