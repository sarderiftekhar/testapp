import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue } from 'bootstrap-vue'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap-vue/dist/bootstrap-vue.min.css'
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBO6mLxYysaxslbSDIk8_xwQgNFfqUYVk0",
  authDomain: "vuefirebase-316f6.firebaseapp.com",
  databaseURL: "https://vuefirebase-316f6.firebaseio.com",
  projectId: "vuefirebase-316f6",
  storageBucket: "vuefirebase-316f6.appspot.com",
  messagingSenderId: "115774097554",
  appId: "1:115774097554:web:53e443b1c284a8bce4fe4b"
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
