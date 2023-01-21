import { createStore } from 'vuex'

export default createStore({
  state: {
    appels:[
{
  nom:'Gérard',
  date:'2023-1-20 18:8:35',

}
    ],
    contacts: [
      {
        nom:'Gérard',
        numero:'0606060606'
      },
      {
        nom:'Sylvie',
        numero:'0707070707'
      },
      {
        nom:'Jean',
        numero:'0808080808'
      },


    ],


  },
  getters: {
  },
  mutations: {
    ajoutContact(state,contact){
      this.state.contacts.push(contact)
      
    },
    ajoutAppel(state,appel){
      this.state.appels.push(appel)

    }
  },
  actions: {
  },
  modules: {
  }
})
