import type { App,Plugin} from 'vue'
import { each } from 'lodash-es'

type SFCWithInstall<T> = T & Plugin
export function makeInstaller(component: Plugin[]){
  const installer = (app:App) => each(component,c=>app.use(c))
  return installer as Plugin
}

export const withInstall = <T>(component: T) => {
  (component as SFCWithInstall<T>).install = (app: App) => {
    const componentName = (component as any)?.name
    if (componentName) {
      app.component(componentName, component as SFCWithInstall<T>)
    }
  }
  return component as SFCWithInstall<T>
}

