import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createHead} from '@unhead/vue'

import './assets/main.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faTelegram, faDiscord, faYoutube} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'

library.add(faBars,faDiscord,faTelegram,faTwitter,faYoutube,faCopyright)

createApp(App)
.use(createHead())
.component('font-awesome-icon', FontAwesomeIcon)
.use(router)
.mount('#app')
