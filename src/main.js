import { createApp } from 'vue'
import VueSweetalert2 from 'vue-sweetalert2'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

import "materialize-css/dist/css/materialize.css"
import "materialize-css/dist/js/materialize.js"


import Swal from 'sweetalert2'
Window.Swal = Swal;


import 'sweetalert2/dist/sweetalert2.min.css';


createApp(App).use(router).mount('#app')