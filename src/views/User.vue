<template>
  <div class="">
    <div v-if="uid" class="has-text-centered">
      <button @click="signOut" class="button is-danger">sign out</button>
    </div>
    
    <div v-if="uid" class="box">
      <h1>hello {{userData.name}}</h1>
      <img :src="userData.profileUrl" alt="no photo" />
    </div>
  
        
    <div v-if="uid===''" class="modal is-active section">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="field has-text-centered">
          <p v-if="!error" class="has-text-success">{{loading}}</p>
          <p class="help has-text-danger">{{error}}</p>
        </div>
        <SignIn v-if="formType==='signIn' " @signIn="signIn($event)" @signUp="formType='signUp'; "/>
        <SignUp v-if="formType==='signUp' " @signUp="signUp($event)" @signIn="formType='signIn'; "/>
      </div>
      <button @click="$router.push('/')" class="modal-close is-large" aria-label="close"></button>
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
      userData:{ },
      uid : null,
      formType : "signIn",
      error:"",
      loading : ""
    }  
  },
  mounted(){
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.uid=user.uid;
        this.getUserData(this.uid);
      } 
      else {
        this.uid=""
      }
    });
  },
  methods :{
    signIn(event){
      this.loading="signing in"
      auth.signInWithEmailAndPassword(event.email,event.password)
      .then(() => {
        this.error=""
        this.loading="done"
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
        })
      })
      })
    },
    getUserData(uid){
      const dataRef = db.collection('users').doc(`${uid}`)
      dataRef.get()
      .then((doc)=>{
        this.userData=doc.data()
      })
      
    },
    signOut(){
      auth.signOut().then(()=>{
        this.uid="";
        this.loading=""
      })
    }
    
  }
}
</script>