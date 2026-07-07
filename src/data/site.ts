// Ported from data/siteConfig.js (Gatsby). The stale
// pathPrefix/starter fields were dropped.
export const site = {
  title: 'Scott McCulloch',
  description: 'Software Engineer • Cloud Technologist',
  author: 'Scott McCulloch',
  twitterUsername: 'sj_mcculloch',
  authorDescription:
    'For the past two decades, Scott McCulloch has worked with a variety of distributed computing technologies. He is currently focused on cloud-native applications.',
  url: 'https://www.smcculloch.com',
  googleTagManagerId: 'GTM-KZLZXQ4',
  themeColor: '#003366',
  postsPerPage: 6,
  headerTitle: 'Scott McCulloch',
  headerLinks: [
    { label: 'About', url: '/about' },
    { label: 'Goals', url: '/goals' },
    { label: 'Reading', url: '/reading' },
  ],
  websiteHost: {
    name: 'Azure Static Web Apps',
    url: 'https://azure.microsoft.com/services/app-service/static/',
  },
  footerLinks: [
    {
      sectionName: 'Explore',
      links: [
        { label: 'About', url: '/about' },
        { label: 'Goals', url: '/goals' },
        { label: 'Reading', url: '/reading' },
        { label: 'Resume', url: '/cv' },
      ],
    },
    {
      sectionName: 'Follow the author',
      links: [
        { label: 'GitHub', url: 'https://github.com/sjmcculloch' },
        { label: 'Website', url: 'https://www.smcculloch.com' },
        { label: 'Twitter', url: 'https://twitter.com/sj_mcculloch' },
        {
          label: 'Peloton',
          url: 'https://members.onepeloton.com.au/members/sjmcculloch/overview',
        },
      ],
    },
  ],
}
