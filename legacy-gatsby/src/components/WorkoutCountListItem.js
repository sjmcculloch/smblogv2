import React from 'react'
import styled from 'styled-components'

const Workout = styled.li`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
`

const WorkoutIcon = styled.img`
  height: 37px;
  margin-bottom: 6px;
`

const WorkoutTitle = styled.span`
  line-height: 1.4em;
  letter-spacing: 0.02em;
  font-size: 12px;
  font-weight: 500;
  color: rgb(64, 101, 153);
  opacity: 0.9;
  margin-bottom: 4px;
`

const WorkoutCount = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5em;
`

const WorkoutCountListItem = props => {
  const { name, count, iconSrc, slug } = props

  if (count === 0 ) return (<></>);
  
  return (
    <Workout>
      <WorkoutIcon src={iconSrc} alt={slug} />
      <WorkoutTitle>{name}</WorkoutTitle>
      <WorkoutCount>{count}</WorkoutCount>
    </Workout>
  )
}
export default WorkoutCountListItem
