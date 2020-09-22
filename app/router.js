/* eslint-disable ember/no-observers */
import EmberRouter from '@ember/routing/router';
import { schedule } from '@ember/runloop';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
  constructor() {
    super(...arguments);
    performance.mark('startRouting');
    this.on('willTransition', function () {
      performance.mark('willTransition');
    });

    this.on('routeDidChange', () => {
      performance.mark('didTransition');
      schedule('afterRender', renderEnd);
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
  });
});

function renderEnd() {
  performance.mark('renderEnd');
  requestAnimationFrame(function () {
    performance.mark('beforePaint');
    requestAnimationFrame(function () {
      performance.mark('afterPaint');
      performance.measure('document', 'navigationStart', 'domLoading');
      performance.measure('jquery', 'domLoading', 'jqueryLoaded');
      performance.measure('ember', 'jqueryLoaded', 'emberLoaded');
      performance.measure('application', 'emberLoaded', 'startRouting');
      performance.measure('routing', 'startRouting', 'willTransition');
      performance.measure('transition', 'willTransition', 'didTransition');
      performance.measure('render', 'didTransition', 'renderEnd');
      performance.measure('afterRender', 'renderEnd', 'beforePaint');
      performance.measure('paint', 'beforePaint', 'afterPaint');
    });
  });
}
