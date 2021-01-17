<template>
      
    <div class="navbar has-shadow is-transparent is-fixed-top has-background-primary" role="navigation" aria-label="main navigation">
      <div v-if="$route.path==='/'">
      <div class="navbar-brand  ">
        <div class="navbar-item">
          <h1 class="title ">app</h1>
        </div>
        <a role="button" @click = "toggle" :class="show" class="navbar-burger is-large" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        </a>
      </div>
      <div :class="show" class="navbar-menu  ">
        <div class="navbar-end ">
          <div v-for="route in routes" :key="route" class="navbar-item" >
            <a @click="navigate(route.path)" >{{route.name}}</a> 
          </div>
        </div>
      </div>
      </div>
      
      <div v-else>
        <div class="navbar-item is-size-4 ">
          <span  @click="$router.go('-1')" class="icon-text">
            <span class="icon">
              <i class="fas fa-arrow-left"></i>
            </span>
            <span> back</span>
          </span>
        </div>   
      </div>
    </div>
</template>

<script>
  export default {
    name : "Header",
    data(){
      return {
        show : "",
        routes:[
          {
          name :"Home",
          path : "/"
          },
          {
          name :"Telegram",
          path : "/telegram"
          },
          {
          name :"User",
          path : "/user/user"
          },
          {
          name :"Chat",
          path : "/chat/chat"
          },
        ]
      };
    },
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


