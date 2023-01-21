<template>
    <div class="flex">
        <p>{{ contact.nom }}</p>
        <span>{{ contact.numero }}</span>
        <button><img src="@/assets/appel.png" @click="ajoutAppel()"/></button>
        
        </div>  




    </template>
    <script>
    export default {
        name:'CartePerso',
        props : [
            'contact'
        ],
        data(){
      return{
        formView : {
          nom:"",
          numero:""
        }

      }
  },
        computed: {
                contacts(){
                    return this.$store.state.contacts
                },
                
            },
            methods:{
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
            nom:this.contact.nom,
            date:this.getCurrentDate()
            
        })
  }
            }
    }
    </script>
    <style scoped>

      
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