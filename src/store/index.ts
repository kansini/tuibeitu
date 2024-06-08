import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from 'vuex';
// @ts-ignore
import languageModule, { Language } from "./language"



export interface RootState {
  language: Language;
}

export const key: InjectionKey<Store<RootState>> = Symbol();



export const store = createStore<RootState>({
  modules: {
    language: languageModule,
  }
});

export function useStore() {
  return baseUseStore(key);
}
