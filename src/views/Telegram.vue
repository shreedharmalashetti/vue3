<template>
<div>
 
  <div class="has-text-centered">
    <button @click="photos=highPhotos" class="button is-info mx-2">high quality</button>
    <button disabled="" class="button ">photos: {{photosLength}}</button>
    <button @click="photos=lowPhotos" class="button is-info is-light mx-2">low quality</button>
  </div>
  
  
 
  
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
    photosLength:null,
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
  computed:{
  },
  methods:{
    getDoc(){
    const doc=db.collection("telegram").doc("Shreedhar malashetti")
    doc.get()
    .then(doc=> {
      this.photosLength=doc.data().photos.length;
      doc.data().photos.forEach((photo)=>{
        this.highPhotos.push(photo.high)
        this.lowPhotos.push(photo.low)
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