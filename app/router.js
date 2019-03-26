import EmberRouter from '@ember/routing/router';
import config from './config/environment';
import {
  schedule
} from '@ember/runloop';

import markersRenderEnd from './markers-render-end';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
  init() {
    this._super(...arguments);
    performance.mark("initRouting");

    this.on('willTransition', function () {
      performance.mark('willTransition');
    });

    this.on('routeDidChange', () => {
      performance.mark('routeDidChange');
      schedule("afterRender", markersRenderEnd);
    });
  }
});

Router.map(function () {
  this.route('index', {
    path: '/'
  });
});

export default Router;