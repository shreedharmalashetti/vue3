<template>
      
    <div class="navbar is-fixed-top " role="navigation" aria-label="main navigation">
      <div class="navbar-brand   has-background-primary">
        <router-link class="navbar-item" to="/user/user">User</router-link> 
        <router-link class="navbar-item" to="/chat">Chat</router-link> 
      
        <a role="button" @click = "toggle" :class="show" class="navbar-burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        </a>
      </div>
      
      
          
      
      <div :class="show" class="navbar-menu  ">
        <div class="navbar-start">
          <a class="navbar-item" @click="navigate('/user')" >User</a> 
          <a class="navbar-item" @click="navigate('/chat')" >Chat</a> 
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
        show : ""
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


