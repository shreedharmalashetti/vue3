import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./../node_modules/bulma/css/bulma.css";
import {auth} from './firebase.js'
var isAuthenticated= null


auth.onAuthStateChanged((user) => {
      if (user) {
        isAuthenticated=true
      } 
      else {
        this.isAuthenticated=false;
      }
router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !isAuthenticated){
    next('/user/signIn');
  }else{
    next();
  }
});
});


createApp(App).use(router).mount('#app')
