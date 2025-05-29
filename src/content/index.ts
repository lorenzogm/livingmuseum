import { HomeContent, QuienesSomosContent, SharedContent } from './types';
import homeContent from './home.json';
import quienesSomosContent from './quienes-somos.json';
import sharedContent from './shared.json';

export const getHomeContent = (): HomeContent => {
  return homeContent as HomeContent;
};

export const getQuienesSomosContent = (): QuienesSomosContent => {
  return quienesSomosContent as QuienesSomosContent;
};

export const getSharedContent = (): SharedContent => {
  return sharedContent as SharedContent;
};
