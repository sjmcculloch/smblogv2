module.exports = {
  siteTitle: 'Scott McCulloch',
  siteDescription: 'Software Engineer • Cloud Technologist',
  authorName: 'Scott McCulloch',
  twitterUsername: 'sj_mcculloch',
  authorAvatar: 'avatar.jpg', // file in content/images
  defaultLang: 'en', // show flag if lang is not default. Leave empty to enable flags in post lists
  authorDescription: `
  For the past two decades, Scott McCulloch has worked with a variety of distributed computing technologies. He is currently focused on cloud-native applications.
  `,
  siteUrl: 'https://www.smcculloch.com/',
  // Prefixes all links. For cases when deployed to maxpou.fr/gatsby-starter-morning-dew/
  pathPrefix: '/gatsby-starter-morning-dew', // Note: it must *not* have a trailing slash.
  siteCover: 'cover-dk.jpg', // file in content/images
  statsCover: 'cover-peloton.jpg', // file in content/images
  googleTagManagerId: 'GTM-KZLZXQ4',
  background_color: '#ffffff',
  theme_color: '#003366',
  display: 'standalone',
  icon: 'static/favicon.svg',
  postsPerPage: 6,
  headerTitle: 'Scott McCulloch',
  headerLinksIcon: '', //  (leave empty to disable: '')
  headerLinks: [
    {
      label: 'About',
      url: '/about',
    },
    {
      label: 'Goals',
      url: '/goals',
    },
    {
      label: 'Reading',
      url: '/reading',
    },
    {
      label: 'Stats',
      url: '/stats',
    },
  ],
  // Footer information (ex: Github, Netlify...)
  websiteHost: {
    name: 'Azure Static Web Apps',
    url: 'https://azure.microsoft.com/services/app-service/static/',
  },
  footerLinks: [
    {
      sectionName: 'Explore',
      links: [
        {
          label: 'About',
          url: '/about',
        },
        {
          label: 'Goals',
          url: '/goals',
        },
        {
          label: 'Reading',
          url: '/reading',
        },
        {
          label: 'Resume',
          url: '/cv',
        },
        {
          label: 'Stats',
          url: '/stats',
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
        {
          label: 'Peloton',
          url: 'https://members.onepeloton.com.au/members/sjmcculloch/overview',
        },
      ],
    },
  ],
}
