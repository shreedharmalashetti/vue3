<template>
<div>
 
 <!-- <div class="has-text-centered">
    <button @click="photos=highPhotos" class="button is-primary mx-2">highPhotos</button>
    <button @click="photos=lowPhotos" class="button is-primary is-light mx-2">lowPhotos</button>
  </div>
  -->
  
 
  
  <div v-if="isModel" class="modal is-active section">
      <div class="modal-background"></div>
      <div class="modal-content">
        <img :src="modelPhoto" alt="no photo" />
      </div>
      <button @click="isModel=false" class="modal-close is-large" aria-label="close"></button>
  </div>
   
      
  <div class="columns ">
    <div class="column is-4">
      <div v-for="(photo,i) in photos" :key='i' class="">
        <img @click="showPhoto(photo)" v-if="i%3===0" :src="photo" alt="no photo" />
      </div>
    </div>
    <div class="column is-4">
      <div v-for="(photo,i) in photos" :key='i' class="">
        <img @click="showPhoto(photo)" v-if="i%3===1" :src="photo" alt="no photo" />
      </div>
    </div>
    <div class="column is-4">
      <div v-for="(photo,i) in photos" :key='i' class="">
        <img @click="showPhoto(photo)" v-if="i%3===2" :src="photo" alt="no photo" />
      </div>
    </div>
  </div>
  
</div>
</template>
<script>
import {db} from '../firebase.js'
export default {
  data(){
    return{
    photos:null,
    highPhotos:[],
    lowPhotos:[],
    isModel:false,
    modelPhoto:""
    }
  },
  mounted(){
   this.getDoc();
   this.photos=this.highPhotos;
  },
  methods:{
    getDoc(){
    const doc=db.collection("telegram").doc("Shreedhar malashetti")
    doc.get()
    .then(doc=> {
      doc.data().photos.forEach((photo)=>{
        this.highPhotos.push(photo.highPhoto)
        this.lowPhotos.push(photo.lowPhoto)
      })
    })
    .catch((err)=>{
      alert(err.message)
    })
    },
    showPhoto(p){
      this.modelPhoto=p
      this.isModel= true
    }
  }
    
}
</script>