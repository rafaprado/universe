import "./eventsHandler.js";
import * as view from "./viewController.js";

export class Router {
  _routes = {
    404: "/pages/404.html"
  };


  add(route, filePath) {
    this._routes[route] = filePath;
  }

  static _popStateDispatcher(routeLink) {
    window.history.pushState({state: routeLink}, "", routeLink);
    dispatchEvent(new PopStateEvent('popstate', {state: routeLink}));
  }

  async _loadRequestedPage(filePath) {
    const request = await fetch(filePath);
    const data = await request.text();

    view.renderLoadedFile(data);
  }

  handle() {
    const currentPath = window.location.pathname;
    const filePath = this._routes[currentPath] || this._routes[404];

    this._loadRequestedPage(filePath);
  }
}