<template>

<div class="bloc">


  <div v-for="contact in contacts" :key="contact.nom">
    <CartePerso :contact="contact" />

  </div>

</div>
<router-link to="/ajoutContact">
  <button class="add">
  <img src="@/assets/add.png" alt="add">
</button></router-link>
<router-view/>

</template>





<script>





import CartePerso from "@/components/CartePerso.vue"
export default {
  
  name: 'ContactView',
  components: {
    CartePerso
  },
  computed: {
                contacts(){
                    return this.$store.state.contacts
                },
                
            },
  data(){
      return{
        formView : {
          nom:"",
          numero:""
        }

      }
  },
  methods: {
        getCurrentDate() {
      var d = new Date();
var date = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
var hours = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
var fullDate = date+' '+hours;
console.log(fullDate);
return fullDate
  },
      ajoutAppel() {
        // console.log(this.getCurrentDate, this.formView.nom)
        this.$store.commit('ajoutAppel', {
            nom:'this.formView.nom',
            date:this.getCurrentDate()
            
        })
  }
  }
}
</script>





















<style scoped>

.flex{
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5vw;
  margin-bottom: 20px;
}

.add{
  background-color: #42b983;
  position: absolute;
  right: -20px;
  top: -20px;
  height: auto;
  width: 10em;
  height: 10em;
  transition: all 1s ease 0s;
}

.add:hover{
  width: 50vw;
  height: 50vw;
  transition: all 2s ease 0s;
  transform: translateX(80px);
}
h2{
  margin-top: 75px;
}
.bloc{
 margin-top:50px;
 margin-bottom: 50px;
 width: 80%;
 margin: auto;

}
.flex{
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5vw;
  margin-bottom: 20px;

}

.flex:first-child{
  margin-top: 40px;
  
}

img{
  transform: scale(0.7,0.7) translateX(-7px);
  
}
button{
  border-radius: 100%;
  border: none;
  background-color:#137F85;
  cursor: pointer;
  width: 50px;
}

button:hover{
  background-color: #42b983;
  
}

span{
  font-size: small;
  color: darkgrey;
  display: block;
}
</style>

