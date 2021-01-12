<template>
  <section class="">
    <div class="">
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
    computed : {
     
    }
  }
</script>
<style>

</style>
