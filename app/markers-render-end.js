export default function markersRenderEnd() {
  performance.mark("renderEnd");
  requestAnimationFrame(function () {
    performance.mark("beforePaint");
    requestAnimationFrame(function () {
      performance.mark("afterPaint");
      performance.measure("document", "navigationStart", "domLoading");
      performance.measure("routing", "initRouting", "willTransition");
      performance.measure("transition", "willTransition", "routeDidChange");
      performance.measure("render", "routeDidChange", "renderEnd");
      performance.measure("afterRender", "renderEnd", "beforePaint");
      performance.measure("paint", "beforePaint", "afterPaint");
      if (location.search === "?tracing") {
        requestAnimationFrame(function () {
          setTimeout(function () {
            document.location.href = "about:blank";
          }, 0);
        });
      }
    });
  });
}