<template>

      <router-view/>

      <div>
        <form @submit.prevent="ajoutContact">
          <h2>Ajouter une nouvelle personne</h2>
          <label>Nom :   </label>
          <input type="text" v-model="formView.nom"/><br><br>
          <span v-if="formView.nom.length==0">Remplir le champ de caractères</span><br><br>
          <label>Téléphone :   </label>
          <input type="text" v-model="formView.numero" /><br><br>
          <span v-if="formView.numero.length != 10">Mettez les 10 numéros à la suite</span><br><br>
          <span v-if="formView.numero.length == 10 && formView.nom.length!=0" class="youpi">Vous pouvez valider 👍</span><br><br>
          
          <button type="submit" class="validate">Valider</button>
        </form>
      </div>

      <!-- <div v-for="contact in contacts" :key="contact.name">
            {{contact.name}}
      </div> -->
    
</template>
<script>
export default {
    name: 'FormView',
    props : [
        'contacts'
    ],
    computed: {
                contact(){
                    return this.$store.state.contacts
                }
            },
    data() {
        return {
            error: false,
            formView: {
                nom: '',
                numero: "",
            },
        }
    },

    methods: {
            ajoutContact() {
                if(this.formView.nom == "" || this.formView.numero == "") return
                    // if(this.contacts.find(contact => contact.nom == this.formView.nom)) return
                        this.$store.commit('ajoutContact', this.formView)
                // if(this.formPerso.pseudo.length<3){
                // this.error=true
                // return
                
 

                // this.$emit('ajoutPerso', this.formPerso)

                this.formView = {
                    pseudo: "",
                    age: null
                }
                    


            }
        }
}
</script>
<style scoped>
.validate{
    margin-top: 20px;
    background-color: #42b983;
    color: white;
    font-size: large;
    padding: 1rem;
    border-radius: 10px;
    transition: all 0.3s ease 0s;
    border: none;
    cursor: pointer;

}

.validate:hover{
    transform: scale(1.2,1.2);
    transition: all 0.3s ease 0s;

}

span{
    background-color: red;
    padding: 0.4rem;
    border-radius: 15px;
    color: white;


}

.youpi{
    background-color: green;
    padding: 0.4rem;
    border-radius: 15px;
    color: white;
}
    
</style>