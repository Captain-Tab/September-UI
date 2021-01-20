const expect = chai.expect;
import Vue from 'vue'
import Tab from '../src/Tab'
import TabsHead from '../src/TabHead'
import TabsBody from '../src/TabBody'
import TabsItem from '../src/TabItem'
import TabsPanel from '../src/TabPanel'

Vue.component('s-tab', Tab)
Vue.component('s-tab-head', TabsHead)
Vue.component('s-tab-body', TabsBody)
Vue.component('s-tab-item', TabsItem)
Vue.component('s-tab-panel', TabsPanel)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('TabsItem', () => {

    it('存在.', () => {
        expect(TabsItem).to.exist
    })

    it('接受 name 属性', () => {
        const Constructor = Vue.extend(TabsItem)
        const vm = new Constructor({
            propsData: {
                name: 'xxx',
            }
        }).$mount()
        expect(vm.$el.getAttribute('data-name')).to.eq('xxx')
    })
    it('接受 disabled 属性', () => {
        const Constructor = Vue.extend(TabsItem)
        const vm = new Constructor({
            propsData: {
                disabled: true,
            }
        }).$mount()
        expect(vm.$el.classList.contains('disabled')).to.be.true
        const callback = sinon.fake();
        vm.$on('click', callback)
        vm.$el.click()
        expect(callback).to.have.not.been.called
    })
})
