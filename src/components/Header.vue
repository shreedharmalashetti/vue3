<template>
      
    <div class="navbar has-shadow is-transparent is-fixed-top has-background-primary" role="navigation" aria-label="main navigation">
      
      <div class="navbar-brand  ">
        <div v-if="$route.path==='/'" class="navbar-item">
          <h1 class="title ">app</h1>
        </div>
        <div v-else class="navbar-item">
          <span @click="$router.go(-1)">⬅️ back</span>
        </div>
        <a v-if="$route.path==='/'" role="button" @click = "toggle" :class="show" class="navbar-burger is-large" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        </a>
      </div>
     
      <div :class="show" class="navbar-menu  ">
        <div class="navbar-end">
          <div v-for="route in $router.options.routes" :key="route.path" class="navbar-item" >
            <a @click="navigate(route.path)">{{route.name}}</a> 
          </div>
        </div>
      </div>
      
      
     
    </div>
</template>

<script>
  export default {
    name : "Header",
    data(){
      return {
        show : ""
      };
    },
    props:['title'],
    mounted(){
    },

    methods : {
      toggle(){
        this.show ==='' ? this.show='is-active' : this.show=''
      },
      navigate(path){
        this.$router.push(path)
        this.toggle()
      }
    }
  }
</script>


