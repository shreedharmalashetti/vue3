<template>
      
    <div class="navbar  is-transparent has-shadow is-fixed-top " role="navigation" aria-label="main navigation">
      <div class="navbar-brand ">
        <div class="navbar-item">
          <h1 class="title">app</h1>
        </div>
        <a role="button" @click = "toggle" :class="show" class="navbar-burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        </a>
      </div>
      
      
          
      
      <div :class="show" class=" navbar-menu ">
        <div v-for="route in routes" :key="route" class="navbar-start">
          <a class="navbar-item" @click="navigate(route.path)" >{{route.name}}</a> 
        </div>
       
        <div class="navbar-end ">
          <div class="navbar-item buttons">
            <a class="button is-primary" @click="navigate('/user/signIn')" >sign in</a>
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
          path : "/home"
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


