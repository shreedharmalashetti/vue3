<template>
  <div class="">
   
    
    <div v-if="userData.name" class="box">
      <h1>hello {{userData.name}}</h1>
      <img :src="userData.profileUrl" alt="no photo" />
    </div>
  
        
    <div v-if="!uid" class="modal is-active section">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="field has-text-centered">
          <p v-if="!error" class="has-text-success">{{loading}}</p>
          <p class="help has-text-danger">{{error}}</p>
        </div>
        <SignIn v-if="formType==='signIn' " @signIn="signIn($event)" @signUp="formType='signUp'; "/>
        <SignUp v-if="formType==='signUp' " @signUp="signUp($event)" @signIn="formType='signIn'; "/>
      </div>
      <button @click="$router.go(-1)" class="modal-close is-large" aria-label="close"></button>
    </div>
    
    
    
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
      userData:{
      },
      uid : "",
      formType : "signIn",
      error:"",
      loading : ""
    }  
  },
  mounted(){
   
  },
  methods :{
    signIn(event){
      this.loading="signing in"
      auth.signInWithEmailAndPassword(event.email,event.password)
      .then(data => {
        const uid=data.user.uid
        this.error=""
        this.loading="getting user data"
        this.getUserData(uid);
        //this.$router.push(`/chat/${this.uid}`)
      })
      .catch((err)=>{
        this.error=err.message
      })
    },
    signUp(event) {
      this.loading="signing up"
     auth.createUserWithEmailAndPassword(event.email,event.password)
     .then(data => {
        const uid = data.user.uid;
        event.uid = uid;
        this.error=""
        this.onUpload(event)
      })
      .catch((err) => {
        this.error = err.message;
      });
    },
    onUpload(event){
      this.loading= "uploading photo"
      const dataRef = db.collection('users').doc(`${event.uid}`)
      const storageRef = storage.ref(`profilephotos/${event.uid}`);
      storageRef.put(event.file)
      .then((snapshot)=>{
        snapshot.ref.getDownloadURL()
        .then(url=>{
        event.profileUrl = url;
        delete event.file;
        this.loading = "storing userdata"
        this.userData=event
        dataRef.set(event)
        .then(()=>{
          this.loading="done"
          this.uid=event.uid
          //this.$router.push(`/chat/${this.uid}`)
        })
      })
      })
    },
    getUserData(uid){
      const dataRef = db.collection('users').doc(`${uid}`)
      dataRef.get()
      .then((doc)=>{
        this.userData=doc.data()
        this.uid=uid
        this.loading = "done"
      })
      
    },
    
  }
}
</script>