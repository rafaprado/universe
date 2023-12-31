import { routeLinks } from "./elements.js";
import { router as routerInstance } from "./main.js";
import { Router } from "./Router.js";

routeLinks.forEach(routeElement => {
  routeElement.addEventListener("click", event => {
    event.preventDefault();

    const linkPath = event.target.href;
    Router._popStateDispatcher(linkPath);
  });
});


window.addEventListener("popstate", () => routerInstance.handle());
window.addEventListener("load", () => routerInstance.handle());