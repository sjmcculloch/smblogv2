import React, { Fragment } from 'react'
import styled from 'styled-components'

import useSiteMetadata from '../hooks/use-site-config'
import useSiteImages from '../hooks/use-site-images'

import PageTitle from './PageTitle'
import WorkoutList from './WorkoutList'
import WorkoutCountList from './WorkoutCountList'
import Cover from './Cover'
import ContentWrapper from './ContentWrapper'
import AchievementList from './AchievementList'
import RecordList from './RecordList'

const SubTitle = styled.h2`
  padding-top: 3rem;
  margin-top: 3rem;
  border-top: 1px solid #ececec;
`

const Content = styled.blockquote`
  box-sizing: border-box;
  background-color: #f7f7f7;
  border-left: 5px solid rgb(244, 213, 36);
  margin: 30px 0px;
  padding: 5px 20px;
  border-radius: 0 8px 8px 0;
`

const ContentText = styled.p`
  margin: 0.8em 0;
  font-style: italic;
`

const Statistics = ({ achievements, records, workoutCounts, workouts }) => {
  const { statsCover } = useSiteMetadata()
  const siteCoverPath = useSiteImages(statsCover).fluid.src

  return (
    <Fragment>
      <Cover heroImg={siteCoverPath} />
      <ContentWrapper>
        <PageTitle>My Peloton Statistics</PageTitle>
        <Content>
          <ContentText>
            The following are my statistics from the Peloton API. I've also
            written a short guide on{' '}
            <a href="/integrating-peloton-api-gatsby-js">
              Peloton API integration
            </a>
            .
          </ContentText>
        </Content>
        <SubTitle>Workout Overview</SubTitle>
        <WorkoutCountList workoutCounts={workoutCounts} />
        <SubTitle>All Time Records</SubTitle>
        <RecordList records={records} />
        <SubTitle>Recent Workouts</SubTitle>
        <WorkoutList workouts={workouts} />
        <SubTitle>Recent Achievements</SubTitle>
        <AchievementList achievements={achievements} />
      </ContentWrapper>
    </Fragment>
  )
}

export default Statistics
