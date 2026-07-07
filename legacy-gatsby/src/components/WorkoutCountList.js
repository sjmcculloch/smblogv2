import React, { Fragment } from 'react'
import styled from 'styled-components'

import WorkoutCountListItem from './WorkoutCountListItem'

const WorkoutWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 40px;
  clip-path: inset(0px 20px);
  padding: 0;

  @media (min-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
    row-gap: 24px;
    clip-path: none;
  }
`

class WorkoutCountList extends React.Component {
  render() {
    const { workoutCounts } = this.props

    return (
      <Fragment>
        <WorkoutWrapper>
          {workoutCounts
            .sort((a, b) => (a.count > b.count ? -1 : 1))
            .map(workoutCount => {
              const props = {
                name: workoutCount.name,
                slug: workoutCount.slug,
                count: workoutCount.count,
                iconSrc: workoutCount.icon_url,
              }
              return <WorkoutCountListItem key={props.slug} {...props} />
            })}
        </WorkoutWrapper>
      </Fragment>
    )
  }
}
export default WorkoutCountList
