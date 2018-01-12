import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home.vue'
import Demo from '../pages/Demo.vue'
import InputPage from '../pages/InputPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/demo', name: 'demo', component: Demo },
    { path: '/input', name: 'inputPage', component: InputPage }
  ]
})
