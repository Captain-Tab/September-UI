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

// 单元测试
import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)

const expect = chai.expect
{
    const Constructor = Vue.extend(Button) // 将vue组件转化为构造函数
    const button = new Constructor({
        propsData: {
            icon: 'setting'
        }
    }) // 通过构造函数构造新的button组件
    button.$mount('#test')
    let useElement = button.$el.querySelector('use') // 获取组件的use元素
   let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#s-setting') // 期望组件的链接为s-setting
    button.$el.remove()
    button.$destroy()
}
{
    const Constructor = Vue.extend(Button) // 将vue组件转化为构造函数
    const button = new Constructor({
        propsData: {
            icon: 'setting'
        }
    }) // 通过构造函数构造新的button组件
    const div = document.createElement('div')
    document.body.appendChild(div)
    button.$mount(div)
    let svg = button.$el.querySelector('svg') // 获取组件的svg元素
    let { order } = window.getComputedStyle(svg)
    expect(order).to.eq('1') // 期望组件的位置为1
    button.$el.remove()
    button.$destroy()
}
{
    //
    const Constructor = Vue.extend(Button) // 将vue组件转化为构造函数
    const vm = new Constructor({
        propsData: {
            icon: 'setting'
        }
    })
    vm.$mount()
    let spy = chai.spy(function (){})
    vm.$on('click', spy)
    let svg = button.$el// 获取组件的svg元素
    button.click()
    expect(spy).to.have.been.called()
}
