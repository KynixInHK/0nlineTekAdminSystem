import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createWebHashHistory, createRouter } from 'vue-router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

const routes = [
    {
        path: '/', component: () => import('./view/background.vue'), children: [
            { path: '/main', component: () => import('./view/main.vue') },
            { path: '/guest', component: () => import('./view/guest.vue') }
        ], redirect: '/main'
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

const app = createApp(App)
app.directive('drag', {
    beforeMount(el, binding) {
        el.onmousedown = function(e) {
            var disx = e.pageX - el.offsetLeft
            var disy = e.pageY - el.offsetTop
            document.onmousemove = function (e) {
              el.style.left = e.pageX - disx + 'px'
              el.style.top = e.pageY - disy + 'px'
            }
            document.onmouseup = function() {
              document.onmousemove = document.onmouseup = null
            }
        }
    }
})
app.use(router)
app.use(ElementPlus)
app.use(VueAxios, axios)
app.provide('axios', app.config.globalProperties.axios)
app.mount('#app')
