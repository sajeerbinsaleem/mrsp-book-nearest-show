import { createApp } from 'vue'
import Vue from "vue";
import App from './App.vue'
import router from './router'
import 'bootstrap-scss';
import VueAgile from 'vue-agile'
// install rules and localization

  
  
  
createApp(App).use(router).use(VueAgile).mount('#app')
