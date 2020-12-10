import eventBus from './eventBus'
import sdk from './sdk'

export default {
    install(Vue) {
        Vue.prototype.$eventBus = eventBus;
        Vue.prototype.$sdk = sdk;
    }
}
