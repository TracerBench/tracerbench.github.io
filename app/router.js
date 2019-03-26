import EmberRouter from '@ember/routing/router';
import {
  schedule
} from '@ember/runloop';

class Router extends EmberRouter {
  constructor() {
    super(...arguments);
    this.on('routeDidChange', () => {
      schedule('afterRender', renderEnd);
    });
  }
}

Router.map(function () {
  this.route('index', {
    path: '/'
  });
});

export default Router;

function renderEnd() {
  performance.mark('renderEnd');
  requestAnimationFrame(function () {
    performance.mark('beforePaint');
    requestAnimationFrame(function () {
      performance.mark('afterPaint');
      performance.measure('document', 'navigationStart', 'domLoading');
      performance.measure('afterRender', 'renderEnd', 'beforePaint');
      performance.measure('paint', 'beforePaint', 'afterPaint');
      if (location.search === '?tracing') {
        requestAnimationFrame(function () {
          setTimeout(function () {
            document.location.href = 'about:blank';
          }, 0);
        });
      }
    });
  });
}