import Toast from "../Toast";

let currentToast

// create a new Toast component
const createToast = ({Vue, message, propsData, onClose}) => {
    let Constructor = Vue.extend(Toast)
    let toast = new Constructor({propsData})
    toast.$slots.default = [message]
    toast.$mount()
    toast.$on('close', onClose)
    document.body.appendChild(toast.$el)
    return toast
}

// make sure there is a only Toast component before create a new Toast
export default {
    install (Vue, options) {
        Vue.prototype.$toast = function (message, toastOption) {
            currentToast ? currentToast.close() : ''
            currentToast  = createToast({ Vue, message, propsData: toastOption, onClose: ()=> { currentToast = null} })
        }
    }
}
