import { composeBundles, createUrlBundle } from "redux-bundler";
import routeBundle from "./routes-bundle";
import routeUtilityBundle from "./router-utility-bundle";

export default composeBundles(createUrlBundle(), routeBundle, routeUtilityBundle);