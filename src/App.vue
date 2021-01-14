<template>
  <section class="">
    <div>
      <Header/>
    </div>
    
   
    <div class=" ">
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
  }
</script>
<style>

</style>
