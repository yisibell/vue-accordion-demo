import Vue from 'vue'
import App from './App.vue'
import accordion from './accordion'

Vue.use(accordion)

new Vue({
  el: "#app",
  render(h){
    return h(App)
  }
})