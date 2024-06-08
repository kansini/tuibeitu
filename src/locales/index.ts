import { createI18n } from 'vue-i18n';
import { store } from "@/store"
import zhCN from './zh-CN.json';
import enUS from './en-US.json';


export type Typelanguage = 'en-US' | 'zh-CN';
type MessageSchema = typeof enUS;


export const I18nMessages = {
  'zh-CN': zhCN,
  'en-US': enUS,
};

const i18n = createI18n<[MessageSchema], Typelanguage>({
  legacy: false,
  globalInjection: true,
  locale: store.state.language.type,
  fallbackLocale: 'zh-CN',
  messages: I18nMessages,
});


export default i18n;
