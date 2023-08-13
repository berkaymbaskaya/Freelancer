import { createStore } from 'vuex';

export default createStore({
  state: {
    // Durum (state) tanımlamalarınızı burada yapabilirsiniz
    ilanlarData: null,
    kategorilerData:null,
    suggestionData:null
  },
  mutations: {
    SET_ILANLAR(state, data) {
      state.ilanlarData = data;
    },
    SET_KATEGORİ(state,data){
      state.kategorilerData=data;
    }

  },
  actions: {
  },
  getters: {
    getIlanById: (state) => (id) => {
      const ilan = state.ilanlarData.find(function (item) {
        return item.id === id;
      });
      return ilan;
    },
    getIlanByKategori:(state)=>(kategoriID,elementID)=>{
      const ilan = state.ilanlarData.filter(function (item) {
        return item.kategori_id === kategoriID && item.id !== elementID;;
      });
      return ilan;
    }
  }
});
