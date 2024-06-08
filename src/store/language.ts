import { Module } from 'vuex';
import { RootState } from '.';
import { Typelanguage } from '@/locales';
export interface Language {
  type: string;
}
const language: Module<Language, RootState> = {
  namespaced: true,
  state: {
    type: 'zh-CN',
  },
  mutations: {
    update(state, payload: Typelanguage) {
      state.type = payload;
    },
  },
  actions: {
    update({ commit }, payload: Typelanguage) {
      commit('update', payload);
    },
  },
};

export default language;
