import EmberRouter from '@ember/routing/router';
import config from './config/environment';
import {
  schedule
} from '@ember/runloop';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
  init() {
    this._super(...arguments);

    this.on('routeDidChange', transition => {
      schedule("afterRender", () => {
        requestAnimationFrame(function () {
          if (location.search === "?tracing") {
            requestAnimationFrame(function () {
              setTimeout(function () {
                document.location.href = "about:blank";
              }, 0);
            });
          }
        });
      });
    });
  }
});

Router.map(function () {
  this.route('index', {
    path: '/'
  });
});

export default Router;