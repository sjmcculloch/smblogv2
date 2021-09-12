import React from 'react'
import styled from 'styled-components'
import moment from 'moment-timezone'

const Wrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`

const Container = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: rgb(24 26 29 / 10%) 0px 3px 5px 0px;
`

const WorkoutItem = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 15px;
`

const InstructorAvatar = styled.img`
  border: 2px solid rgba(0, 0, 0, 0.07);
  display: inline-block;
  min-width: 100px;
  width: 100px;
  height: 100px;
  border-radius: 100%;
`

const WorkoutData = styled.div`
  padding-left: 10px;
  padding-right: 12px;
  min-width: 0px;
`

const WorkoutOutput = styled.div`
  margin-left: auto;
  text-align: right;
  padding-right: 10px;
  flex-shrink: 0;
`

const WorkoutOutputValue = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.2px;
  color: rgb(34, 37, 41);

  @media (min-width: 580px) {
    font-size: 24px;
    line-height: 30px;
    letter-spacing: -0.2px;
    font-weight: 400;
  }
`

const WorkoutEffortValue = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.2px;
  color: rgb(34, 37, 41);

  @media (min-width: 580px) {
    font-size: 24px;
    line-height: 30px;
    letter-spacing: -0.2px;
    font-weight: 400;
  }

  &:nth-child(2) {
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.2px;
    color: rgb(90, 100, 116);
    margin-top: 5px;
    line-height: 15px;

    @media (min-width: 580px) {
      font-size: 18px;
      letter-spacing: 0px;
      font-weight: 400;
      line-height: 20px;
    }
  }
`

const WorkoutTitle = styled.h2`
  font-size: 14px;
  font-weight: 300;
  line-height: 1.25em;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding-bottom: 3px;

  @media (min-width: 580px) {
    padding-bottom: 5px;
    font-size: 18px;
    font-weight: 300;
    line-height: 1.5em;
  }
`

const WorkoutSubtitle = styled.div`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding-bottom: 3px;

  @media (min-width: 580px) {
    padding-bottom: 5px;
  }
`

const Separator = styled.span`
  display: inline-block;
  width: 0.5em;
`

const Point = styled.span`
  color: rgb(34, 37, 41);
`

const Subtitle = styled.span`
  font-weight: 500;
  line-height: 1.35em;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-size: 13px;
`

const WorkoutDate = styled.div`
  line-height: 1.4em;
  font-size: 10px;
  letter-spacing: 0.2px;

  @media (min-width: 580px) {
    line-height: 1.4em;
    letter-spacing: 0.02em;
    font-size: 14px;
    font-weight: 500;
  }
`

const WorkoutFooter = styled.div`
  background-color: rgb(245, 247, 249);
  border-radius: 0px 0px 10px 10px;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 5px 10px;

  @media (min-width: 580px) {
    padding: 5px 15px;
  }
`

const WorkoutFooterDate = styled.div`
  line-height: 1.4em;
  font-size: 10px;
  letter-spacing: 0.2px;

  @media (min-width: 580px) {
    line-height: 1.4em;
    letter-spacing: 0.02em;
    font-size: 14px;
    font-weight: 500;
  }
`

const WorkoutFooterType = styled.div`
  line-height: 1.4em;
  font-size: 10px;
  letter-spacing: 0.2px;

  @media (min-width: 580px) {
    line-height: 1.4em;
    letter-spacing: 0.02em;
    font-size: 14px;
    font-weight: 500;
  }
`

const WorkoutListItem = props => {
  const {
    title,
    type,
    discipline,
    airTime,
    startTime,
    effortPoints,
    instructor,
    totalwork,
  } = props

  return (
    <Wrapper>
      <Container>
        <WorkoutItem>
          <InstructorAvatar src={instructor.image_url} alt={instructor.name} />
          <WorkoutData>
            <WorkoutTitle>{title}</WorkoutTitle>
            <WorkoutSubtitle>
              <Subtitle>{instructor.name}</Subtitle>
              <Separator />
              <Point>·</Point>
              <Separator />
              <Subtitle>{discipline}</Subtitle>
            </WorkoutSubtitle>
            <WorkoutDate>
              From {moment(airTime * 1000).format('lll')}
            </WorkoutDate>
          </WorkoutData>
          <WorkoutOutput>
            <WorkoutOutputValue>{totalwork}</WorkoutOutputValue>
            {effortPoints && (
              <WorkoutEffortValue>{effortPoints}</WorkoutEffortValue>
            )}
          </WorkoutOutput>
        </WorkoutItem>
        <WorkoutFooter>
          <WorkoutFooterDate>
            {moment(startTime * 1000).format('lll')}
          </WorkoutFooterDate>
          <WorkoutFooterType>{type}</WorkoutFooterType>
        </WorkoutFooter>
      </Container>
    </Wrapper>
  )
}
export default WorkoutListItem
