import Clock from './../clock/index.js'

import template from './template.html'

export default {
    template: template,
    data () {
        return {
            msg: 'Welcome to Vue.js World!'
        }
    },
    components: {
        Clock
    }
}