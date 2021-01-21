<template>
  <div v-if="isAuthenticated">
    <Header title="hello"/>
  </div>
  <div v-if="isAuthenticated===false" class="section has-text-centered">
    <a @click="$router.push('/user/signIn')" class="button is-primary">go to signIn page</a>
  </div>
  <div>
    <router-view/>
  </div>
</template>

<script>
import {auth} from './firebase.js'
import Header from './components/Header.vue'
  
  export default {
    components:{
      Header
    },
    data(){
      return {
        isAuthenticated : null
      }
    },
    mounted(){
      auth.onAuthStateChanged((user) => {
      if (user) {
        this.isAuthenticated=true
        this.$router.beforeEach(async (to, from, next) => {
          const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
          if (requiresAuth && !this.isAuthenticated){
           next('/');
          }
          else{
           next();
          }
        });
      } 
      else {
        this.isAuthenticated=false;
      }
      });
      
    }
  }
</script>
<style>

</style>
