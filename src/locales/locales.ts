import { enUS } from './en-us';
import { ptBR } from './pt-br';

const locales: LocaleOptions = {
  'pt-BR': ptBR,
  'en-US': enUS
};

type LocaleOptions = {
  [key: string]: Locale;
};

export function getLocale(locale?: string) {
  const local = locale ? locale : 'pt-BR';
  return locales[local];
}

export type Locale = {
  home: string;
  explore: string;
  subscriptions: string;
  library: string;
  yourVideos: string;
  watchLater: string;
  likedVideos: string;
  search: string;
  views: string;
  all: string;
  history: string;
  changeTheme: string;
  english: string;
  portuguese: string;
};
