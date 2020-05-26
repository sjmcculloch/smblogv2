module.exports = {
  siteTitle: 'Scott McCulloch',
  siteDescription: 'Software Engineer • Cloud Technologist',
  authorName: 'Scott McCulloch',
  twitterUsername: '_maxpou',
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
  googleAnalyticsId: 'UA-67868977-1',
  background_color: '#ffffff',
  theme_color: '#222222',
  display: 'standalone',
  icon: 'content/images/wolf.png',
  postsPerPage: 6,
  disqusShortname: 'smcculloch',
  headerTitle: 'Scott McCulloch',
  headerLinksIcon: '', //  (leave empty to disable: '')
  headerLinks: [
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
          url: 'https://twitter.com/sjmcculloch',
        },
      ],
    },
  ],
  redirects: [
    {
      oldUrl: '/code/gamification-concepts-in-software-design',
      newUrl: '/gamification-concepts-in-software-design',
    },
    {
      oldUrl: '/code/netlify-contentful-jamstack',
      newUrl: '/netlify-contentful-jamstack',
    },
    {
      oldUrl: '/music/what-happened-to-kellyclarksonlive',
      newUrl: '/what-happened-to-kellyclarksonlive',
    },
    {
      oldUrl: '/sport/hard-knocks-season-13-australia',
      newUrl: '/hard-knocks-season-13-australia',
    },
    {
      oldUrl: '/code/logging-to-the-dnn-event-log',
      newUrl: '/logging-to-the-dnn-event-log',
    },
    {
      oldUrl: '/code/ventrian-modules-now-on-github',
      newUrl: '/ventrian-modules-now-on-github',
    },
    {
      oldUrl: '/music/my-december-10-year-anniversary',
      newUrl: '/my-december-10-year-anniversary',
    },
    {
      oldUrl: '/gaming/tips-to-prepare-for-madden-18',
      newUrl: '/tips-to-prepare-for-madden-18',
    },
  ],
}
