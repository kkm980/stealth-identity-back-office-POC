// route-name-extractor.ts

import { RouteLabel, routeLabelMap, RoutePath } from "../constants/route-module-constants";


export const getModuleKeyFromUrl = (url: string): RouteLabel | null => {
  try {
    const { pathname } = new URL(url);
    // Extract the last segment of the path
    const path = '/' + pathname.split('/').filter(Boolean).pop();
    let selectedModule =  routeLabelMap[path as RoutePath] ?? null;
    return selectedModule;
  } catch (error) {
    console.error('Invalid URL:', url);
    window.location.href = '/';
    return null;
  }
};
