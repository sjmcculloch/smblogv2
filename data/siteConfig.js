module.exports = {
  siteTitle: 'Scott McCulloch',
  siteDescription: 'Software Engineer • Cloud Technologist',
  authorName: 'Scott McCulloch',
  twitterUsername: 'sj_mcculloch',
  authorAvatar: 'avatar.jpg', // file in content/images
  defaultLang: 'en', // show flag if lang is not default. Leave empty to enable flags in post lists
  authorDescription: `
  For the past two decades, Scott McCulloch has worked with a variety of web technologies. He is currently focused on full-stack development.
  On his day to day job, he is working as a systems specialist at the <a href="https://www.ses.nsw.gov.au/" target="_blank">NSW State Emergency Service</a>.
  `,
  siteUrl: 'https://www.smcculloch.com/',
  disqusSiteUrl: 'https://www.smcculloch.com/',
  // Prefixes all links. For cases when deployed to maxpou.fr/gatsby-starter-morning-dew/
  pathPrefix: '/gatsby-starter-morning-dew', // Note: it must *not* have a trailing slash.
  siteCover: 'cover-dk.jpg', // file in content/images
  googleAnalyticsId: 'UA-102295230-1',
  background_color: '#ffffff',
  theme_color: '#003366',
  display: 'standalone',
  icon: 'static/favicon.svg',
  postsPerPage: 6,
  disqusShortname: 'smcculloch',
  headerTitle: 'Scott McCulloch',
  headerLinksIcon: '', //  (leave empty to disable: '')
  headerLinks: [
    {
      label: 'Reading List',
      url: '/reading',
    },
    {
      label: 'About',
      url: '/about',
    },
  ],
  // Footer information (ex: Github, Netlify...)
  websiteHost: {
    name: 'GitHub',
    url: 'https://github.com',
  },
  footerLinks: [
    {
      sectionName: 'Explore',
      links: [
        {
          label: 'Reading List',
          url: '/reading',
        },
        {
          label: 'About',
          url: '/about',
        },
      ],
    },
    {
      sectionName: 'Follow the author',
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/sjmcculloch',
        },
        {
          label: 'Website',
          url: 'https://www.smcculloch.com',
        },
        {
          label: 'Twitter',
          url: 'https://twitter.com/sj_mcculloch',
        },
      ],
    },
  ],
}
