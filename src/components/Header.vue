<template>
      
    <div class="navbar has-shadow is-transparent is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="navbar-brand has-background-primary ">
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


