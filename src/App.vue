<template>
  <section class="hero is-fullheight">
    <div class="hero-head navbar is-fixed-top has-background-primary">
      <div class="tabs">
        <a @click="$router.push('/user')">user</a>
      </div>
    </div>
    <div class="hero-body">
      <router-view/>
    </div>
  
    
  </section>
  
</template>

<script>
  
  
  export default {
    computed : {
     
    }
  }
</script>
<style>

</style>
