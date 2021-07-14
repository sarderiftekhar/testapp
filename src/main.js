import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue } from 'bootstrap-vue'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap-vue/dist/bootstrap-vue.min.css'
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAlVdCoLO0tMVMITRf9thI_swO8hS2b0s8",
    authDomain: "testapp-870c6.firebaseapp.com",
    projectId: "testapp-870c6",
    storageBucket: "testapp-870c6.appspot.com",
    messagingSenderId: "826280738800",
    appId: "1:826280738800:web:6972f8139b99f130ef6735"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false
Vue.use(BootstrapVue)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
