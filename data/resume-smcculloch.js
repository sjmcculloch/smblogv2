module.exports = {
  basics: {
    name: 'Scott McCulloch',
    title: 'Software Engineer',
    email: 'smcculloch@gmail.com',
    nationality: 'Australian',
    age: '43',
    website: 'https://www.smcculloch.com',
    cvUrl: 'https://www.smcculloch.com/cv',
    phone: '+61448466482',
    location: 'Wollongong, Australia',
    description: `
      I'm Scott, an Australian Software Engineer with 20+ years of experience developing web and mobile applications. 
      I am a dedicated, hardworking, ambitious person that gets things done, both on my own initiative and within a team. 
      I enjoy challenges and I am not afraid of getting my hands dirty.
    `,
    lastUpdate: 'October 2021',
    profiles: [
      {
        network: 'Twitter',
        url: 'https://twitter.com/sj_mcculloch',
      },
      {
        network: 'GitHub',
        url: 'https://github.com/sjmcculloch',
      },
      {
        network: 'LinkedIn',
        url: 'https://www.linkedin.com/in/sjmcculloch/',
      },
    ],
  },

  skills: [
    {
      category: 'Proficient',
      content: ['JavaScript', 'React.js', 'C#', '.NET', 'Git', 'Azure'],
    },
    {
      category: 'Comfortable',
      content: [
        'Service Bus',
        'Cosmos DB',
        'CI/CD',
        'Web Performance',
        'Node.js',
        'SQL Server',
      ],
    },
    {
      category: 'Familiar',
      content: ['AWS', 'Firebase', 'GraphQL', 'Functional Programming'],
    },
  ],

  highlights: [
    {
      description: 'Write technical blog posts',
      url: 'https://www.smcculloch.com',
    },
    {
      description:
        'Mentor junior developers and people who want to retrain as a developer',
      url: '',
    },
    {
      description: 'Open sources lover and occasional contributor',
      url: 'https://github.com/sjmcculloch',
    },
  ],

  experiences: [
    {
      company: 'Pia',
      position: 'Senior Software Engineer',
      period: 'May 2022 - Present',
      location: 'Remote/Office (Wollongong, Australia)',
      activities: [
        'Azure, CI/CD, ARM, Bicep, IOT Hubs, Service Bus, Event Grid, SQL Server, App Services, Virtual Machines',
      ],
    },
    {
      company: 'NSW State Emergency Service',
      position: 'Senior Software Engineer',
      period: 'Oct 2017 - May 2022',
      location: 'Remote/Office (Wollongong, Australia)',
      activities: [
        'Designed and migrated existing applications into best-of-breed cloud native applications (Service Bus, Serverless, API Gateway, SignalR, CosmoDB) that improved availability and reduced operating expenses by 60%',
        'Established modern DevOps culture utilising Azure DevOps e.g. CI/CD, ARM templates and test automation.',
        'Implemented Office 365 automatic provisioning from ERP systems.',
        'Member of inter-agency (all emergency services) technical steering committee for the ICEMS protocol (CAD system data interchange).',
        'Microsoft Protégé 2019 speaker and judge for Australian university competition (https://www.microsoft.com/en-au/protege/)',
      ],
    },
    {
      company: 'F5 Networks',
      position: 'Senior Software Engineer',
      period: 'Aug 2012 - Sep 2017',
      location: 'Remote (Seattle, USA)',
      activities: [
        'Work collaboratively with in-house teams to provide a rapid, robust and secure digital marketing platform optimizing user experience, search engine ranking, localization, sales, brand positioning and related metrics.',
        'https://devcentral.f5.com: Implemented a StackOverflow style gamification platform that increased user participation by over 250%, cloud migration and established a competitive advantage for F5 Networks.',
        'https://f5.com: Led conversion from Adobe platform to a .NET CMS that included new taxonomy, responsive design and product rebranding. Integrated into 3rd party systems both internal/external and localized content into 7 languages.',
      ],
    },
    {
      company: 'BlueScope Steel',
      position: 'Senior Systems Analyst',
      period: 'Jun 2006 - Aug 2012',
      location: 'Wollongong, Australia',
      activities: [
        'Built in-house .NET applications and managed third party website development.',
        'Marketing CRM: Designed and implemented a major CRM redevelopment from VB6/Oracle to .NET with call center, mailroom, salesforce and website integration. 1 million interactions a year with 750,000 contacts in a 16-person call center.',
        'https://colorbond.com: Managed development of all BlueScope Steel digital properties including design, content strategy, SEO and system integration.',
      ],
    },
    {
      company: 'Computer Science Corporation',
      position: 'Senior Software Engineer',
      period: 'Jul 2003 - Jun 2005',
      location: 'Wollongong, Australia',
      activities: [
        'Sql Server, C#, ASP.NET Web Forms, Web Services, BizTalk Server',
        'Developed proprietary application framework used by 50+ devs',
        'Developed cost model tool to standardise estimations',
        'Regular speaker at .NET User Groups',
      ],
    },
    {
      company: 'Wollongong City Council',
      position: 'Software Engineer',
      period: 'Jun 2001 - Jun 2003',
      location: 'Wollongong, Australia',
      activities: [
        'Developed internet & intranet sites - wwww.wollongong.nsw.gov.au',
      ],
    },
    {
      company: 'BHP',
      position: 'Graduate Developer',
      period: 'Jul 1999 - Jun 2001',
      location: 'Wollongong, Australia',
      activities: [
        'Developed Steel customer portal - www.bluescopesteelconnect.com',
        'Developed first mobile WAP solution (order status, invoices)',
        'Developed J2EE site (ATG Dynamo) - bhpbilliton.com',
      ],
    },
  ],

  education: [
    {
      school: 'University of Wollongong',
      degree: 'Masters of Computer Science with Distinction',
      period: '2001 - 2003',
      location: 'Wollongong, NSW, Australia',
      detail: ['Software Development'],
    },
    {
      school: 'University of Wollongong',
      degree: 'Bachelor of Computer Science',
      period: '1996 - 1999',
      location: 'Wollongong, NSW, Australia',
      detail: ['Software Development'],
    },
  ],

  languages: [
    {
      level: 'Native',
      language: ['English'],
    },
  ],

  hobbies: `
    Fitness, sports, gaming and personal development.
  `,

  values: ['knowledge sharing', 'user privacy', 'diversity'],
}
