import { createSelector } from "redux-bundler";
const base = import.meta.env.BASE_URL;

export default {
    name: "routeUtility",
    doUpdateUrlWithBase: (url) => ([ store ]) => {
        store.doUpdateUrl(`${base}${url}`);
},
selectPathnameMinusBase: createSelector("selectPathname",(pathname) => {
    const parts = pathname.split('/')
    parts.splice(1,1);
    return parts.join('/')
})
};