const { createFilePath } = require('gatsby-source-filesystem')
const fetch = require('node-fetch')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const BlogPostTemplate = require.resolve('./src/templates/blog-post.js')
  const BlogPostShareImage = require.resolve(
    './src/templates/blog-post-share-image.js'
  )
  const PageTemplate = require.resolve('./src/templates/page.js')
  const PostsBytagTemplate = require.resolve('./src/templates/tags.js')
  const ListPostsTemplate = require.resolve(
    './src/templates/blog-list-template.js'
  )

  const StatsTemplate = require.resolve('./src/templates/stats.js')

  const allMarkdownQuery = await graphql(`
    {
      allMarkdown: allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { published: { ne: false } } }
        limit: 1000
      ) {
        edges {
          node {
            fileAbsolutePath
            frontmatter {
              title
              slug
              tags
              language
              cover {
                publicURL
              }
            }
            timeToRead
            excerpt
          }
        }
      }
    }
  `)

  if (allMarkdownQuery.errors) {
    reporter.panic(allMarkdownQuery.errors)
  }

  const postPerPageQuery = await graphql(`
    {
      site {
        siteMetadata {
          postsPerPage
        }
      }
    }
  `)

  const markdownFiles = allMarkdownQuery.data.allMarkdown.edges

  const posts = markdownFiles.filter(item =>
    item.node.fileAbsolutePath.includes('/content/posts/')
  )

  // generate stat template
  createPage({
    path: `/stats`,
    component: StatsTemplate,
    context: {
      slug: 'stats',
    },
  })

  // generate paginated post list
  const postsPerPage = postPerPageQuery.data.site.siteMetadata.postsPerPage
  const nbPages = Math.ceil(posts.length / postsPerPage)

  Array.from({ length: nbPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/` : `/pages/${i + 1}`,
      component: ListPostsTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        currentPage: i + 1,
        nbPages: nbPages,
      },
    })
  })

  // generate blog posts
  posts.forEach((post, index, posts) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.frontmatter.slug,
      component: BlogPostTemplate,
      context: {
        slug: post.node.frontmatter.slug,
        previous,
        next,
      },
    })

    // generate post share images (dev only)
    if (process.env.gatsby_executing_command.includes('develop')) {
      createPage({
        path: `${post.node.frontmatter.slug}/image_share`,
        component: BlogPostShareImage,
        context: {
          slug: post.node.frontmatter.slug,
          width: 440,
          height: 220,
        },
      })
    }
  })

  // generate pages
  markdownFiles
    .filter(item => item.node.fileAbsolutePath.includes('/content/pages/'))
    .forEach(page => {
      createPage({
        path: page.node.frontmatter.slug,
        component: PageTemplate,
        context: {
          slug: page.node.frontmatter.slug,
        },
      })
    })

  // generate tags
  markdownFiles
    .filter(item => item.node.frontmatter.tags !== null)
    .reduce(
      (acc, cur) => [...new Set([...acc, ...cur.node.frontmatter.tags])],
      []
    )
    .forEach(uniqTag => {
      createPage({
        path: `tags/${uniqTag}`,
        component: PostsBytagTemplate,
        context: {
          tag: uniqTag,
        },
      })
    })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  if (
    typeof process.env.PELOTON_USERNAME !== 'undefined' &&
    process.env.PELOTON_USERNAME &&
    typeof process.env.PELOTON_PASSWORD !== 'undefined' &&
    process.env.PELOTON_PASSWORD
  ) {
    const body = {
      username_or_email: process.env.PELOTON_USERNAME,
      password: process.env.PELOTON_PASSWORD,
    }

    const response = await fetch('https://api.onepeloton.com/auth/login', {
      method: 'post',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    })

    const authData = await response.json()

    const opts = {
      headers: {
        cookie: `peloton_session_id=${authData.session_id};`,
        'peloton-platform': 'web',
      },
    }

    const responseOverview = await fetch(
      `https://api.onepeloton.com.au/api/user/${authData.user_id}/overview?version=1`,
      opts
    )
    const overviewData = await responseOverview.json()

    overviewData.workout_counts.workouts.forEach(workoutCount => {
      const newNode = {
        ...workoutCount,
        id: createNodeId(workoutCount.name),
        internal: {
          type: 'WorkoutCount',
          contentDigest: createContentDigest(workoutCount),
        },
      }
      actions.createNode(newNode)
    })

    // hack for changing API payload between regions

    if (overviewData.achievements) {
      overviewData.achievements.forEach(achievement => {
        const newNode = {
          ...achievement,
          id: createNodeId(achievement.id),
          internal: {
            type: 'Achievement',
            contentDigest: createContentDigest(achievement),
          },
        }
        actions.createNode(newNode)
      })
    } else {
      if (overviewData.achievement_counts) {
        overviewData.achievement_counts.achievements.forEach(achievement => {
          console.log(achievement)
          // const newNode = {
          //   ...achievement,
          //   id: createNodeId(achievement.id),
          //   internal: {
          //     type: 'Achievement',
          //     contentDigest: createContentDigest(achievement),
          //   },
          // }
          // actions.createNode(newNode)
        })
      }
    }

    const responseMetaData = await fetch(
      'https://api.onepeloton.com/api/ride/metadata_mappings',
      opts
    )
    const pelotonMetaData = await responseMetaData.json()

    const responseWorkoutData = await fetch(
      `https://api.onepeloton.com/api/user/${authData.user_id}/workouts?joins=ride&limit=10&page=0`,
      opts
    )
    const recentWorkouts = await responseWorkoutData.json()

    recentWorkouts.data
      .sort((a, b) => (a.startTime > b.startTime ? -1 : 1))
      .map(workout => ({
        id: workout.id,
        type: pelotonMetaData.device_type_display_names.find(
          deviceType => deviceType.device_type === workout.device_type
        ).display_name,
        startTime: workout.start_time,
        airTime: workout.ride.original_air_time,
        title: workout.ride.title,
        discipline: workout.ride.fitness_discipline_display_name,
        totalwork:
          workout.total_work > 0 ? Math.round(workout.total_work / 1000) : null,
        effortPoints:
          workout.effort_zones !== null
            ? workout.effort_zones.total_effort_points
            : null,
        instructor:
          workout.ride.instructor_id !== null
            ? pelotonMetaData.instructors.find(
                instructor => instructor.id === workout.ride.instructor_id
              )
            : { name: 'Scenic', image_url: workout.ride.image_url },
      }))
      .forEach(workout => {
        const newNode = {
          ...workout,
          id: workout.id,
          internal: {
            type: 'Workout',
            contentDigest: createContentDigest(workout),
          },
        }
        actions.createNode(newNode)
      })
  }
}
