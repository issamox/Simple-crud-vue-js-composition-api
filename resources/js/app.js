require('./bootstrap');


import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

import CompaniesIndex from './components/companies/companiesIndex';
import LaravelVuePagination from 'laravel-vue-pagination';


import { createApp } from 'vue';
import router from './router';

createApp({
    components: {
        CompaniesIndex
    }
}).use(router)
  .component('Pagination',LaravelVuePagination)
  .mount("#app");
