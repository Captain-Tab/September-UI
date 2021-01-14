const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/Row'
import Col from "../src/Col";

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
    it('存在.', () => {
        expect(Row).to.exist
    })
    it('接受gutter属性', (done) => {
        Vue.component('s-row', Row)
        Vue.component('s-col', Col)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <s-row gutter="20">
         <s-col span="12"></s-col>
         <s-col span="12"></s-col>
        </s-row >
        `
        const vm = new  Vue({el: div})
        setTimeout(()=>{
            const cols = vm.$el.querySelectorAll('.col')
            expect(getComputedStyle(cols[0]).paddingLeft).to.eq('10px')
            expect(getComputedStyle(cols[1]).paddingRight).to.eq('10px')
            done()
            vm.$el.remove()
            vm.$destroy()
        })
    })
    it('接受align属性', ()=>{
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Row)
        const vm = new Constructor({
            propsData: {
                align: 'right'
            }
        }).$mount(div)
        const element = vm.$el
        expect(getComputedStyle(element).justifyContent).to.equal('flex-end')
        vm.$destroy()
    })
})
