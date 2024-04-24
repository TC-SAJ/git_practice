import { composeBundles, createUrlBundle } from "redux-bundler";
import routeBundle from "./routes-bundle";
import routerUtilityBundle from "./router-utility-bundle";

export default composeBundles(createUrlBundle(), routeBundle, routerUtilityBundle);