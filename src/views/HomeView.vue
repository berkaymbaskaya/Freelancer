<script >
import CardComponent from '../components/CardComponent.vue';
import { isProxy, toRaw } from 'vue';

export default {
    components: {
        CardComponent
    },
    mounted() {
        console.log(this.cards)
    },
    computed: {
        cards() {
            return this.$store.state.ilanlarData;
        }
    },
    methods: {
        goDetail(card) {
            this.$router.push({ name: 'DetailPage', params: { id: card.id }});
        }
    }
}
</script>

<template>
    <div class="myCont">
        <div class="leftSideCont">
            <FilterMenuComponent></FilterMenuComponent>
        </div>
        <div class="rightSideCont">
            <div v-if="this.cards.length<1" class="card-footer text-muted">
                Filtre Sonucuyla eşleşen kayıt bulunamamıştır
            </div>
            <Card @click="goDetail(card)" class="cards" v-for="(card, index) in cards" :key="index" :card="card"></Card>
            <Pagination v-if="cards.length>0"></Pagination>
        </div>
    </div>
    <FooterComponent id="foot"></FooterComponent> 
</template>
<style>
.cards {
    margin-bottom: 30px;
    cursor: pointer;

}

.myCont {
    display: flex;
    padding: 3% 5% 3% 5%;
}

.leftSideCont {
    width: 25%;
    padding: 0 20px 0 0;
}

.rightSideCont {
    width: 75%;
    display: flex;
    flex-direction: column;

}

.subHeader {
    display: flex;
    margin-bottom: 20px;
}

@media (max-width: 830px) {
    .myCont {
        padding: 0 5%;
    }
}

/* Telefonlar için */
@media (max-width: 480px) {
    .myCont {
        padding: 0;
    }
}
</style>
