<script>
import CardComponent from '../components/CardComponent.vue';

export default {
  beforeMount() {

  },
  mounted() {
    console.log("dsgsggsgsg", this.suggestionData);
  },
  data() {
    return {
      alertCondition: false
    };
  },
  computed: {
    ilanData() {
      return this.$store.getters.getIlanById(parseInt(this.$route.params.id));
    },
    suggestionData() {
      return this.$store.getters.getIlanByKategori(parseInt(this.ilanData.kategori_id), parseInt(this.$route.params.id))
    }
  },
  methods: {
    backHome() {
      this.$router.push({ name: 'home' });
    },
    sendTeklif() {
      this.alertCondition = true;
      setTimeout(() => {
        this.alertCondition = false;
      }, 1700);
    },
    goDetail(card){
      this.$router.push({ name: 'DetailPage', params: { id: card.id }});
    }
  },
  components: { CardComponent }
}

</script>

<template>
  <div class="myCont">
    <div class="leftSideCont">
      <div style="margin-bottom:20px ;" class="card-footer text-muted">
        Aynı Kategorideki Benzer İlanlar
      </div>
      <Card @click="goDetail(card)" style="margin-bottom:10px;cursor: pointer;" v-for="(card, index) in suggestionData" :key="index" :card="card"></Card>
      <div v-if="this.suggestionData.length<1" class="card-footer text-muted">
                Bu kategotide benzer kayıt bulunamamıştır
            </div>
    </div>
    <div class="rightSideCont">
      <div style="margin-bottom:20px ; display: flex;" class="card-footer text-muted">
        <router-link style=" color:black; text-decoration: none;" to="/"><p style="margin: 0;">
          Anasayfa -->
        </p></router-link>


        <p style="margin: 0;"> İlan Detayları</p>

      </div>
      <div class="card" style="">
        <div class="card-header bg-dark text-white ">
          {{ ilanData.ilan_baslik }} - {{ ilanData.ilan_sahibi }}
        </div>
        <div style="">
          <div class="card-body" style="">
            <h5 class="card-title">{{ ilanData.ilan_baslik }}</h5>
            <p class="card-text">{{ ilanData.ilan_aciklama }}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">İlan Sahibi: {{ ilanData.ilan_sahibi }}</li>
            <li class="list-group-item">İlan Tarihi: {{ ilanData.ilan_tarihi }}</li>
            <li class="list-group-item">Tel No: {{ ilanData.telno }}</li>
            <li class="list-group-item">İl/İlçe: {{ ilanData.il }} / {{ ilanData.ilce }}</li>
          </ul>
          <div class="buttonCont">
            <!-- <button id="teklifButton" class="btn btn-dark"> Teklif Ver </button> -->
            <div style="width: 50%;" class="input-group">
              <input type="text" class="form-control" placeholder="Teklif Tutarı Giriniz"
                aria-label="Recipient's username" aria-describedby="button-addon2">
              <button @click="sendTeklif" class="btn btn-dark" type="button">Teklif Ver</button>
            </div>
  
          </div>
        </div>

      </div>
    </div>
    
  </div>
  <FooterComponent id="foot" style="    position: absolute;
    bottom: 0;
    width: 100%;"></FooterComponent>


  <AlertComponent v-show="this.alertCondition" textMessage="Teklifiniz Başarıyla İlan Sahibine İletildi !" style="position: absolute;
    right: 10px;
    bottom: 0;"></AlertComponent>
</template>

<style scoped>
.myCont {
  display: flex;

}

.container {
  padding: 0 25% 0 25%;
}

.buttonCont {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px 10px 30px 10px;
}

#backButton {
  width: 50%;
}

#teklifButton {
  width: 50%;
  margin-top: 20px;
}

.routCont {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}

@media (max-width: 480px) {
  #teklifButton {
    width: 80%;
  }

  .buttonCont {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
  }
}
</style>
