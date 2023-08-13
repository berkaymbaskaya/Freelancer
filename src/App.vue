<script>
import { RouterLink, RouterView } from 'vue-router'
import axios from 'axios';
//COMPONENTS
import { useStore } from 'vuex';
export default {
  data() {
    return {
      message: 'Hello!',
      count: 0
    };
  },
  async beforeMount() {
    const store = useStore();
    await this.fetchApiData(store);
  },
  methods: {
    async fetchApiData(store) {
      axios.get('https://cbs.elazig.bel.tr/mobiltest/Allilanlar?filter=10').then((res)=>{
        let data=res.data
        store.commit('SET_ILANLAR', data); 
      })
      //
      axios.get('https://cbs.elazig.bel.tr/mobiltest/AllKategori').then((res)=>{
        let data=res.data
        store.commit('SET_KATEGORİ',data)
        console.log("kategori",data)
        console.log(this.$store.state.kategorilerData)
      })
    }
  }
};


</script>

<template>
  <div class="wrapper">
    <Header/>
    <RouterView />
  </div>
</template>


<style scoped>

.wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

</style>
