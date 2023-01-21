<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
<div class="bloc">


  <!-- <div class="flex">
    <p>Gérard</p>
    <span>le 31/12/2022 à 21h45</span>
    <button><img src="@/assets/appel.png" /></button>
  </div> -->

    <div class="flex" v-for="appel in appels" :key=appel.nom>
      <p>{{appel.nom}}</p>
      <span>{{appel.date}}</span> 
      <button><img src="@/assets/appel.png" /></button>
    </div>

</div>
</template>


<script>
// console.log(Date().toLocaleString())

export default{
  name:'JournalView',
  computed:{
    appels(){
      return this.$store.state.appels
    }

  },data(){

  },

}

</script>
<style scoped>

.bloc{
 margin-top:50px;
}
.flex{
  width: 50%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5vw;
  margin-bottom: 20px;
}

img{
  transform: scale(0.7,0.7) translateX(-7px);
  
}
button{
  border-radius: 100%;
  border: none;
  display: none;

  width: 50px;
}



span{
  font-size: small;
  color: darkgrey;
  display: block;
}
</style>

