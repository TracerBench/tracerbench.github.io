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
      children: [
        {
          title: 'Installation',
          route: 'docs.guide.getting-started',
          href: '#install'
        },
        {
          title: 'Ambient Noise',
          route: 'docs.guide.getting-started',
          href: '#ambient-noise'
        },
        {
          title: 'Navigation Timing',
          route: 'docs.guide.getting-started',
          href: '#nav-timing'
        }
      ]
    },
    {
      title: 'CLI Workflow',
      route: 'docs.guide.cli-workflow',
      children: [
        {
          title: 'Intro',
          route: 'docs.guide.cli-workflow',
          href: '#intro'
        },
        {
          title: 'Compare',
          route: 'docs.guide.cli-workflow',
          href: '#compare'
        },
        {
          title: 'Profile',
          route: 'docs.guide.cli-workflow',
          href: '#profile'
        }
      ]
    },
    {
      title: 'CI Workflow',
      route: 'docs.guide.ci-workflow',
      children: [
        {
          title: 'Intro',
          route: 'docs.guide.ci-workflow',
          href: '#intro'
        },
        {
          title: 'Compare',
          route: 'docs.guide.ci-workflow',
          href: '#compare'
        }
      ]
    },
    {
      title: 'Statistics Primer',
      route: 'docs.guide.stats-primer',
      children: [
        {
          title: 'Population & Sample',
          route: 'docs.guide.stats-primer',
          href: '#pop-samp'
        },
        {
          title: 'Probability Sampling',
          route: 'docs.guide.stats-primer',
          href: '#prob-samp'
        },
        {
          title: 'Null hypothesis',
          route: 'docs.guide.stats-primer',
          href: '#null-h'
        },
        {
          title: 'Std Deviation & Variance',
          route: 'docs.guide.stats-primer',
          href: '#std-dev'
        },
        {
          title: 'Conf Intervals',
          route: 'docs.guide.stats-primer',
          href: '#conf'
        },
        {
          title: 'Power',
          route: 'docs.guide.stats-primer',
          href: '#power'
        },
        {
          title: 'Rank Sum',
          route: 'docs.guide.stats-primer',
          href: '#rank-sum'
        },
        {
          title: 'Stat Sig',
          route: 'docs.guide.stats-primer',
          href: '#stat-sig'
        }
      ]
    },
    {
      title: 'Reports',
      route: 'docs.guide.reports',
      children: [
        {
          title: 'stdout',
          route: 'docs.guide.reports',
          href: '#stdout'
        },
        {
          title: 'PDF/HTML',
          route: 'docs.guide.reports',
          href: '#pdf-html'
        },
        {
          title: 'JSON',
          route: 'docs.guide.reports',
          href: '#json'
        }
      ]
    }
  ]
};

export const api = {
  title: 'API Reference',
  children: [
    {
      title: 'Commands',
      route: 'docs.api.commands',
      children: [
        {
          title: 'Optional Config',
          route: 'docs.api.commands',
          href: '#tbconfig'
        },
        {
          title: 'Cookies',
          route: 'docs.api.commands',
          href: '#cookies'
        },
        {
          title: 'HAR File',
          route: 'docs.api.commands',
          href: '#har'
        },
        {
          title: 'Trace Results JSON',
          route: 'docs.api.commands',
          href: '#trace-results'
        }
      ]
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
