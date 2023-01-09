import { defineComponent, ref } from 'vue'; 
import { RouterView } from 'vue-router'

export const App = defineComponent({
  setup() {
   
    return () => <>
      <header>导航
        <ul>
          <li>
            <router-link to='/'>Foo</router-link>
          </li>
          <li>
            <router-link to='/bar'>Bar</router-link>
          </li>
        </ul>
      </header>
      <main>
        <router-view></router-view>
      </main>
      <footer>页脚</footer>
    </>
  }
})