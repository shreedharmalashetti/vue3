<template>
  <section class="hero is-fullheight">
    <div class="hero-head navbar is-fixed-top has-background-primary">
      <Header/>
    </div>
    <div class="hero-body">
      <router-view/>
    </div>
  
    
  </section>
  
</template>

<script>
import Header from './components/Header.vue'
  
  export default {
    components:{
      Header
    },
    computed : {
     
    }
  }
</script>
<style>

</style>
