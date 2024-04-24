import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserPlus, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserPlus, faEdit, faTrashAlt)

const app = document.getElementById('app')

if (app) {
    createInertiaApp({
        resolve: name => require(`./Pages/${name}`),
        setup({el, App, props, plugin}) {
            const vueApp = createApp({ render: () => h(App, props) })
                .use(plugin)
                .component('font-awesome-icon', FontAwesomeIcon)
            vueApp.mount(el)
        },
    })
}
