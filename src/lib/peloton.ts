// Build-time Peloton data fetch, ported from the Gatsby sourceNodes hook
// (legacy-gatsby/gatsby-node.js). Uses the unofficial Peloton API; requires
// PELOTON_USERNAME / PELOTON_PASSWORD env vars (GitHub Secrets in CI).
// Returns null when credentials are missing or the API call fails, so a
// Peloton outage degrades the /stats page instead of breaking the deploy.

export interface WorkoutCount {
  name: string
  slug: string
  count: number
  icon_url: string
}

export interface RecordCategory {
  name: string
  slug: string
  icon_url?: string
  records: { name: string; value: string; unit: string; raw_value?: number }[]
}

export interface Achievement {
  id: string
  name: string
  description: string
  image_url: string
  count: number
}

export interface RecentWorkout {
  id: string
  type: string
  startTime: number
  airTime: number
  title: string
  discipline: string
  totalwork: number | null
  effortPoints: number | null
  instructor: { name: string; image_url: string }
}

export interface PelotonData {
  workoutCounts: WorkoutCount[]
  records: RecordCategory[]
  achievements: Achievement[]
  recentWorkouts: RecentWorkout[]
}

export async function getPelotonData(): Promise<PelotonData | null> {
  const username = process.env.PELOTON_USERNAME
  const password = process.env.PELOTON_PASSWORD

  if (!username || !password) {
    console.warn('[peloton] credentials not set, skipping stats data')
    return null
  }

  try {
    const authResponse = await fetch('https://api.onepeloton.com/auth/login', {
      method: 'POST',
      body: JSON.stringify({ username_or_email: username, password }),
      headers: { 'Content-Type': 'application/json' },
    })
    const authData = await authResponse.json()

    const opts = {
      headers: {
        cookie: `peloton_session_id=${authData.session_id};`,
        'peloton-platform': 'web',
      },
    }

    const overviewResponse = await fetch(
      `https://api.onepeloton.com/api/user/${authData.user_id}/overview?version=1`,
      opts
    )
    const overview = await overviewResponse.json()

    const workoutCounts: WorkoutCount[] = overview.workout_counts.workouts

    const records: RecordCategory[] = (overview.personal_records ?? [])
      .filter((category: any) => category.slug !== 'running_metric_splits')
      .map((category: any) => {
        const workout = workoutCounts.find(w => w.slug === category.slug)
        return {
          ...category,
          icon_url: workout?.icon_url,
          records: category.records.map((record: any) => ({
            ...record,
            value: String(record.value),
          })),
        }
      })

    const achievements: Achievement[] = overview.achievements ?? []

    const metadataResponse = await fetch(
      'https://api.onepeloton.com/api/ride/metadata_mappings',
      opts
    )
    const metadata = await metadataResponse.json()

    const workoutsResponse = await fetch(
      `https://api.onepeloton.com.au/api/user/${authData.user_id}/workouts?joins=ride&limit=10&page=0`,
      opts
    )
    const recentWorkoutsData = await workoutsResponse.json()

    const recentWorkouts: RecentWorkout[] = recentWorkoutsData.data
      .sort((a: any, b: any) => (a.start_time > b.start_time ? -1 : 1))
      .map((workout: any) => ({
        id: workout.id,
        type: metadata.device_type_display_names.find(
          (deviceType: any) => deviceType.device_type === workout.device_type
        )?.display_name,
        startTime: workout.start_time,
        airTime: workout.ride.original_air_time,
        title: workout.ride.title,
        discipline: workout.ride.fitness_discipline_display_name,
        totalwork:
          workout.total_work > 0 ? Math.round(workout.total_work / 1000) : null,
        effortPoints: workout.effort_zones?.total_effort_points ?? null,
        instructor:
          workout.ride.instructor_id !== null
            ? metadata.instructors.find(
                (instructor: any) => instructor.id === workout.ride.instructor_id
              )
            : { name: 'Scenic', image_url: workout.ride.image_url },
      }))

    return { workoutCounts, records, achievements, recentWorkouts }
  } catch (error) {
    console.warn('[peloton] failed to fetch stats data:', error)
    return null
  }
}
