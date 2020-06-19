import { VuexModule, Module } from 'vuex-module-decorators'

@Module({ namespaced: true, name: 'Base' })
export default class Base extends VuexModule {
  public base: string[] = ['Archive 1', 'Archive 2']

  /*@Mutation
  public m_toggleMenu(): void {
    this.menuOpened = !this.menuOpened
  }

  @Action
  public updateName(newName: string): void {
    this.context.commit('setName', newName)
  }*/

  /* get axles() {
    return this.wheels / 2
  } */
}

