import { createRouteBundle } from "redux-bundler";
import Home from "../app-pages/home";
import Location from "../app-pages/location";

export default createRouteBundle({
  "": Home,
  "/": Home,
  "/office/:office/location/:location": Location,
  "*": Home,
}, {
  routeInfoSelector: "selectPathnameMinusBase"
});