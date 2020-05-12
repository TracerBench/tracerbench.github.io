export const guide = {
  title: 'Guide',
  children: [
    {
      title: 'Introduction',
      route: 'docs.guide.introduction',
      children: [
        {
          title: 'Features',
          route: 'docs.guide.introduction',
          href: '#features'
        },
        {
          title: 'Motivation',
          route: 'docs.guide.introduction',
          href: '#motivation'
        },
        {
          title: 'How does it compare?',
          route: 'docs.guide.introduction',
          href: '#how-does-it-compare'
        },
        {
          title: 'User Stories',
          route: 'docs.guide.introduction',
          href: '#user-stories'
        }
      ]
    },
    {
      title: 'Getting Started',
      route: 'docs.guide.getting-started',
      children: false
    },
    {
      title: 'Workflows',
      route: 'docs.guide.workflows',
      children: [
        {
          title: 'CLI',
          route: 'docs.guide.workflows',
          href: '#cli-workflow'
        },
        {
          title: 'Continuous Integration',
          route: 'docs.guide.workflows',
          href: '#ci-workflow'
        }
      ]
    },
    {
      title: 'Statistics Primer',
      route: 'docs.guide.stats-primer',
      children: false
    }
  ]
};

export const api = {
  title: 'API Reference',
  children: [
    {
      title: 'Commands',
      route: 'docs.api.commands'
    },
    {
      title: 'Compare',
      route: 'docs.api.compare'
    },
    {
      title: 'Profile',
      route: 'docs.api.profile'
    },
    {
      title: 'Record-HAR',
      route: 'docs.api.record-har'
    },
    {
      title: 'Help',
      route: 'docs.api.help'
    }
  ]
};

export const advanced = {
  title: 'Advanced',
  children: [
    {
      title: 'Commands',
      route: 'advanced',
      href: '#commands',
      children: [{ title: 'serve', route: 'docs.advanced.serve', href: '#serve' }]
    }
  ]
};

export const contributing = {
  title: 'Contributing',
  children: [
    {
      title: 'Development',
      route: 'docs.contributing.development',
      children: [
        {
          title: 'Debugging',
          route: 'docs.contributing.development',
          href: '#debugging'
        },
        {
          title: 'Tests',
          route: 'docs.contributing.development',
          href: '#tests'
        },
        {
          title: 'License',
          route: 'docs.contributing.development',
          href: '#license'
        }
      ]
    },
    {
      title: 'Community',
      route: 'docs.contributing.community',
      children: [
        {
          title: 'RFC',
          route: 'docs.contributing.community',
          href: '#rfc'
        },
        {
          title: 'Code of Conduct',
          route: 'docs.contributing.community',
          href: '#code-of-conduct'
        }
      ]
    }
  ]
};
