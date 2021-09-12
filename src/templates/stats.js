import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Wrapper from '../components/Wrapper'
import SEO from '../components/SEO'
import Statistics from '../components/Statistics'

class Stats extends React.Component {
  render() {
    const achievements = this.props.data.achievements.nodes
    const workoutCounts = this.props.data.workoutCounts.nodes
    const workouts = this.props.data.workouts.nodes

    return (
      <Layout location={this.props.location}>
        <SEO title="My Peloton Stats" />
        <Wrapper>
          <Statistics
            achievements={achievements}
            workouts={workouts}
            workoutCounts={workoutCounts}
          />
        </Wrapper>
      </Layout>
    )
  }
}

export default Stats

export const pageQuery = graphql`
  query statQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    workoutCounts: allWorkoutCount {
      nodes {
        id
        name
        count
        icon_url
        slug
      }
    }
    workouts: allWorkout {
      nodes {
        id
        type
        totalwork
        effortPoints
        title
        startTime
        airTime
        discipline
        instructor {
          name
          image_url
        }
      }
    }
    achievements: allAchievement {
      nodes {
        id
        image_url
        name
        slug
        description
      }
    }
  }
`
