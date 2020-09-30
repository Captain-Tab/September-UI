import Vue from 'vue'
import Button from "./Button";
import  Icon from './Icon'
import ButtonGroup from "./ButtonGroup";

Vue.component('s-button', Button)
Vue.component('s-icon', Icon)
Vue.component('s-button-group', ButtonGroup)

new Vue({
    el: '#app',
    data : {
        isLoading: false
    }
})
