<script>
import axios from 'axios';
import { useStore } from 'vuex';
export default {
  beforeMount() {
    this.store = useStore();
    console.log("store burda", this.store); // Vuex store'u burada kullanın
  },
  data() {
    return {
      kategori: "0",
      il: 0,
    }

  },
  computed: {
    kategoriler() {
      return this.$store.state.kategorilerData
    }
  },
  methods: {
    getData() {
      console.log(this.$store.state.kategorilerData)
    },
    FilterIlanlar() {
      //EĞER TÜM KATEGORİLER SEÇİLİYSE
      if (this.kategori == 0 && this.il==0) {
        axios.get('https://cbs.elazig.bel.tr/mobiltest/Allilanlar?filter=10').then((res) => {
          let data = res.data
          this.store.commit('SET_ILANLAR', data);
        })
      }
      //EĞER FİLTRE VARSA
      else {
        //REQUEST DATASINI TANIMLIYORUZ
        let data = {
        };
        if(this.kategori !=0){
          data.kategori_id=this.kategori
        }
        // il parametresi varsa ekliyoruz
        if(this.il !=0){
          data.il=this.il
        }
        console.log(data)
        //FİLTER POST APİ
        axios
          .post('https://cbs.elazig.bel.tr/mobiltest/Filterİlanlar', data)
          .then(response => {
            console.log(response.data);
            this.store.commit('SET_ILANLAR', response.data);
          })
          .catch(error => {
            console.log(error)
          })
      }
    }
  },
}
</script>
<template >
  <div>

    <div class="mb-3">
      <label for="basic-url" class="form-label">İlan Kategorisi</label>
      <div class="input-group">
        <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon"
          v-model="kategori">
          <option value="0">Hepsi</option>
          <option v-for="item in kategoriler" :value="item.id" :key="item.id">{{ item.kategori_adi }}</option>
        </select>
      </div>
    </div>
    <div class="mb-3">
      <label for="basic-url" class="form-label">İl Seçiniz</label>
      <div class="input-group">
        <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon" v-model="il">
          <option value="0">Hepsi</option>
          <option value="İstanbul">İstanbul</option>
          <option value="Ankara">Ankara</option>
          <option value="İzmir">İzmir</option>
        </select>
      </div>
    </div>


    <div class="mb-3">
      <button class="btn btn-dark" @click="FilterIlanlar()"> Filtrele</button>
    </div>
  </div>
</template>
<style ></style>