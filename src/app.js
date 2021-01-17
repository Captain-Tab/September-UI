import Vue from 'vue'
import Button from "./Button";
import  Icon from './Icon'
import ButtonGroup from "./ButtonGroup";
import Input from "./Input";
import Row from "./Row";
import Col from "./Col";
import Layout from "./Layout";
import Header from "./Header";
import Side from "./Side";
import Content from "./Content";
import Footer from "./Footer";

Vue.component('s-button', Button)
Vue.component('s-icon', Icon)
Vue.component('s-button-group', ButtonGroup)
Vue.component('s-input', Input)
Vue.component('s-row', Row)
Vue.component('s-col', Col)
Vue.component('s-layout', Layout)
Vue.component('s-content', Content)
Vue.component('s-header', Header)
Vue.component('s-side', Side)
Vue.component('s-footer', Footer)

new Vue({
    el: '#app',
    data : {
        isLoading: false,
        message: 'hi'
    },
    methods: {
        test (e) {
            console.log('test', e)
        }
    }
})

// 单元测试
// import chai from 'chai'
//
// const expect = chai.expect
// // 单元测试
// {
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//         propsData: {
//             icon: 'settings'
//         }
//     })
//     vm.$mount()
//     let useElement = vm.$el.querySelector('use')
//     let href = useElement.getAttribute('xlink:href')
//     expect(href).to.eq('#s-settings')
//     vm.$el.remove()
//     vm.$destroy()
// }
// {
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//         propsData: {
//             icon: 'settings',
//             loading: true
//         }
//     })
//     vm.$mount()
//     let useElement = vm.$el.querySelector('use')
//     let href = useElement.getAttribute('xlink:href')
//     expect(href).to.eq('#s-loading')
//     vm.$el.remove()
//     vm.$destroy()
// }
// {
//     const div = document.createElement('div')
//     document.body.appendChild(div)
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//         propsData: {
//             icon: 'settings'
//         }
//     })
//     vm.$mount(div)
//     let svg = vm.$el.querySelector('svg')
//     let {order} = window.getComputedStyle(svg)
//     expect(order).to.eq('1')
//     vm.$el.remove()
//     vm.$destroy()
// }
// {
//     const div = document.createElement('div')
//     document.body.appendChild(div)
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//         propsData: {
//             icon: 'settings',
//             iconPosition: 'right'
//         }
//     })
//     vm.$mount(div)
//     let svg = vm.$el.querySelector('svg')
//     let {order} = window.getComputedStyle(svg)
//     expect(order).to.eq('2')
//     vm.$el.remove()
//     vm.$destroy()
// }
// {
//     // mock
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//         propsData: {
//             icon: 'settings',
//         }
//     })
//     vm.$mount()
//     vm.$on('click', function () {
//         expect(1).to.eq(1)
//     })
//     // 希望这个函数被执行
//     let button = vm.$el
//     button.click()
// }

