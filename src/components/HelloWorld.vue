<template>
  <div class="section has-background-primary">
    <div class="tabs has-background-info is-boxed">
       <ul v-for="(tab,i) in tabs" :key="i">
         <li :class="tab.active" >
           <a  @click="switchTab(i)">{{tab.name}}</a>
         </li>
       </ul>
    </div>
    <div class="has-text-white has-text-centered has-background-danger">
      <p >{{tabContent}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  components: {
  
  },
  data(){
  return{
    tabContent: null,
    tabs:[
      {
        name:"name",
        content:"shreedhar",
        active:""
      },
      {
        name:"surname",
        content:"malashetti",
        active:""
      },
      {
        name:"address",
        content:"kajibilagi",
        active:""
      },
    ]
  }
  },
  methods:{
    switchTab(i){
      this.tabContent=this.tabs[i].content
      this.tabs.forEach((tab)=>{
        tab.active=''
      })
      this.tabs[i].active='is-active'
    }
  }
}
</script>


<style scoped>

</style>
