import React, { Fragment } from 'react'

import WorkoutListItem from './WorkoutListItem'

class WorkoutList extends React.Component {
  render() {
    const { workouts } = this.props

    return (
      <Fragment>
        {workouts.map(workout => {
          return <WorkoutListItem key={workout.id} {...workout} />
        })}
      </Fragment>
    )
  }
}
export default WorkoutList
