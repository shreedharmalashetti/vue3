<template>
  <div class="box">
   
    
    <div class="field">
      <label class="label">email</label>
      <div class="control">
        <input v-model="form.email" class="input is-rounded is-success" type="email" placeholder="email">
      </div>
    </div>
    
    <div class="field">
      <label class="label">password</label>
      <div class="control">
        <input v-model="form.password" class="input is-rounded is-success" type="password" placeholder="password">
      </div>
    </div>
    
    <div class="field">
      <label class="label">name</label>
      <div class="control">
        <input v-model="form.name" class="input is-rounded is-success" type="text" placeholder="name">
      </div>
    </div>
   
    <div class="field ">
      <label class="label">profile photo</label>
      <input class="input is-success is-rounded"  @change="previewImage($event)" type="file" >
    </div>
 
  
  
    <button @click="signUp" class="button is-fullwidth is-success">
            signup
    </button>
      
    <div class="has-text-centered">
    <h1 class="is-size-4">or</h1>
    <a class="" @click="$emit('signIn')">
          go to signin page 
    </a>
    </div>
    
      
 
   
  </div>
</template>



<script>
export default {
 name : "SignUp",
  data() {
    return {
      form: {
        uid : "",
        chat : "",
        name : "",
        file : null,
        profileUrl:"",
        email: "",
        password: ""
      }
    };
  },
 
  methods: {
    previewImage(event){
      this.form.file=event.target.files[0];
    },
   
    signUp() {
      this.$emit('signUp',this.form)
    },
    
  }
}
</script>