import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import dateFilter from "./filters/date.filter";
import messagePlugin from "./custom_utils/message.plugin";
import './registerServiceWorker';
import 'materialize-css/dist/js/materialize.min';
import Vuelidate from "vuelidate";

import axios from "axios";
import VueAxios from "vue-axios";


Vue.config.productionTip = false;
Vue.use(messagePlugin);
Vue.filter('date', dateFilter);
Vue.use(Vuelidate);
Vue.use(VueAxios, axios);



new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')


