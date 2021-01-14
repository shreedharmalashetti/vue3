<template>
  <div>
    <button @click="getDoc" >get data</button>
  </div>
  <div v-for="photo in photos" :key='photo'>
    <img :src="photo" alt="no photo" />
  </div>
</template>
<script>
import {db} from '../firebase.js'
export default {
  data(){
    return{
      photos:[]
    }
  },
  methods:{
    getDoc(){
    const doc=db.collection("telegram").doc("Shreedhar malashetti")
   
    doc.onSnapshot((doc)=> {
      this.photos=doc.data().photos
    })
    .catch((err)=>{
      alert(err.message)
    })
  }
  }
    
}
</script>