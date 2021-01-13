<template>
  <div class="box">
    <div class="field ">
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
    
   
  
  
    <div class="has-text-centered">
        <button @click="signIn" class="button is-fullwidth is-success">
            signin
        </button>
        <h1 class="is-size-4">or</h1>
        <a @click="$emit('signUp')">click here to signUp</a>
    </div>
  </div>
</template>



<script>

export default {
  name : "SignIn",
  data() {
    return {
      count:0,
      form:{
       email:"",
       password:"",
      },
      error: null
    };
  },
  props:{

  },
  methods: {
    signIn() {
      this.$emit('signIn', this.form);
    }
  }
}
</script>