<template>
  <div class="container">
  
    <div class="field">
        <p class="help has-text-danger">{{error}}</p>
    </div>
    <p>{{loading}}</p>
    
    <SignIn v-if="formType==='signIn'" @signIn="signIn($event)" @signUp="formType='signUp'; signInForm=null"/>
    <SignUp v-if="formType==='signUp'" @signUp="signUp($event)" @signIn="formType='signIn'; signUpForm=null"/>
    
    
  </div>
</template>

<script>
import {auth,db,storage } from '../firebase.js'
import SignIn from '../components/SignIn.vue'
import SignUp from '../components/SignUp.vue'
export default {
  components :{
    SignIn,
    SignUp
  },
  data(){
    return{
      formType : "signIn",
      uid : "",
      error:"",
      loading : ""
    }  
  },
  computed :{
  },
  created(){
   // eventEmitter.on('count',alert('event'))
  },
  methods :{
    signIn(event){
      auth.signInWithEmailAndPassword(event.email,event.password)
      .then(data => {
        this.uid=data.user.uid
        this.$router.push(`/chat/${this.uid}`)
      })
      .catch((err)=>{
        this.error=err.message
      })
    },
    signUp(event) {
      this.loading="signing up"
     auth.createUserWithEmailAndPassword(event.email,event.password)
     .then(data => {
        this.uid = data.user.uid;
        event.uid = data.user.uid;
        this.onUpload(event)
      })
      .catch((err) => {
        this.error = err.message;
      });
    },
    onUpload(event){
      this.loading= "uploading photo"
      const dataRef = db.collection('users').doc(`${this.uid}`)
      const storageRef = storage.ref(`profilephotos/${this.uid}`);
      storageRef.put(event.file)
      .then((snapshot)=>{
        snapshot.ref.getDownloadURL()
        .then(url=>{
        event.profileUrl = url;
        delete event.file;
        this.loading = "storing userdata"
        dataRef.set(event)
        .then(()=>{
          this.loading="done"
          this.$router.push(`/chat/${this.uid}`)
        })
      })
      })
      
    },
    
  }
}
</script>