import{_ as b,C as y,r as i,o as n,c as r,a as t,F as _,b as k,d as f,e as d,w as C,t as a,f as v,v as D,g as x,p as I,h as T}from"./index-6d4c5ca8.js";const B={beforeMount(){},mounted(){console.log("dsgsggsgsg",this.suggestionData)},data(){return{alertCondition:!1}},computed:{ilanData(){return this.$store.getters.getIlanById(parseInt(this.$route.params.id))},suggestionData(){return this.$store.getters.getIlanByKategori(parseInt(this.ilanData.kategori_id),parseInt(this.$route.params.id))}},methods:{backHome(){this.$router.push({name:"home"})},sendTeklif(){this.alertCondition=!0,setTimeout(()=>{this.alertCondition=!1},1700)},goDetail(s){this.$router.push({name:"DetailPage",params:{id:s.id}})}},components:{CardComponent:y}},l=s=>(I("data-v-1bcd177d"),s=s(),T(),s),S={class:"myCont"},w={class:"leftSideContainer"},A=l(()=>t("div",{style:{"margin-bottom":"20px"},class:"card-footer text-muted"}," Aynı Kategorideki Benzer İlanlar ",-1)),V={key:0,class:"card-footer text-muted"},z={class:"rightSideCont"},F={style:{"margin-bottom":"20px",display:"flex"},class:"card-footer text-muted"},N=l(()=>t("p",{style:{margin:"0"}}," Anasayfa --> ",-1)),G=l(()=>t("p",{style:{margin:"0"}}," İlan Detayları",-1)),K={class:"card",style:{}},M={class:"card-header bg-dark text-white"},E={style:{}},H={class:"card-body",style:{}},L={class:"card-title"},P={class:"card-text"},R={class:"list-group list-group-flush"},j={class:"list-group-item"},q={class:"list-group-item"},J={class:"list-group-item"},O={class:"list-group-item"},Q={class:"buttonCont"},U={id:"inputGroup",class:"input-group"},W=l(()=>t("input",{type:"text",class:"form-control",placeholder:"Teklif Tutarı Giriniz","aria-label":"Recipient's username","aria-describedby":"button-addon2"},null,-1)),X={id:"foot"};function Y(s,c,Z,$,tt,e){const u=i("Card"),h=i("router-link"),m=i("FooterComponent"),p=i("AlertComponent");return n(),r(_,null,[t("div",S,[t("div",w,[A,(n(!0),r(_,null,k(e.suggestionData,(o,g)=>(n(),x(u,{onClick:et=>e.goDetail(o),style:{"margin-bottom":"10px",cursor:"pointer"},key:g,card:o},null,8,["onClick","card"]))),128)),this.suggestionData.length<1?(n(),r("div",V," Bu kategotide benzer kayıt bulunamamıştır ")):f("",!0)]),t("div",z,[t("div",F,[d(h,{style:{color:"black","text-decoration":"none"},to:"/"},{default:C(()=>[N]),_:1}),G]),t("div",K,[t("div",M,a(e.ilanData.ilan_baslik)+" - "+a(e.ilanData.ilan_sahibi),1),t("div",E,[t("div",H,[t("h5",L,a(e.ilanData.ilan_baslik),1),t("p",P,a(e.ilanData.ilan_aciklama),1)]),t("ul",R,[t("li",j,"İlan Sahibi: "+a(e.ilanData.ilan_sahibi),1),t("li",q,"İlan Tarihi: "+a(e.ilanData.ilan_tarihi),1),t("li",J,"Tel No: "+a(e.ilanData.telno),1),t("li",O,"İl/İlçe: "+a(e.ilanData.il)+" / "+a(e.ilanData.ilce),1)]),t("div",Q,[t("div",U,[W,t("button",{onClick:c[0]||(c[0]=(...o)=>e.sendTeklif&&e.sendTeklif(...o)),class:"btn btn-dark",type:"button"},"Teklif Ver")])])])])])]),t("div",X,[d(m,{style:{}})]),v(d(p,{textMessage:"Teklifiniz Başarıyla İlan Sahibine İletildi !",style:{position:"absolute",right:"10px",bottom:"0"}},null,512),[[D,this.alertCondition]])],64)}const st=b(B,[["render",Y],["__scopeId","data-v-1bcd177d"]]);export{st as default};
