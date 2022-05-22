import Vue from 'vue'
import App from './App.vue'
import versionCompare from 'version-compare';

console.log(versionCompare)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
