import Toast from "../Toast";

export default {
    install (Vue, options) {
        Vue.prototype.$toast = function (message, closeOption) {
            let Constructor = Vue.extend(Toast)
            let toast = new Constructor({
                propsData: { closeButton: closeOption }
            })
            toast.$slots.default = [message]
            toast.$mount()
            document.body.appendChild(toast.$el)
        }
    }
}
