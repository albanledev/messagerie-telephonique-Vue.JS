<template>




<!-- <button @click="search()">Find</button> -->

  
  <div v-for="contact in contacts" :key="contact.nom">
        <div>
          <span v-if="number===contact.numero" >{{contact.nom}}</span>
          
        </div>
  </div>

  <span>{{number}}</span>




  <div class="grille">


      <button v-for="textOption in textOptions" v-bind:key="textOption" v-on:click="showText(textOption)">{{textOption}}</button>
      <button class="delete" @click="deleteView()"><img src='@/assets/delete.png' alt='' /></button>
      <button class="cell0"  v-on:click="showText(0)">0</button>
      <button class="appeler" @click="ajoutAppel() "><img src='@/assets/appel.png' alt=''/></button>
      
    
  </div>


 
 

</template>

<script>


export default {
  name:'ClavierView',
  computed : {
    contacts(){
      return this.$store.state.contacts
    },

    search(){
      let foundItem = this.$store.state.contacts.find(contact => contact.numero === this.number )
      // console.log(this.number)
      if(foundItem){
        console.log(foundItem)
        return foundItem.nom
      }else{
        console.log(this.number)
        console.log(this.number)
        // console.log(this.number)
        return this.number
      }
    }
  },
  
  data() {
    return {
      inconnu:"C'est un numéro inconnu",
      empty:'',
      number: '',
      textOptions: [1,2,3,4,5,6,7,8,9]
    }
  },
  methods: {
    showText(text) {
      this.number += text;
    },
    deleteView(){
      this.number=''
    },
    getCurrentDate() {
      var d = new Date();
var date = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
var hours = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
var fullDate = date+' '+hours;
console.log(fullDate);
return fullDate
  },
    ajoutAppel() {
      if(this.number.length!=10) return
        this.$store.commit('ajoutAppel', {
            nom:this.search,
            date:this.getCurrentDate()
            
        })
  }
}
}
</script>

<style scoped>

.grille{

  display: grid;
  width: 80%;
  grid-template-columns: repeat(3, 75px);
margin: auto;
  justify-content: center;
  gap: 25px;


}

button{
  
  border-radius: 100%;
  height: 75px;
  background-color: transparent;
  border: solid #258ebf 2px;
  font-size: 2em;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease 0s;

  

}

button:hover{
  background-color: #42b983;


}
.cell0 {
  width: 75px;
  margin: auto;
}

.appeler{
   background-color: #258ebf;
}

.appeler>img, .delete>img{
  transform: translateY(5px);
}

.delete{
  background-color: rgb(190, 31, 31);
  border: none;
}

span{
  font-size: 1.5em;
}



</style>