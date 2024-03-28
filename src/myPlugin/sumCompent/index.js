import sumCompent from './sum-compent.vue'

sumCompent.install = Vue => Vue.component('add', sumCompent)
if (typeof window !== 'undefined' && window.Vue) {
   install(window.Vue);
}
export default sumCompent