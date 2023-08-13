<template >
        <div class="card text">
            <div class="card-header bg-dark text-white ">
                {{card.ilan_sahibi}}
            </div>
            <div style="display:flex ;">
                <img style="width:80px;margin: 20px;" src="../assets/logo.png" class="card-img-top" alt="...">
            <div class="card-body" style="display: flex;flex-direction: column; justify-content: center;">
                <h5 class="card-title">{{card.ilan_baslik}}</h5>
                <p class="card-text">{{card.ilan_aciklama }}</p>
            </div>
            </div>
            <div class="card-footer bg-dark text-white">
                {{ card.ilan_tarihi }}
            </div>
        </div>
</template>
<script>
export default {
    props:['card']
}
</script>
<style >
    .buttonCont{
        align-items: center;
    justify-content: center;
    display: flex
    }
    .icon{
        margin-right: 10px;
    }
</style>