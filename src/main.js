import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//components
import Header from './components/Header.vue'
import Card from './components/CardComponent.vue'
import Pagination from './components/Pagination.vue'
import FilterMenuComponent from './components/FilterMenuComponent.vue';
import AlertComponent from './components/AlertComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
//BS
const app = createApp(App)
//components
app.component('Header',Header)
app.component('Card',Card)
app.component('Pagination',Pagination)
app.component('FilterMenuComponent',FilterMenuComponent)
app.component('AlertComponent',AlertComponent)
app.component('FooterComponent',FooterComponent)

app.use(router)
app.use(store)
// Make BootstrapVue available throughout your project


app.mount('#app')
