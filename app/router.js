/* eslint-disable ember/no-observers */
import EmberRouter from '@ember/routing/router';
import { schedule } from '@ember/runloop';

import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
  constructor() {
    super(...arguments);
    this.on('routeDidChange', () => {
      schedule('afterRender', this, renderEnd);
    });
  }
}

function renderEnd() {
  if (location.search === '?tracing') {
    const observer = new PerformanceObserver((list) => {
      const navEntries = list.getEntriesByType('navigation');
      if (navEntries.length > 0) {
        navEntries.forEach((entry) => {
          if (entry.loadEventEnd) {
            requestIdleCallback(() => {
              document.location.href = 'about:blank';
            });
          }
        });
      }
    });
    observer.observe({
      entryTypes: ['navigation']
    });
  }
}

Router.map(function () {
  this.route('docs', function () {
    this.route('guide', function () {
      this.route('introduction', { path: '/' });
      this.route('getting-started');
      this.route('cli-workflow');
      this.route('ci-workflow');
      this.route('stats-primer');
      this.route('reports');
    });
    this.route('api', function () {
      this.route('commands', { path: '/' });
      this.route('compare');
      this.route('record-har');
      this.route('profile');
      this.route('help');
    });
    this.route('contributing', function () {
      this.route('community');
      this.route('development');
    });
    // this.route('advanced', function () {
    //   this.route('serve');
    // });
  });
});
